// https://aboutreact.com/react-native-login-and-signup/
/* import "react-native-gesture-handler"; */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ContactScreen from "../Screen/BottomScreens/ContactScreen";
import HelpScreen from "../Screen/BottomScreens/HelpScreen";
import HomeScreen from "../Screen/DrawerScreens/HomeScreen";
import InferiorNavigatorRoutes from "./InferiorNavigatorRoutes";

const Tab = createBottomTabNavigator();

const BottomNavigatorRoutes = () => {
  return (
    <Tab.Navigator   screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreenBottom."
        component={InferiorNavigatorRoutes}
        options={{
          tabBarLabel: "Home",
         
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-voice"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="inferior"
        component={InferiorNavigatorRoutes}
        options={{
          tabBarLabel: "Inferior",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-voice"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default BottomNavigatorRoutes;
