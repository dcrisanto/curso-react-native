import React from 'react';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(props)  { 
  const { navigation } = props;
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
      <SafeAreaView>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Button title="Ir a ajustes" onPress={ goToSettings } />
      </SafeAreaView>
    );
}
