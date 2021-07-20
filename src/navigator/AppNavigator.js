import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import * as SCREENS from '@test-screens';

enableScreens();
const Stack = createNativeStackNavigator();

export default class AppNavigator extends React.Component {
  screenKeys() {
    return Object.keys(SCREENS);
  }

  extraProps() {
    return {
      Main: {
        options: {
          title: '',
          headerShown: false,
        },
      },
    };
  }

  render() {
    const keys = this.screenKeys();
    const extraPropsScreens = this.extraProps();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
          initialRouteName="Main">
          {keys.map(key => {
            const screen = SCREENS[key];
            const extraProps = extraPropsScreens.hasOwnProperty(key)
              ? extraPropsScreens[key]
              : {};
            return (
              <Stack.Screen
                key={key}
                name={key}
                component={screen}
                {...extraProps}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
