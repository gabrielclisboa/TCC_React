import * as React from 'react';
import {Text,Image,View,TouchableOpacity,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style.js';
import {icLogin}  from '../../../Assets/index.js';

function telaLogin(){
    return(
        <LinearGradient colors={['#457B9D', '#00A896']} style={styles.linearGradient}>
            <View style = {styles.ViewGlobal}>  
                <Image source={icLogin} style= {styles.image}></Image>
                <Text style = {styles.texto1}>Acesse sua conta agora!</Text>
                <TextInput placeholder='Email'></TextInput>
                <TextInput placeholder='Senha'></TextInput>
                <TouchableOpacity >
                    <Text>ENTRE AGORA</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient> 
    );
}

export default telaLogin;