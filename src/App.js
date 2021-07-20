import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import {store} from '@test-redux';
import {AppNavigator} from '@test-navigator';

if (__DEV__) {
  axios.interceptors.request.use(request => {
    console.log('>>> Request', request);
    return request;
  });

  axios.interceptors.response.use(
    response => {
      console.log('<<< Response:', response);
      return response;
    },
    error => {
      console.log('*** ', error);
      return Promise.reject(error);
    },
  );
}
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
