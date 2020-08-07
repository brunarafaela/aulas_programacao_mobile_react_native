import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Cores from '../constantes/Cores'

// import { Container } from './styles';

const LugarItem = (props) => {
  return (
      <TouchableOpacity onPress={props.onSelect} style={styles.lugarItem}>
          <Image
            style={styles.imagem}
            source={{uri: props.imagem}}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.nomeLugar}>{props.nomeLugar}</Text>
              <Text style={styles.endereco}>{props.endereco}</Text>
          </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    lugarItem:{
        backgroundColor: '#ddd',
        paddingVertical: 15,
        paddingHorizontal: 3,
        flexDirection: 'row',
        alignItems: 'center',

    },
    imagem:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Cores.primary,
        borderWidth: 1,
    },
    infoContainer:{
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    nomeLugar:{
        color: 'black',
        fontSize: 18,
        marginBottom: 5,
    },
    endereco:{
        color: '#666',
        fontSize: 16,
    },
});
export default LugarItem;