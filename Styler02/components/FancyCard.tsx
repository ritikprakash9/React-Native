import React from "react";

import { StyleSheet, View, Text, Image } from 'react-native';

function FancyCard()
{
    return(
        <View>
            <Text style = {Styles.heading}>Fancy Card</Text>
            <View style = {[Styles.card, Styles.cardElevated]}>
                <Image source={{uri:'https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg'}} style = {Styles.cardImage}/>
                <View style = {Styles.cardBody}>
                    <Text style = {Styles.cardTitle}>Nature</Text>
                    <Text style = {Styles.cardLabel}>Green City, Patna</Text>
                    <Text style = {Styles.cardDescription}>This is a image of nature which contain a house around a hearted road.</Text>
                    <Text style = {Styles.cardFooter}>12 min Away</Text>
                </View>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 8,
        margin: 10
    },
    container: {    },
    card: {
        margin: 10,
        padding: 10
    },
    cardElevated: {
        backgroundColor: 'olive',
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 8
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
        
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 6
    },
    cardLabel: {
        color: 'white',
        fontSize: 20,
        marginBottom: 8
    },
    cardDescription: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10
    },

    cardFooter: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'white',
        marginBottom: 16,
    }
})


export default FancyCard;