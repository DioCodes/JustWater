import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { TestUserScreen } from '../screens/TestUserScreen';
import { CustomSlideNavigation } from '../navigation/CustomSlideNavigation';

import theme from "../theme";

export const MainNavigation = ({ navigation }) => {
  const Stack = createStackNavigator();
  
  const MainStack = () => {
    return(
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerBackTitle: "Назад",
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={CustomSlideNavigation} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="UserScreen" component={TestUserScreen} />
      </Stack.Navigator>
    )
  };
  
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}