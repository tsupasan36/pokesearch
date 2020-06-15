import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Landing from "../screens/Landing";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default class LandingNavigation extends Component {
  render() {
    return (
      <NavigationContainer initialRouteName="Landing">
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
