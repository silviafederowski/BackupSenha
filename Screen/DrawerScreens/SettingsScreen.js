import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import RadioButton from "../Components/RadioButton.js";
import css from "../Css/css";
import CheckBox from "../Components/CheckBox.js";

export default SettingsScreeens = () => {
  const [checked, setChecked] = React.useState("first");
  const [digitos, setDigitos] = useState([]);

  useEffect(() => {
    let numeros = [];
    for (let i = 5; i <= 9; i++) {
      numeros.push(i);
    }
    setDigitos(numeros);
  }, []);

  const simNao = [
    { key: "S", text: "Sim", image: "check-bold" },
    { key: "N", text: "Não", image: "close-thick" },
  ];

  const titulo = "Repete?";
  const letrasNumeros = [
    { key: "Letras", text: "", image: "alphabetical-variant" },
    { key: "Números", text: "", image: "numeric" },
  ];
  const [comecar, setComecar] = useState([]);
  useEffect(() => {
    let repete = [];
    for (let i = 0; i <= 10; i++) {
      repete.push(i);
    }
    setComecar(repete);
  }, []);

  return (
    <SafeAreaView style={css.mainBody}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      {/* {renderHeader()} */}

      <View style={css.viewBasic}>
        <SelectDropdown
          data={digitos}
          // defaultValueByIndex={1}
          // defaultValue={'England'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Dígitos"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={css.dropdownBtnStyle}
          buttonTextStyle={css.dropdownBtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#FFF"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={css.dropdownDropdownStyle}
          rowStyle={css.dropdownRowStyle}
          rowTextStyle={css.dropdownRowTxtStyle}
        />
      </View>

      <View style={css.viewBasic}>
        <RadioButton PROP={simNao} TEXTO="Pares?" />
      </View>
      <View style={css.viewBasic}>
        <RadioButton PROP={simNao} TEXTO="Repetição?" />
      </View>
      <View style={css.viewBasic}>
        <SelectDropdown
          data={comecar}
          // defaultValueByIndex={1}
          // defaultValue={'England'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Começar"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={css.dropdownBtnStyle}
          buttonTextStyle={css.dropdownBtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#FFF"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={css.dropdownDropdownStyle}
          rowStyle={css.dropdownRowStyle}
          rowTextStyle={css.dropdownRowTxtStyle}
        />
      </View>

      <CheckBox PROP={letrasNumeros} TEXTO={" "} />

      
      <View style={css.viewBasic}>
        <TouchableOpacity style={css.buttonStyle}>
          <Text style={css.buttonTextStyle}>OK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
