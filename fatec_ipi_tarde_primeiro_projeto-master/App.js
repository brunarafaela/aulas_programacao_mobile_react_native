import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //hook do react
  const[texto, setTexto] = useState("Texto Inicial");
  const[contador, setContador] = useState(0);

  const botaoClicado = () =>
  {
    setContador(contador+1);
    setTexto("Valor: " + contador);
  }
  return (
    <View style={styles.container}>
      <Text>
       {texto}
        </Text>
      <StatusBar style="auto" />
      <View style={styles.botao}>
        <Button
          title="Alterar texto" 
          onPress={botaoClicado}
          color="pink"
          accessibilityLabel="Clique para somar +1 no contador"
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginTop: 8,
  },
});
