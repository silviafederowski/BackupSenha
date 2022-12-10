import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../Screen/AuthScreens/RegisterScreen";
import LoginScreen from "../Screen/AuthScreens/LoginScreen";

const Stack = createStackNavigator();
const AuthNavigatorRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Login", //Set Header
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Registro", //Set Header
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigatorRoutes;
