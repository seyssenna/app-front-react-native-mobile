import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Register extends React.Component{

    render() {
        return (
            <View>
                <TextInput placeholder="email"/>
                <TextInput placeholder="password"/>
                <Button title="Login" onPress={() => {}}/>
            </View>
        )
    }      
}
export default Register