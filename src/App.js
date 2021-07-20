import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import {store} from '@test-redux';
import {AppNavigator} from '@test-navigator';

axios.interceptors.request.use(config => {
  console.log('request ==>', config);
});

axios.interceptors.response.use(config => {
  console.log('response ==>', config);
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
