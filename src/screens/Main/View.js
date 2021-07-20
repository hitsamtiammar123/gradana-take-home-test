import React from 'react';
import axios from 'axios';
import {Button, View} from 'react-native';
import {Base, Padder} from '@test-component-container';
import Styles from './styles';

export default class Main extends React.Component {
  componentDidMount() {
    console.log('di mount');
    fetch('https://dummyapi.io/data/api/user?page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'app-id': '60f6e353628772191966a88f',
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log('success', result);
      })
      .catch(err => {
        console.log('error', {err});
      });
  }

  render() {
    return (
      <Base staticView>
        <Padder style={Styles.wrapper}>
          <View style={Styles.button}>
            <Button title="dummyapi.io user data" />
          </View>
          <View style={Styles.button}>
            <Button title="Camera test" />
          </View>
          <View style={Styles.button}>
            <Button title="GPS test" />
          </View>
          <View style={Styles.button}>
            <Button title="Dropdown test" />
          </View>
        </Padder>
      </Base>
    );
  }
}
