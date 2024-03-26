// here we will implement the container component
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Contenedor = (props) => {
    return (
        <View style={styles.contenedor}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Contenedor;