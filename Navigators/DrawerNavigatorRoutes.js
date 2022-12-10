import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../Screen/DrawerScreens/HomeScreen";
import SenhaOnlineScreen from "../Screen/DrawerScreens/SenhaOnlineScreen";
import SenhaLocalScreen from "../Screen/DrawerScreens/SenhaLocalScreen";
import SettingsScreen from "../Screen/DrawerScreens/SettingsScreen";
import CustomSidebarMenu from "../Screen/Components/CustomSidebarMenu";
import NavigationDrawerHeader from "../Screen/Components/NavigationDrawerHeader";
import Testes from "../Screen/DrawerScreens/Testes";
import BottomNavigatorRoutes from "./BottomNavigatorRoutes";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator    screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="bottom"
        component={BottomNavigatorRoutes}
        options={{
          // title: "Início",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      
      
    
    </Stack.Navigator>
  );
};
 
const SenhaOnlineScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SenhaOnlineScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SenhaOnlineScreenStack"
        component={SenhaOnlineScreen}
        options={{
          title: "Senha Online",
        }}
      />
    </Stack.Navigator>
  );
};
const SenhaLocalScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SenhaLocalScreenStack"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="SenhaLocalScreen"
        component={SenhaLocalScreen}
        options={{
          title: "Senha Local",
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreenStack"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
};
const TestesStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="TestesStack"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Testes"
        component={Testes}
        options={{
          title: "Testes",
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        headerShown: false,
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#d8d8d8",
        },
      }}
      /*  screenOptions={{ headerShown: false }} */
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="HomeScreenStackDrawer"
        options={{ drawerLabel: "Home Screen" }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SenhaOnlineScreen"
        options={{ drawerLabel: "Senha Online" }}
        component={SenhaOnlineScreenStack}
      />
      <Drawer.Screen
        name="SenhaLocalScreenStack"
        options={{ drawerLabel: "Senha Local" }}
        component={SenhaLocalScreenStack}
      />
      <Drawer.Screen
        name="SettingsScreenStack"
        options={{ drawerLabel: "Settings" }}
        component={SettingsScreenStack}
      />
      <Drawer.Screen
        name="TestesStack"
        options={{ drawerLabel: "TESTES" }}
        component={TestesStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
