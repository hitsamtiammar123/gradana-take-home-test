import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Styles from './styles';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureUri: '',
      picture: null,
    };

    this.camera = React.createRef();
    this.onPictureTaken = this.onPictureTaken.bind(this);
  }

  onPictureTaken() {
    const options = {quality: 0.5, base64: false, pauseAfterCapture: true};
    const that = this;
    console.log('camera ', this.camera);
    if (this.camera.current) {
      this.camera.current.takePictureAsync(options).then(result => {
        console.log('picture taken', result);
        that.setState({
          picture: result,
          pictureUri: result.uri,
        });
      });
    }
  }

  renderPreview() {
    const {pictureUri} = this.state;
    const {navigation} = this.props;
    return (
      <View style={Styles.preview.container}>
        <Image
          source={{uri: pictureUri}}
          resizeMode="cover"
          style={Styles.preview.image}
        />
        <View style={Styles.preview.control.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              Styles.preview.control.button,
              Styles.preview.control.accept,
            ]}>
            <Text style={Styles.preview.control.text}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({pictureUri: ''})}
            style={[
              Styles.preview.control.button,
              Styles.preview.control.reject,
            ]}>
            <Text style={Styles.preview.control.text}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderCamera() {
    return (
      <RNCamera
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        ref={this.camera}
        style={Styles.camera.container}>
        <View style={Styles.camera.control.container}>
          <TouchableOpacity
            onPress={() => this.onPictureTaken()}
            style={Styles.camera.control.button}
          />
        </View>
      </RNCamera>
    );
  }

  render() {
    const {pictureUri} = this.state;
    return (
      <View style={Styles.wrapper}>
        {pictureUri === '' ? this.renderCamera() : this.renderPreview()}
      </View>
    );
  }
}
