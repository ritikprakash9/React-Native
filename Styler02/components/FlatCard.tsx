import React from "react";

import {
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View} from 'react-native';

function FlatCard()
{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style = {Styles.Heading}>Flat Card</Text>
                    <View style = {Styles.container}>
                        <View style = {[Styles.card, Styles.cardOne]}>
                            <Text style = {Styles.textLight} >Red</Text>
                        </View>
                        <View style = {[Styles.card, Styles.cardTwo]}>
                            <Text style = {Styles.textLight} >Green</Text>
                        </View>
                        <View style = {[Styles.card, Styles.cardThree]}>
                            <Text style = {Styles.textLight} >Blue</Text>
                        </View>
                        <View style = {[Styles.card, Styles.cardFour]}>
                            <Text style = {Styles.textLight} >Blue</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const Styles = StyleSheet.create({
    Heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 10
    }, 

    container : {
        padding: 10,
        flex: 1,
        flexDirection: "row"
    },

    card : {
        height: 100,
        width: 100,
        margin: 3,
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardOne: {
        backgroundColor: 'red'
    },

    cardTwo: {
        backgroundColor: 'green'
    },

    cardThree: {
        backgroundColor: 'blue'
    },

    cardFour: {
        backgroundColor: 'pink'
    },

    textLight : {
        color: 'white'
    },

    textDark:
    {
        color: 'black'
    }
})

export default FlatCard;