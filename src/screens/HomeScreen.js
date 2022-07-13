import React from 'react';
import { Text, View, Button } from 'react-native'

export default function HomeScreen(props)  { 
  const { navigation } = props;
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
      <View>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Button title="Ir a ajustes" onPress={ goToSettings } />
      </View>
    );
}
