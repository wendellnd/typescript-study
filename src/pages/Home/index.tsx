import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';


interface locationInter {
    cursos: {
        descricao: string,
        bacharelado: boolean,
    }[],
    descricao: string,
    endereco: string,
}


const Home = () => {

    const [locationCourse, setLocationCourse] = useState<locationInter[]>([]);

    
    useEffect(() => {
        api.get<locationInter[]>('').then(response => {   
            const {data} = response;
            setLocationCourse(data);
        });
    },[]);


    const navigation = useNavigation();
    
    function handleNavigationToDetail(location: locationInter){
        navigation.navigate('Detail', location);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Selecione uma unidade</Text>
            {locationCourse.map(location => (
                <RectButton 
                key={location.descricao} 
                style={styles.button}
                onPress={() => handleNavigationToDetail(location)}>

                    <Text style={styles.textButton}>
                        {location.descricao}
                    </Text>
                </RectButton>
            ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      paddingTop: 40,
    },
    mainText: {
        fontSize: 25,
        color: '#bbbbbb',
        marginBottom: 10,
    },
    button: {
        marginBottom: 10,
        backgroundColor: '#111111',
        height: 60,
        width: 200, // centraliza os componentes verticalmente
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 20,
    },
    textButton: {
        color: '#bbbbbb',
        marginHorizontal: 20,
    },
});

export default Home;