import { StylesContext } from "@mui/styles";
import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const { value } = this.state;
    const { PROP } = this.props;

    return (
      <View style={styles.borda}>
        <Text style={{ fontSize: 20 }}> {this.props.TEXTO}</Text>
        {PROP.map((res) => {
          return (
            <View
              key={res.key}
              style={[styles.container, { backgroundColor: "transparent" }]}
            >
              <Text style={styles.radioText}>{res.text}</Text>
              <TouchableOpacity
                style={{ justifyContent: "space-between" }}
                underlayColor={"purple"}
                onPress={() => {
                  this.setState({ value: res.key });
                }}
              >
                {res.image != "" ? (
                  value === res.key ? (
                    <MaterialCommunityIcons
                      name={res.image}
                      color={"green"}
                      size={50}
                      borderColor="black"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name={res.image}
                      color={"red"}
                      size={50}
                    />
                  )
                ) : (
                  <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={() => {
                      this.setState({
                        value: res.key,
                      });
                    }}
                  >
                    {value === res.key && <View style={styles.selectedRb} />}
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  borda: {
    flexDirection: "row",
    borderColor: "black",
    borderRadius: 30,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    // marginBottom: 25,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:"white",
  },
  radioText: {
    marginRight: 5,
    marginLeft: 20,
    fontSize: 16,
    color: "#000",
    fontWeight: "700",
    // backgroundColor:"green",
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#3740ff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#3740ff",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    backgroundColor: "#F3FBFE",
  },
});
