import React from 'react';
import { 
    StyleSheet,
     Text, 
     View, 
    TouchableNativeFeedback 
    } from 'react-native';

const LembreteItem = (props) =>{
    return(
        <TouchableNativeFeedback 
        onPress={props.onDelete.bind(this, props.chave)}>
        <View style={styles.itemNaLista}>
            <Text>
                {props.lembrete}
            </Text>
        </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#eee',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
    },
});

export default LembreteItem;