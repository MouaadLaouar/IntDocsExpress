import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home/Home";
import IntOrgsDetails from "../Screens/IntOrgsDetails/IntOrgsDetails";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="IntOrgsDetails" component={ IntOrgsDetails } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;
