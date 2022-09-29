import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FacilCard from './FacilCard';

const img1 = require('./assets/01.jpg');
const img2 = require('./assets/02.jpg');
const img3 = require('./assets/03.jpg');
const img4 = require('./assets/04.jpg');
const img5 = require('./assets/05.jpg');
const img6 = require('./assets/06.jpg');

export default function Facil(){
    const [items, setItems] = useState([
        {id:1, img: img1, stat: ""},
        {id:1, img: img1, stat: ""},
        {id:2, img: img2, stat: ""},
        {id:2, img: img2, stat: ""},
        {id:3, img: img3, stat: ""},
        {id:3, img: img3, stat: ""},
        {id:4, img: img4, stat: ""},
        {id:4, img: img4, stat: ""},
        {id:5, img: img5, stat: ""},
        {id:5, img: img5, stat: ""},
        {id:6, img: img6, stat: ""},
        {id:6, img: img6, stat: ""},
    ].sort(() => Math.random() - 0.5));
   
   /*Utilizar um operador ternário dentro do 'return' para virar a carta. 
   É apenas trocar a imagem do verso pela da frente, ou seja, trata-se de uma troca de imagens.
   Depois é necessário verificar pelo 'id' de cada imagem se elas são iguais e desenvolver uma função para que elas
   sejam marcadas e fiquem estáticas.*/
   
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
            {items.map((item, index) => (
                <FacilCard  key={index} id={index} item={item}/>
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C7D4DE',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 13,
        borderRadius: 15,
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})