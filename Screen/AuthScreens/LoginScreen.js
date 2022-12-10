import React, { createRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import css from "../Css/css";

const LoginScreen = ({ navigation }) => {
  const [userCodigo, setUserCodigo] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();
  // const { state, teste } = useContext(Context);
  /* console.log(state); */

  //==================================================================
  const [imageAnim] = useState(new Animated.Value(0));
  // Animated.timing(imageAnim, {
  //   toValue: 200,
  //   duration: 2000,
  //   useNativeDriver: true,
  // }).start();

  Animated.spring(imageAnim, {
    toValue: 200,
    speed: 1,
    duration: 5000,
    bounciness: 20,
    useNativeDriver: true,
  }).start();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userCodigo) {
      Alert.alert("Digite o código");
      return;
    }
    if (!userPassword) {
      Alert.alert("Digite a senha");
      return;
    }
    setLoading(true);

    let dataToSend = { codigo: userCodigo, senha: userPassword };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    
    let data = "";
    
    const response = fetch("http://10.0.2.2:1901/silsys")
      .then((response) => response.json())
      .then((json) => (data = json))
      .then(
        () => navigation.replace("DrawerNavigatorRoutes"),
        AsyncStorage.setItem("user_id", userCodigo),
        navigation.navigate('DrawerNavigatorRoutes', { screen: 'HomeScreenStack' })
      )
      .catch((error) => console.error(" Erro = " + error));

    /* .finally(() => {
        console.log(data[0].codigo);
        console.log(data[0].ativo);
      })*/
    setLoading(false);
    console.log("sai do fetch");
    console.log("*** " + navigator.credentials);

    return;

    //==================================================
  };

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <View style={css.mainBody}>
        <View>
          <KeyboardAvoidingView enabled>
            <Animated.View style={css.animacaoQuique(imageAnim)}
              // style={{
              //   transform: [{ translateY: imageAnim }],
              //   marginBottom: 240,
              //   justifyContent: "center",
              //   alignContent: "center",
              // }}
            >
              <Image
                source={require("../../assets/Image/SilSys.png")}
                style={css.image}
              />
            </Animated.View>
            <View style={css.SectionStyle}>
              <TextInput
                style={css.inputStyle}
                onChangeText={(UserCodigo) => setUserCodigo(UserCodigo)}
                placeholder="Digite o Código" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                /*   keyboardType="email-address" */
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={css.SectionStyle}>
              <TextInput
                style={css.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Digite a Senha" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={css.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={css.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={css.buttonTextStyle}>ENTRAR</Text>
            </TouchableOpacity>
            <Text
              style={css.registerTextStyle}
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              Novo(a) por aqui? Registre-se!
            </Text>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
