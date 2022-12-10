import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import { lessThan } from "react-native-reanimated";

export const GeraSenha = (caracteres, repete, letras, numeros, pares) => {
    
    // var randomstring = require("randomstring");
    var randomstring = "12345"
    var OK = false;

    // console.log("pares " + pares)
    if (pares) {
      var quantos = caracteres * 2;
    } else {
      quantos = caracteres;
    }

    while (!OK) {
      if (letras && numeros) {
        var estringue = randomstring.generate({length:{quantos},upperCaseOnly: true});
      } else {
        if (letras) {
          var estringue = randomstring.generate({length:{quantos}, charset:'alphabetic',upperCaseOnly: true});
        } else {
          var estringue = randomstring.generate({length:{quantos}, charset:'numeric'});
        }
      }
      if (repete) {
        return estringue;
        OK = true;
      } else {
        if (!Duplicidade(estringue)) {
          OK = true;
          return estringue;
        }
      }
    }
    const Duplicidade = (estringue) => {
      var OK = true;
      var senha = Array.from(estringue);
      var valida = Array.from(estringue);

      for (let i in senha) {
        for (let j in valida) {
          if (senha(i) == valida(j)) {
            OK = false;
            return OK;
          }
        }
      }
    };

    return (
      <View>
        <Text>Oi</Text>
      </View>
    );
    }

