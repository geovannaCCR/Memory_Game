import Facil from './Facil';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function JogoFacil(){
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Facil/>
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

export default JogoFacil;