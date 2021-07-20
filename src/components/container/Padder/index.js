import React from 'react';
import {View} from 'react-native';

const Styles = {
  wrapper: {
    paddingHorizontal: 16,
  },
};

export default class Padder extends React.Component {
  render() {
    const {style, children} = this.props;
    return <View style={[Styles.wrapper, style]}>{children}</View>;
  }
}
