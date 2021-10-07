import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Linking } from 'react-native';
import api from '../Utils/api'

export default function Register(){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = async (e) => {
        setError("")
       
        if (!firstname || !lastname || !username || !email || !password) {
            setError("all field are required")
        }

        try {
            const result = await api.post('/users/', {firstname, lastname, username, email, password});

            if (result.status === 201) {
                console.log(result)
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <View>
            <Text>Register</Text>
            <TextInput placeholder="firstname" value={firstname} onChangeText={(firstname) => setFirstname(firstname)}/>
            <TextInput placeholder="lastname" value={lastname} onChangeText={(lastname) => setLastname(lastname)}/>
            <TextInput placeholder="user name" value={username} onChangeText={(username) => setUsername(username)}/>
            <TextInput placeholder="email" value={email} onChangeText={(email) => setEmail(email)}/>
            <TextInput placeholder="password" value={password} onChangeText={(password) => setPassword(password)}/>
            <Button title="GO" onPress={handleSubmit}/>
        </View>
    )
}

