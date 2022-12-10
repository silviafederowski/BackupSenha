// Import React and Component
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import css from "../Css/css";

const HelpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={css.mainBody}>
        <View
          style={css.viewBasic}
        >
          <Text
            style={[css.Texto16,{fontSize:20}]}
          >
            {"\n\n"}
            This is the HELP Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        ></Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          Aqui vem a barra com help config contact
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HelpScreen;
