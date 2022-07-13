import React from 'react'
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

    return (
      <SafeAreaView>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Button title="Ir a Home" onPress={ () => goToPage("Home") } />
      </SafeAreaView>
    )
}
