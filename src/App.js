import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { View, Platform } from "react-native";
import { Button, Div, Form, Icon, Init, P, SearchBar, Span } from "./Components/Html";
import _404 from "./other/404";
import { adminState } from "./state/adminState";
import { foodState, home } from "./state/foodState";
import { userState } from "./state/userState";
import { propTypes, states, contextStates } from "./utils/context/contexts";
import ToastProvider, { Toast } from "./utils/toast";
import { Layout, header } from "./other/Layout";
import { rtl } from "./other/rtl"
import { LogBox } from 'react-native';

import Home from './screens/mobile/Home'
import ChildBobile from './screens/mobile/ChildBobile'
rtl()
LogBox.ignoreAllLogs();



const Tab = createNativeStackNavigator()
const Food = () => {
  const navigation = useNavigation()
  let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
  const allState = states()
  const toast = new Toast(allState)
  const p = { ...allState, toast }
  home(p)
  const _food = ({ navigation, route }) => new foodState({ ...p, navigation, route })
  const _user = ({ navigation, route }) => new userState({ ...p, navigation, route })
  const _admin = ({ navigation, route }) => new adminState({ ...p, navigation, route })
  const reducer = (props) => ({ _food: _food(props), _user: _user(props), _admin: _admin(props), })

  const _children = (Component, key) => ({ children: (props) => <Layout _key={key} {...props} {...p}><Component {...props} {...p} {...reducer(props)} /></Layout> })



  useEffect(() => {
    p.$input.set('a', 'a');
  }, [])

  const ref = useRef()

  const height = Platform.OS === 'web' ? '100vh' : '100%'
  return (
    <Span h={height} w='100%' onClick={()=>{p.$input.get('dropdownDrawer')?.current.setNativeProps({ style: { display:'flex',transform: [{ scale: 0 }] } })}}>
      <contextStates.Provider value={p}>
        <Init ref={(e) => allState.set$(e)} id={'s'} />
        <ToastProvider {...p} />
        <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
          <Tab.Group>
            <Tab.Screen name="Home" options={{ title: 'home', headerShown: false }} {..._children(Home)} />
            <Tab.Screen name="ChildBobile" options={{ title: 'home', header:()=>
            <SearchBar Register={p.width > 395 ?true:false}  icon={'filter'} iconPress={()=>{p.setshowFilterModal(true)}} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'}
            logoPress={()=>navigation.navigate('Home')}
            row={<Span fd='row' mt={19} >
              <P fs={10} mh={7} >موبایل تبلت</P>
              <P fs={10} mh={7} >هدفون هنزفیری</P>
              <P fs={10} mh={7} >لوازم جانبی</P>
              </Span>}
             src={require('./assets/images/logo.png')} /> }} {..._children(ChildBobile)} />
          </Tab.Group>
          <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
        </Tab.Navigator >
      </contextStates.Provider>
    </Span>
  )
}


// propTypes(Home)

const linking = {
  prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/Home',
      ChildBobile: '/ChildBobile',
      // ChildBobile: '/ChildBobile:id',
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
