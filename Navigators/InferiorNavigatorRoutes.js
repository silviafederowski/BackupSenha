import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../Screen/AuthScreens/RegisterScreen";
import SettingsScreen from "../Screen/AuthScreens/LoginScreen";
import HomeScreen from "../Screen/DrawerScreens/HomeScreen"

const Stack = createStackNavigator();
const InferiorNavigatorRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home", //Set Header
        }}
      />

      <Stack.Screen
        name="SettingScreen"
        component={SettingsScreen}
        options={{
          title: "Setting", //Set Header
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
export default InferiorNavigatorRoutes;
