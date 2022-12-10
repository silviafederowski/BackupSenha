import React, { useState, useEffect } from "react";
import { ActivityIndicator, AnimatedView, Image, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import css from "./Css/css";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const [getValue, setGetValue] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      AsyncStorage.getItem("user_id")
        .then((value) => {
          setUserEmail(value);
          if (value === null) {
            console.log("replace para Auth");
            navigation.replace("AuthNavigatorRoutes"); 
          }
           else {
            console.log("Replace para drawer")
            navigation.replace("DrawerNavigatorRoutes");
          }
        })
        .then((res) => {});

    }, 3000);
  }, []);

  return (
    <View style={css.splashContainer}>
      <Image
        source={require("../assets/Image/SilSys.png")}
        style={css.splashLogo("white")}
      />
      {
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={css.activityIndicator}
        />
      }
    </View>
  );
};

export default SplashScreen;
