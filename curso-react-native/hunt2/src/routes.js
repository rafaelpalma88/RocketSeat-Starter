import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            //options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
