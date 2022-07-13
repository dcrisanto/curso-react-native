import React from 'react'
import { Text, View, Button } from 'react-native'

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

    return (
      <View>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Text> Estamos en SettingsScreen </Text>
        <Button title="Ir a Home" onPress={ () => goToPage("Home") } />
      </View>
    )
}
