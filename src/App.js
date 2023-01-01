    import { NavigationContainer } from "@react-navigation/native";
    import { createNativeStackNavigator } from "@react-navigation/native-stack";
    import React from "react";
    import { View, Platform } from "react-native";
    import { Button, Div, Form, Icon, Init, P } from "./Components/Html";
    import _404 from "./other/404";
    import { adminState } from "./state/adminState";
    import { foodState, home } from "./state/foodState";
    import { userState } from "./state/userState";
    import { propTypes, states } from "./utils/context/contexts";
    import ToastProvider, { Toast } from "./utils/toast";
    import { Layout, header } from "./other/Layout";
    import { rtl } from "./other/rtl"
    import { LogBox } from 'react-native';

    import Home from './screens/mobile/Home'
    rtl()
    LogBox.ignoreAllLogs();
       
    
    
    const Tab = createNativeStackNavigator()
    const Food = () => {
      let icon = Platform.OS === 'ios' ? {headerLeft: header} : {}
      const allState = states()
      const toast = new Toast(allState)
      const p = { ...allState, toast }
      home(p)
      const _food = ({ navigation, route }) => new foodState({ ...p, navigation, route })
      const _user = ({ navigation, route }) => new userState({ ...p, navigation, route })
      const _admin = ({ navigation, route }) => new adminState({ ...p, navigation, route })
      const reducer = (props) => ({ _food: _food(props), _user: _user(props), _admin: _admin(props),  })
    
      const _children = (Component, key) => ({children: (props) =><Layout _key={key} {...props} {...p}><Component {...props} {...p} {...reducer(props)} /></Layout> })
    
      return (
        <>

          <Init ref={(e) => allState.set$(e)} id={'s'} />
          <ToastProvider {...p} />
          <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' ,...icon } }} >
            <Tab.Group>
              <Tab.Screen initialParams={{ key: '' }} name="Home" options={{ title: 'home' }} {..._children(Home)} />
            </Tab.Group>
            <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
          </Tab.Navigator >
        </>
      )
    }
    
    
    propTypes(Home)
    
    const linking = {
      prefixes: ['localhost:3000://', 'http://localhost:3000'],
      config: {
        screens: {
          Home: '/Home',
          ChildFood: 'Secend',
          NotFound: '*'
        },
      },
    };
    
    
    let App
    if (Platform.OS !== 'web') {
      App = () => {
        return (
          <NavigationContainer>
            <Food />
          </NavigationContainer>
        )
      }
    }
    else {
      App = () => {
        return (
          <NavigationContainer linking={linking} >
            <View flex={1} style={{ minHeight: '100vh' }} dir='rtl' >
              <Food />
            </View>
          </NavigationContainer>
        )
      }
    }
    
    export default App;
    