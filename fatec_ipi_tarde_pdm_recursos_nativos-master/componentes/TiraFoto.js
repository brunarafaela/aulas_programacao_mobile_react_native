import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Image,
    Text
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Cores from '../constantes/Cores';


const TiraFoto = (props) => {

    const [imagemURI, setImagemURI] = useState();

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>
                {
                    !imagemURI ?
                        <Text>Nenhuma foto.</Text>
                        :
                        <Image
                            source={{ uri: imagemURI }}
                            style={estilos.imagem}
                        />
                }
            </View>
            <Button
                title="Tirar foto"
                color={Cores.primary}
                onPress={tirarFoto}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    imagem: {
        width: '100%',
        height: '100%'
    },
    previewDaImagem: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1

    },
    principal: {
        alignItems: 'center',
        marginBottom: 15
    }
});

export default TiraFoto;