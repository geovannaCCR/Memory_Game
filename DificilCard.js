import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Dificil from './Dificil';

function DificilCard({item}){

    const itemClass = item.stat ? "active" + item.stat : ""

    return(
        <View style={styles.container} className={"card" + itemClass}>
            <Image style={styles.image} source={item.img} alt=""/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    image: {
        width: 75,
        height: 75,

    },
})
export default DificilCard;