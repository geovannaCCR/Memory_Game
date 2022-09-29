import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DificilCard from './DificilCard';

const img1 = require('./assets/17.jpg');
const img2 = require('./assets/18.jpg');
const img3 = require('./assets/19.jpg');
const img4 = require('./assets/20.jpg');
const img5 = require('./assets/21.jpg');
const img6 = require('./assets/22.jpg');
const img7 = require('./assets/23.jpg');
const img8 = require('./assets/24.jpg');
const img9 = require('./assets/25.jpg');
const img10 = require('./assets/26.jpg');
const img11 = require('./assets/27.jpg');
const img12 = require('./assets/28.jpg');
const img13 = require('./assets/29.jpg');
const img14 = require('./assets/30.jpg');
const img15 = require('./assets/31.jpg');

export default function Dificil({navigation}){
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
        {id:10, img: img10, stat: ""},
        {id:10, img: img10, stat: ""},
        {id:11, img: img11, stat: ""},
        {id:11, img: img11, stat: ""},
        {id:12, img: img12, stat: ""},
        {id:12, img: img12, stat: ""},
        {id:13, img: img13, stat: ""},
        {id:13, img: img13, stat: ""},
        {id:14, img: img14, stat: ""},
        {id:14, img: img14, stat: ""},
        {id:15, img: img15, stat: ""},
        {id:15, img: img15, stat: ""},

    ].sort(() => Math.random() - 0.5));

    return(
        <View style={styles.container}>
            <View style={styles.container2}>
            {items.map((item, index) => (
                <DificilCard  key={index} id={index} item={item}/>
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