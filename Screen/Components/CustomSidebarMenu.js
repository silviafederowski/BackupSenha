//
// https://aboutreact.com/react-native-login-and-signup/
// Import React and Component
import React from "react";
import { View, Text, Alert } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import css from "../Css/css";

const CustomSidebarMenu = (props) => {
  return (
    <View style={css.sideMenuContainer}>
      <View style={css.profileHeader}>
        <View style={css.profileHeaderPicCircle}>
          <Text style={css.profileHeaderSymbol}>{"SilSys apps".charAt(0)}</Text>
        </View>
        <Text style={css.profileHeaderText}>SilSys Apps</Text>
      </View>
      <View style={css.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) => (
            <Text style={{ color: "#d8d8d8" }}>Logout</Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              "Logout",
              "Tem certeza que deseja sair?",
              [
                {
                  text: "Não",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Sim",
                  onPress: () => {
                    AsyncStorage.clear();
                    /* console.log("dei o clear");
                     */ props.navigation.replace("AuthNavigatorRoutes");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

//const stylesSidebar = StyleSheet.create({
/* sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#307ecc",
    paddingTop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#307ecc",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
  }, */
//});
