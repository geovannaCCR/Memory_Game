import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MedioCard from './MedioCard';

const img1 = require('./assets/07.jpg');
const img2 = require('./assets/08.jpg');
const img3 = require('./assets/09.jpg');
const img4 = require('./assets/10.jpg');
const img5 = require('./assets/11.jpg');
const img6 = require('./assets/12.jpg');
const img7 = require('./assets/13.jpg');
const img8 = require('./assets/14.jpg');
const img9 = require('./assets/15.jpg');

export default function Medio({navigation}){
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
        {id:7, img: img7, stat: ""},
        {id:7, img: img7, stat: ""},
        {id:8, img: img8, stat: ""},
        {id:8, img: img8, stat: ""},
        {id:9, img: img9, stat: ""},
        {id:9, img: img9, stat: ""},

    ].sort(() => Math.random() - 0.5));

    return(
        <View style={styles.container}>
            <View style={styles.container2}>
            {items.map((item, index) => (
                <MedioCard  key={index} id={index} item={item}/>
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
        margin: 15,
        borderRadius: 15,
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})

