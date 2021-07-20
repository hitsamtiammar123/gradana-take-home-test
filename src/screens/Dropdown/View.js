import React from 'react';
import {Button, View, Text} from 'react-native';
import * as CONST from '@test-redux/dropdown/dropDownConstants';
import {Base, Padder} from '@test-component-container';
import {InputPicker} from '@test-component-input';
import Styles from './styles';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProvince: null,
      listProvince: [],
      selectedDistrict: null,
      listDistrict: [],
      selectedSubDistrict: null,
      listSubDistrict: [],
      selectedVillage: null,
      selectedProvinceIndex: -1,
      selectedDistrictIndex: -1,
      selectedVillageIndex: -1,
      selectedSubDistrictIndex: -1,
      listVillages: [],
      postalCodes: [],
      showDisplayData: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const {getProvince} = this.props;
    getProvince();
  }

  componentDidUpdate(prevProps) {
    const {
      dropdownAction,
      listProvince,
      listDistrict,
      listSubDistrict,
      listVillage,
      postalCodes,
    } = this.props;
    if (dropdownAction !== prevProps.dropdownAction) {
      switch (dropdownAction) {
        case CONST.LOAD_PROVINCE_SUCCESS:
          this.setData('listProvince', listProvince);
          break;
        case CONST.LOAD_DISTRICT_SUCCESS:
          this.setData('listDistrict', listDistrict);
          break;
        case CONST.LOAD_SUB_DISTRICT_SUCCESS:
          this.setData('listSubDistrict', listSubDistrict);
          break;
        case CONST.LOAD_VILLAGE_SUCCESS:
          this.setData('listVillages', listVillage);
          break;
        case CONST.LOAD_POSTAL_CODE_SUCCESS:
          this.setData('postalCodes', postalCodes);
          break;
        default:
      }
    }
  }

  setData(key, data) {
    const dataMap = {};
    switch (key) {
      case 'listDistrict':
        dataMap.listSubDistrict = [];
        dataMap.listVillages = [];
        dataMap.postalCodes = [];
        break;
      case 'listSubDistrict':
        dataMap.listVillages = [];
        dataMap.postalCodes = [];
        break;
      case 'listVillages':
        dataMap.postalCodes = [];
        break;
      default:
    }
    this.setState({
      ...dataMap,
      [key]: data,
    });
  }

  onSubmit() {
    this.setState({showDisplayData: true});
  }

  getPostalCode() {
    const {postalCodes} = this.state;
    return Array.isArray(postalCodes) && postalCodes?.length !== 0
      ? postalCodes[0]?.postalcode
      : '-';
  }

  getCurrentData(data, index) {
    return Array.isArray(data) && data.length !== 0 ? data[index].name : '-';
  }

  render() {
    const {getDistrict, getSubDistrict, getVillage, getPostalCode} = this.props;
    const {
      listProvince,
      selectedProvince,
      listDistrict,
      selectedDistrict,
      listSubDistrict,
      selectedSubDistrict,
      listVillages,
      selectedVillage,
      selectedProvinceIndex,
      selectedDistrictIndex,
      selectedSubDistrictIndex,
      selectedVillageIndex,
      showDisplayData,
    } = this.state;
    return (
      <Base>
        <Padder style={Styles.wrapper}>
          <InputPicker
            labelKey="name"
            valueKey="id"
            enable={listProvince.length !== 0}
            title="Select Province"
            listData={listProvince}
            selectedData={selectedProvince}
            onSelect={(value, index) =>
              this.setState(
                {
                  selectedProvince: value,
                  selectedProvinceIndex: index,
                  showDisplayData: false,
                },
                () => getDistrict(value),
              )
            }
          />
          <InputPicker
            labelKey="name"
            valueKey="id"
            style={Styles.mt20}
            title="Select District"
            enable={listDistrict.length !== 0}
            listData={listDistrict}
            selectedData={selectedDistrict}
            onSelect={(value, index) =>
              this.setState(
                {
                  selectedDistrict: value,
                  selectedDistrictIndex: index,
                  showDisplayData: false,
                },
                getSubDistrict(value),
              )
            }
          />
          <InputPicker
            labelKey="name"
            valueKey="id"
            style={Styles.mt20}
            title="Select Sub District"
            enable={listSubDistrict.length !== 0}
            listData={listSubDistrict}
            selectedData={selectedSubDistrict}
            onSelect={(value, index) =>
              this.setState(
                {
                  selectedSubDistrict: value,
                  selectedSubDistrictIndex: index,
                  showDisplayData: false,
                },
                getVillage(value),
              )
            }
          />
          <InputPicker
            labelKey="name"
            valueKey="id"
            style={Styles.mt20}
            title="Select Village"
            enable={listVillages.length !== 0}
            listData={listVillages}
            selectedData={selectedVillage}
            onSelect={(value, index) =>
              this.setState(
                {
                  selectedVillage: value,
                  selectedVillageIndex: index,
                  showDisplayData: false,
                },
                () =>
                  getPostalCode(
                    listVillages[index]?.name || '',
                    listSubDistrict[selectedSubDistrictIndex]?.name || '',
                  ),
              )
            }
          />
          <View style={Styles.postalCode.container}>
            <Text style={[Styles.postalCode.text, Styles.postalCode.title]}>
              Postal Code
            </Text>
            <Text style={[Styles.postalCode.text, Styles.postalCode.code]}>
              {this.getPostalCode()}
            </Text>
          </View>
          <View style={Styles.buttonContainer}>
            <Button onPress={this.onSubmit} title="Submit" />
          </View>
          {showDisplayData && (
            <View style={Styles.displayData.container}>
              <View style={Styles.displayData.textContainer}>
                <Text style={Styles.displayData.title}>Provinces: </Text>
                <Text>
                  {this.getCurrentData(listProvince, selectedProvinceIndex)}
                </Text>
              </View>
              <View style={Styles.displayData.textContainer}>
                <Text style={Styles.displayData.title}>District: </Text>
                <Text>
                  {this.getCurrentData(listDistrict, selectedDistrictIndex)}
                </Text>
              </View>
              <View style={Styles.displayData.textContainer}>
                <Text style={Styles.displayData.title}>Sub District: </Text>
                <Text>
                  {this.getCurrentData(
                    listSubDistrict,
                    selectedSubDistrictIndex,
                  )}
                </Text>
              </View>
              <View style={Styles.displayData.textContainer}>
                <Text style={Styles.displayData.title}>Village: </Text>
                <Text>
                  {this.getCurrentData(listVillages, selectedVillageIndex)}
                </Text>
              </View>
              <View style={Styles.displayData.textContainer}>
                <Text style={Styles.displayData.title}>Postal Code: </Text>
                <Text>{this.getPostalCode()}</Text>
              </View>
            </View>
          )}
        </Padder>
      </Base>
    );
  }
}
