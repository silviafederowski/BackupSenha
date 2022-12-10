//
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import css from "../Css/css";

const HomeScreen = () => {
  return (
    <SafeAreaView style={css.mainBody}>
      <View style={css.splashContainer}>
        <Image
          source={require("../../assets/Image/SilSys.png")}
          style={css.splashLogo("white")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
