import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";

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

/* Greeting.defaultProps = {
    firstname: 'Ron',
    lastname: 'Con pasas',
}; */

Greeting.propTypes = {
    firstname: PropTypes.string.isRequired, // indicando que es de tipo string y obligatorio
    lastname: PropTypes.string.isRequired,
}