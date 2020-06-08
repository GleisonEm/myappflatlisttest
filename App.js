import api from "./services";
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  
  componentDidMount(){
    this.load();
  }

  load = async () => {
    const response = await api.get("/products");

    const { docs } = response.data;

    console.log('response: ', docs);
  };

  render(){
    return(
      <View>
        <Text
        >kkkkk
        </Text>
      </View>
    )
  }
}