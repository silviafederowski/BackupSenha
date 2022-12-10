import React from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import css from "../Css/css";
import { GeraSenha } from "../Components/GeraSenha";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

const digitos = 5;
const pares = true;
const repete = false;
const letras = true;
const numeros = true;

const columns = pares ? digitos + 1 + 6 : digitos + 1 + 2;
// Dimensions.get("window").width / (digitos + 1 + 5) - 1;

const CreateHeader = () => {
  let colunas = Array.from(Array(columns).keys());
  let i = 0;
  for (i = 0; i < columns; i++) {
    if (i <= digitos) {
      colunas[i] = "";
    }
    if (i == digitos + 1) {
      colunas[i] = "CL";
    }
    if (i == digitos + 2) {
      colunas[i] = "CE";
    }
    if (i == digitos + 3) {
      colunas[i] = "PC";
    }
    if (i == digitos + 4) {
      colunas[i] = "PI";
    }
    if (i == digitos + 5) {
      colunas[i] = "PCE";
    }
    if (i == digitos + 6) {
      colunas[i] = "PIE";
    }
  }

  return (
    <View style={css.FlatHeaderFooter}>
      {colunas.map((conteudo) => {
        return (
          <View style={css.flatHeaderView("black")}>
            <Text style={css.flatHeaderText}>{conteudo}</Text>
          </View>
        );
      })}
    </View>
  );
};

function createRows(data) {
  const rows = Math.floor(data.length / columns);
  return data;
}

class SenhaOnlineScreen extends React.Component {
  state = {
    data: [
      { id: "00", name: "0" },
      { id: "01", name: "1" },
      { id: "02", name: "2" },
      { id: "03", name: "3" },
      { id: "04", name: "4" },
      { id: "05", name: " " },
      { id: "06", name: "06" },
      { id: "07", name: "07" },
      { id: "10", name: "10" },
      { id: "11", name: "11" },
      { id: "12", name: "12" },
      { id: "13", name: "13" },
      { id: "14", name: "4" },
      { id: "15", name: "5" },
      { id: "16", name: "6" },
      { id: "17", name: "7" },
      { id: "10", name: "0" },
      { id: "20", name: " " },
      { id: "11", name: "11" },
      { id: "12", name: "12" },
      { id: "13", name: "13" },
      { id: "14", name: "14" },
      { id: "15", name: "25" },
      { id: "35", name: "35" },
    ],
  };

  render() {
    return (
      <SafeAreaView style={[css.mainBody, { alignItems: "center" }]}>
        <FlatList
          data={createRows(this.state.data)}
          keyExtractor={(item) => item.id}
          numColumns={columns}
          // columnWrapperStyle={css.column}
          ListHeaderComponent={CreateHeader(this.state.data)}
          stickyHeaderIndices={[0]}
          style={{ width: "99%" }}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  " " == item.name
                    ? css.flatItemView("#FFFFFF")
                    : css.flatItemView("#D8D8BF"),
                ]}
              >
                <Text style={css.flatItemText}>{item.name}</Text>
              </View>
            );
          }}
        />
        <View style={{ alignItems: "center" }}>
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
      </SafeAreaView>
    );
  }
}
;
export default SenhaOnlineScreen;
