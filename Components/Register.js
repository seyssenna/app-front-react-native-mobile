import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Register extends React.Component{

    render() {
        return (
            <View>
                <TextInput placeholder="name"/>
                <TextInput placeholder="firstname"/>
                <TextInput placeholder="user name"/>
                <TextInput placeholder="email"/>
                <TextInput placeholder="password"/>
                <Button title="GO" onPress={() => {}}/>
            </View>
        )
    }      
}
export default Register