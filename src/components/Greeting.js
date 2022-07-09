import React from "react";
import {Text} from "react-native";

export default function Greeting(props) {
    // const {firstname="Ron", lastname="Con pasas"} = props; // object destruc
    const {firstname, lastname} = props; // object destruc
    console.log(firstname, lastname);
    return (
        <Text>
            Bienvenida {firstname} {lastname}!...
        </Text>
    );
}

Greeting.defaultProps = {
    firstname: 'Ron',
    lastname: 'Con pasas',
}