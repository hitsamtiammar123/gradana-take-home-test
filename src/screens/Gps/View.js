import React from 'react';
import {TouchableOpacity, Text, View, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Base, Padder} from '@test-component-container';
import Styles from './styles';

export default class Gps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: {},
    };
  }

  onCurrentLocationPressed() {
    const self = this;
    Geolocation.getCurrentPosition(
      res => {
        console.log('success to get current location', res);
        self.setState({
          coords: res.coords,
        });
      },
      err => {
        console.log('Error when get current location', err);
        Alert.alert('Error', 'An Error occured when getting current location');
      },
    );
  }
  render() {
    const {coords} = this.state;
    return (
      <Base staticView>
        <Padder style={Styles.wrapper}>
          <TouchableOpacity
            onPress={() => this.onCurrentLocationPressed()}
            style={Styles.button}>
            <Text style={Styles.buttonText}>Click to get current Location</Text>
          </TouchableOpacity>
          {Object.keys(coords).length !== 0 && (
            <View style={Styles.content.container}>
              <View style={Styles.content.textContainer}>
                <Text style={Styles.bold}>Latitude: </Text>
                <Text>1.032040303</Text>
              </View>
              <View style={Styles.content.textContainer}>
                <Text style={Styles.bold}>Longitude: </Text>
                <Text>1.032040303</Text>
              </View>
            </View>
          )}
        </Padder>
      </Base>
    );
  }
}
