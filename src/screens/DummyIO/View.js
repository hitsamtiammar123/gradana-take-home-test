import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Base, Padder} from '@test-component-container';
import Styles from './styles';

export default class DummmyIO extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLoading: false,
      listData: [],
    };
  }

  componentDidMount() {
    console.log('di mount');
    const _self = this;
    fetch('https://dummyapi.io/data/api/user?page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'app-id': '60f6e353628772191966a88f',
      },
    })
      .then(res => res.json())
      .then(result => {
        _self.setState({
          listData: result.data,
        });
      })
      .catch(err => {
        console.log('error', {err});
      })
      .finally(() => {
        _self.setState({
          dataLoading: false,
        });
      });
    _self.setState({
      dataLoading: true,
    });
  }

  renderItem(item, index) {
    return (
      <TouchableOpacity
        style={[
          Styles.profile.container,
          index % 2 === 0 ? Styles.profile.mr5 : {},
        ]}>
        <Image source={{uri: item.picture}} style={Styles.profile.image} />
        <Padder style={Styles.profile.detail}>
          <View style={Styles.profile.textContainer}>
            <Text style={Styles.profile.text}>First Name: </Text>
            <Text style={Styles.profile.text}>{item.firstName}</Text>
          </View>
          <View style={Styles.profile.textContainer}>
            <Text style={Styles.profile.text}>Last Name: </Text>
            <Text style={Styles.profile.text}>{item.lastName}</Text>
          </View>
          <View style={Styles.profile.textContainer}>
            <Text style={Styles.profile.text}>Email: </Text>
            <Text style={Styles.profile.text}>{item.email}</Text>
          </View>
        </Padder>
      </TouchableOpacity>
    );
  }

  renderLoading() {
    return (
      <View style={Styles.loading}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  renderContent() {
    const {listData} = this.state;
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listData}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item, index}) => this.renderItem(item, index)}
      />
    );
  }

  render() {
    const {dataLoading} = this.state;
    return (
      <Base staticView>
        <View style={Styles.wrapper}>
          {dataLoading ? this.renderLoading() : this.renderContent()}
        </View>
      </Base>
    );
  }
}
