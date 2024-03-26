// here we will implement a element component 
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Elemento = (props) => {
    return (
        <Text style={styles.elemento}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    elemento: {
        fontSize: 20,
        color: 'black',
    }
});

export default Elemento;