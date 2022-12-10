import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LogBox } from "react-native";

import css from "../Css/css";
import { GeraSenha } from "../Components/GeraSenha";
import TableMaker from "../Components/TableMaker";

LogBox.ignoreAllLogs();//Ignore all log notifications

export default SenhaOnlineScreen = () => {
  const digitos = 5;
  const pares = true;
  const repete = false;
  const letras = true;
  const numeros = true;

  const qtdcols = pares ? digitos + 1 + 6 : digitos + 1 + 2;
  const columnsWidth = Dimensions.get("window").width / (digitos + 1 + 5) - 1;
  const headerText = Array.from(Array(qtdcols).keys());

  const CreateHeader = () => {
    
    let headerText = Array.from(Array(qtdcols).keys());
    let i = 0;
    for (i = 0; i < qtdcols; i++) {
      if (i <= digitos) {
        headerText.push( " ")
      }
      if (i == digitos + 1) {
        headerText.push( "CL")
      }
      if (i == digitos + 2) {
        headerText.push("CE")
      }
      if (i == digitos + 3) {
        headerText.push("")
      }
      if (i == digitos + 4) {
        headerText.push( "PI")
      }
      if (i == digitos + 5) {
        headerText.push( "PCE")
      }
      if (i == digitos + 6) {
        headerText.push( "PIE")
      }
      
    }
    headerText.map((elemento)=> console.log("---" + elemento))
    console.log("SenhaOnlineScreen headerText==> " + headerText)
  };

 

  CreateHeader();
  // console.log (" qtdcols= " + qtdcols)
  // console.log (" headerText = " + headerText)
  // console.log (" columnsWidth= " + columnsWidth)

  return (
    <View style={css.mainBody}>
      <View
        style={{
          flex:1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 40,
          paddingLeft: 40,
        }}
      >
        <TouchableOpacity
          style={[css.buttonStyle, { backgroundColor: "black" }]}
          onPress={() => {
            var senha = GeraSenha(
              { digitos },
              { repete },
              { letras },
              { numeros },
              { pares }
            );
          }}
        >
          <Text style={css.buttonTextStyle}>SENHA ATUAL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={css.buttonStyle}
          onPress={() => {
            var senha = GeraSenha(
              { digitos },
              { repete },
              { letras },
              { numeros },
              { pares }
            );
          }}
        >
          <Text style={css.buttonTextStyle}>NOVA SENHA</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:7}}>
      <TableMaker
        headerText={headerText}
        columnsWidth={columnsWidth}
        qtdcols={qtdcols}
        rows={10}
      ></TableMaker>
      </View>
    </View>
  );
};
// }

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "bold" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});
