import React from "react";
import {Text} from "react-native";

export default function Greeting(props) {
    const {name} = props; // object destruc
    console.log(name);
    return <Text>Bienvenida {name}!...</Text>
}