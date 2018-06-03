import React, { Component } from 'react';
import {StyleSheet,Text, View,Image
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import Home from './component/Home';
import About from './component/About';
import Guidelines from './component/Guidelines';
import PoemList from './component/PoemList';
import PoemInput from './component/PoemInput';
import PoemModify from './component/PoemModify';
import {Container,Content,Header,Body} from 'native-base';
class App extends Component{
     render(){
      return(
      <MyApp/>
         );
     }
}



const MyApp=DrawerNavigator({
   Home:{
    screen:Home
   },
   About:{
    screen:About
   },
   Guidelines:{
    screen:Guidelines
   },
   PoemList:{
    screen:PoemList
   },
   PoemInput:{
    screen:PoemInput
   },
    PoemModify:{
    screen:PoemModify
   }

});

 const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  drawerImage:{
    height:150,
    width:150,
    borderRadius:75,
  }
 });
 export default App;