// Import React and Component
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import css from "../Css/css";

const ContactScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={css.mainBody}>
        <View
          style={css.viewBasic          }
        >
          <Text
            style={[css.Texto16,{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
            }]}
          >
            {"\n\n"}
            This is the CONTACT Screen
          </Text>
        </View>
        <Text
          style={css.Texto16}
        ></Text>
        
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
