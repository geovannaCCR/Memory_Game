import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Facil from './Facil';

function FacilCard({item}){

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
        width: 100,
        height: 100,
    
    },
    img: {
        backgroundColor: '#C7D4DE',
    }
})
export default FacilCard;