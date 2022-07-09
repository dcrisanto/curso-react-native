import React from "react";
import {TextInput, Button, Text, View} from "react-native"

export default function LoginForm() {
    return (
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="password" />
            <Button title="Login" onPress={() => console.log('Logear')} />
        </View>
    );
}
