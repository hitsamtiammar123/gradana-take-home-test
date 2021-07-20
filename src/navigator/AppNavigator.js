import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Main, DummyIO} from '@test-screens';

enableScreens();
const Stack = createNativeStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
          initialRouteName="Main">
          <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            name="Main"
            component={Main}
          />
          <Stack.Screen name="DummyIO" component={DummyIO} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
