import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Medio from './Medio';

function MedioCard({item}){

    const itemClass = item.stat ? "active" + item.stat : ""

    return(
        <View style={styles.container} className={"card" + itemClass}>
            <Image style={styles.image} source={item.img} alt=""/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 7,
    },
    image: {
        width: 90,
        height: 90,
    },
})
export default MedioCard;