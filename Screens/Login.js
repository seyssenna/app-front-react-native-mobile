import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import api from '../Utils/api'

export default function Login (){

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [error, setError] = useState("")
    
    
        const handleSubmit = async (e) => {
            setError("")
           
            if (!email || !password) {
                setError("all field are required")
            }
    
            try {
                const result = await api.post('/auth/login/', {email, password});
    
                if (result.status === 201) {
                    console.log(result)
                }
            } catch (err) {
                console.log(err)
            }
        }

    
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="email" value={email} onChangeText={(email) => setEmail(email)}/>
            <TextInput placeholder="password" value={password} onChangeText={(password) => setPassword(password)}/>
            <Button title="Login" onPress={handleSubmit}/>
        </View>
    )
         
}