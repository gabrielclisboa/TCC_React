import * as React from 'react';
import {Text,Image, View} from 'react-native';
import { logo } from '../../../Assets/index.js';
import styles from './style.js';

function TelaCarregamento(){
    return(
        <View style={styles.ViewGlobal}>     
            <Image source = {logo} />
                <Text style= {styles.Texto2}>Associação de bairros do </Text>
                <Text style= {styles.Texto}>Cabral</Text>
        </View> 
    ); 
}

export default TelaCarregamento;