import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CatCard = ({ cat }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('CatDetailScreen', { catId: cat.id })}
        >
            <Text style={styles.title}>{cat.name}</Text>
            {cat.image && <Image source={{ uri: cat.image }} style={styles.image} />}
            <Text style={styles.text}>{cat.breed}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffab40',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    }
});

export default CatCard;
