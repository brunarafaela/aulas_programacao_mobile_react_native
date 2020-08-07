import React, {useState} from 'react';
import { 
    StyleSheet, 
     View, 
     TextInput, 
     Button, 
    } from 'react-native';


const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');
    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    }

    return (
        <View style={styles.lembreteView}>
            <TextInput
                placeholder="Lembrar..."
                style={styles.lembreteTextInput}
                onChangeText={capturarLembrete}
                value={lembrete}
            />

            <Button style={styles.btnAddLembrete}
                title="+"
                onPress={() => props.onAdicionarLembrete(lembrete)}
                color="pink"
                accessibilityLabel="Adicionar lembrete"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    lembreteTextInput: {
        borderBottomColor: 'pink',
        borderBottomWidth: 2,
        padding: 8,
        backgroundColor: '#ddd',
        fontStyle: "italic",
        width: '80%',
    },
    btnAddLembrete: {
        width: '20%',
    },
});

export default LembreteInput;