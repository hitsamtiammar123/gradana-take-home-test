import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Styles from './styles';

export default class InputPicker extends React.Component {
  static defaultProps = {
    title: '',
    selectedData: '',
    listData: [],
    onSelect: () => {},
    style: {},
    enable: true,
    labelKey: 'label',
    valueKey: 'value',
  };

  static propTypes = {
    title: PropTypes.string,
    selectedData: PropTypes.string,
    listData: PropTypes.arrayOf(Object),
    onSelect: PropTypes.func,
    style: PropTypes.objectOf(Object),
    enable: PropTypes.bool,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
  };

  render() {
    const {
      title,
      selectedData,
      listData,
      onSelect,
      style,
      enable,
      labelKey,
      valueKey,
    } = this.props;
    return (
      <View style={style}>
        <Text style={Styles.select.text}>{title}</Text>
        <TouchableOpacity
          style={[Styles.select.container, !enable ? Styles.disableStyle : {}]}>
          <Picker
            mode="dropdown"
            enabled={enable}
            selectedValue={selectedData}
            onValueChange={onSelect}
            style={Styles.select.picker}>
            {listData.map((item, index) => (
              <Picker.Item
                key={index}
                label={item[labelKey]}
                value={item[valueKey]}
              />
            ))}
          </Picker>
        </TouchableOpacity>
      </View>
    );
  }
}
