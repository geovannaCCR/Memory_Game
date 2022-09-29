import Dificil from './Dificil';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function JogoDificil(){
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Dificil/>
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
        borderRadius: 15,
        alignContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})

export default JogoDificil;