import React from 'react';
import axios from 'axios';
import {Button, View} from 'react-native';
import {Base, Padder} from '@test-component-container';
import Styles from './styles';

export default class Main extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <Base staticView>
        <Padder style={Styles.wrapper}>
          <View style={Styles.button}>
            <Button
              onPress={() => navigation.navigate('DummyIO')}
              title="dummyapi.io user data"
            />
          </View>
          <View style={Styles.button}>
            <Button
              onPress={() => navigation.navigate('Camera')}
              title="Camera test"
            />
          </View>
          <View style={Styles.button}>
            <Button
              onPress={() => navigation.navigate('Gps')}
              title="GPS test"
            />
          </View>
          <View style={Styles.button}>
            <Button
              onPress={() => navigation.navigate('Dropdown')}
              title="Dropdown test"
            />
          </View>
        </Padder>
      </Base>
    );
  }
}
