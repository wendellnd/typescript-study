import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

interface Params {
    cursos: {
        descricao: string,
        bacharelado: boolean,
    }[],
    descricao: string,
    endereco: string,
}


const Detail = () => {

    const route = useRoute();

    const routeParams = route.params as Params;

    const navigation = useNavigation();

    function handleNavigationToBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.backButton} onPress={handleNavigationToBack}>
                <Icon name='arrow-left' size={25} color='#bbbbbb' />
            </TouchableOpacity>

            <Text style={styles.title}>{routeParams.descricao}</Text>
            
            <Text style={styles.subTitle}>Cursos: </Text>
            {routeParams.cursos.map((curso, index) => (
                <View key = {index}>
                    <Text style={styles.texts}>{curso.descricao}</Text>
                    <Text style={[styles.texts, styles.space]}>Bacharelado: {curso.bacharelado ? 'Sim' : 'Não'}</Text>
                </View>
            ))}
            <Text style={styles.subTitle}>Endereço: </Text>
            <Text style={styles.texts}>{routeParams.endereco}</Text>
            
        </View>
    ); 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        paddingTop: 40,
      },
    backButton: {
        marginLeft: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: '#bbbbbb',
    },
    subTitle: {
        color: '#666666',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2,
        marginLeft: 10,
    },
    texts: {
        color: '#bbbbbb',
        marginLeft: 25,
        fontSize: 15
    },
    space: {
        marginBottom: 5,
        marginLeft: 30,
    }
});

export default Detail;