import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "./src/components/LoginForm";
import Greeting from "./src/components/Greeting"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      {/* <Greeting />
      <Greeting name="Dorelly Crisanto" />
      <Greeting name="Roxana Crisanto" />
      <Greeting name="Roncito" /> */}
      <Greeting firstname="Dorelly" lastname="Crisanto Silupú" />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
