import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Steven';
    const first = <Text style={styles.textStyle}>Getting started with react native!</Text>;
    const second = <Text style={styles.subHeader}>Hello {name}!</Text>;

    return <View>
            {first}
            {second}
        </View>
}; 

const styles = StyleSheet.create({
    textStyle: { 
        fontSize: 45
    },
    subHeader: { 
        fontSize: 20
    }
});
 
export default ComponentsScreen;