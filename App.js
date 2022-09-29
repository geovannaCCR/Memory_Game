import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JogoFacil from './JogoFacil';
import JogoMedio from './JogoMedio';
import JogoDificil from './JogoDificil';

function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
        <View>
          <Text style={styles.titulo}>Jogo da Memória</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Tela Facil')}>
          <Text style={styles.niveis}>  Nível Fácil  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tela Medio')}>
          <Text style={styles.niveis}>Nível Médio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tela Dificil')}>
          <Text style={styles.niveis}> Nível Difícil </Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tela Instrucoes')}>
            <Text style={styles.instrucoes}>Precisa de Instruções? Clique Aqui.</Text>
          </TouchableOpacity>    
    </View>
  );
}

function Instrucoes(){
  return(
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.textInstrucoes}>COMO JOGAR:</Text>
        <Text style={styles.text}>
        Inicie o jogo escolhendo o nível de dificuldade (Fácil, Médio ou Difícil).
        A dificuldade é proporcional ao número de cartas presentes no mesmo.
        Escolha duas cartas para desvirá-las. Caso formem um par, elas são removidas do jogo. Caso contrário, elas voltam a ficar com as figuras voltadas para baixo;
        O jogo termina quando todos os pares forem formados.
        </Text>
        <Text style={styles.textInstrucoes}>CARTAS:</Text>
        <Text style={styles.text}>
        Cada carta possui uma imagem. O nível Fácil possui 6 imagens (12 cartas). No nível Médio há 9 imagens (18 cartas).
        E o nível Difícil possui 15 imagens (30 cartas).
        </Text>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Tela Inicio" component={Inicio}
      options={{
        header: () => null
      }}></Stack.Screen>
      <Stack.Screen name="Tela Instrucoes" component={Instrucoes}
      options={{
        title: null
      }}></Stack.Screen>
      <Stack.Screen name="Tela Facil" component={JogoFacil}
      options={{
        title: null
      }}></Stack.Screen>
      <Stack.Screen name="Tela Medio" component={JogoMedio}
      options={{
        title: null
      }}></Stack.Screen>
      <Stack.Screen name="Tela Dificil" component={JogoDificil}
      options={{
        title: null
      }}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7D4DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  niveis: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
},
titulo: {
  fontSize: 28,
  marginBottom: 30,
  fontWeight: '500',
},
instrucoes: {
  fontSize: 15,
  marginTop: '10%',
},
container1:{
  flex: 1,
  backgroundColor: '#C7D4DE',
},
container2: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
  borderRadius: 15,
},
textInstrucoes: {
  padding: 20,
  fontSize: 17,
  textAlign: 'justify',
  fontWeight: '700',
},
text: {
  margin: 20,
  fontSize: 17,
  textAlign: 'justify',
}
});
