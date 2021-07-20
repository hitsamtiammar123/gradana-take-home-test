import React from 'react';
import {View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from './styles';

export default class Base extends React.Component {
  renderHeader() {
    const {renderHeader} = this.props;
    if (renderHeader) {
      return renderHeader;
    }
    return null;
  }
  renderBody() {
    const {staticView, children} = this.props;
    if (staticView) {
      return <View style={Styles.wrapper}>{children}</View>;
    }
    return <ScrollView style={Styles.wrapper}>{children}</ScrollView>;
  }
  renderWrapper() {
    const {style} = this.props;
    return (
      <SafeAreaView style={[Styles.wrapper, style]}>
        {this.renderHeader()}
        <KeyboardAvoidingView style={Styles.wrapper}>
          {this.renderBody()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  render() {
    return this.renderWrapper();
  }
}
