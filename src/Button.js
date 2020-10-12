import React from 'react'
import { Platform } from 'react-native'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'

const Button = (props) => (
    <TouchableHighlight
        underlayColor={'#015CB7'}
        style={[styles.button, props.style]}
        onPress={props.onPress}>
        <View style={styles.container}>
            {props.iconLeft}
            <Text style={styles.text}>{props.text}</Text>
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        height: 36,
        backgroundColor: '#127EEA',
        borderRadius: 44,
        opacity: 1,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    text: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto, Arial' : 'Arial',
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Button