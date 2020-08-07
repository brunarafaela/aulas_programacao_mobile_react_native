import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
   StyleSheet,
    View, 
    FlatList 
  } from 'react-native';

import LembreteItem from './componentes/LembreteItem';
import LembreteInput from './componentes/LembreteInput';

export default function App() {

const[lembretes, setLembretes] = useState([]);
const [contadorLembretes, setContadorLembretes] = useState (0);

const adicionarLembrete = (lembrete) =>{
setLembretes((lembretes => {
  setContadorLembretes (contadorLembretes +1);
  return [...lembretes, 
    {key: contadorLembretes.toString(), value: lembrete}];
  }));
}

const removerLembrete = (keyASerRemovida) => {
  setLembretes(lembretes =>{
    return lembretes.filter((lembrete) =>
    {
      return lembrete.key !==keyASerRemovida
    })
  })
}

  return (
    <View style={styles.container}>
      <LembreteInput 
       onAdicionarLembrete={adicionarLembrete}/>
      <View>
        {/*Aqui será inserida a lista de lembretes*/}
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem 
              chave={lembrete.item.key}
              lembrete={lembrete.item.value}
              onDelete={removerLembrete}
              />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor: '#f3f3f3',
    padding: 50,
  },
});
