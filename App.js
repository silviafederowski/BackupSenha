import "react-native-gesture-handler" ;
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./Screen/SplashScreen";

import DrawerNavigatorRoutes from "./Navigators/DrawerNavigatorRoutes";
import AuthNavigatorRoutes from "./Navigators/AuthNavigatorRoutes";
import BottomNavigatorRoutes from "./Navigators/BottomNavigatorRoutes";

import { LogBox } from "react-native";
import { Provider } from "./context/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreLogs(['Warning: Failed %s type: %s%s, prop, Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.']);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="AuthNavigatorRoutes"
          component={AuthNavigatorRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigatorRoutes"
          component={DrawerNavigatorRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* export default App; */
export default () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};
// //=========================================================
// import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { View, Text } from 'react-native'

// const Stack = createStackNavigator()
// const DrawerStack = createDrawerNavigator()
// import SplashScreen from "./Screen/SplashScreen";
// import SenhaOnlineScreen from './Screen/DrawerScreens/SenhaOnlineScreen';
// import DrawerNavig from './Navigators/DrawerNavigatorRoutes';

// import BottomNavigatorRoutes from './Navigators/BottomNavigatorRoutes';
// // import AppDrawerStack from "./Navigators/DrawerNavig";

// // Drawer code
// //
// function AppDrawerStack() {
//     // <DrawerStack.Navigator drawerContent={props => <DrawerView {...props} />}></DrawerStack.Navigator>
//     return (
//         <DrawerStack.Navigator>
//             <DrawerStack.Screen name='BottomNavigatorRoutes' component={BottomNavigatorRoutes} />
//             <DrawerStack.Screen name="DrawerNavig.." component={DrawerNavig}/>
//         </DrawerStack.Navigator>
//     )

// }

// function DrawerView() {
//     return (
//         <View>
//             <Text>
//                 Drawer View
//             </Text>
//         </View>
//     )
// }

// export default function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="AppDrawerStack..." component={AppDrawerStack} />
//             <Stack.Screen name="DrawerNavig.." component={DrawerNavig}/>
//         </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
