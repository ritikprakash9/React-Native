import React from "react";

import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Linking, Button } from 'react-native';

function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    function openInstagram() {
        Linking.openURL('https://www.instagram.com/ritik_prakash_/')
    }
    return (
        <View>
            <Text style={Styles.Heading} >Blog Card</Text>
            <View style={Styles.container}>
                <Text style={Styles.cardTitle}>What's new in Javascript ES6</Text>

                <Image
                    source={{ uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} style={Styles.cardImage} />

                <Text style={Styles.cardDescription} numberOfLines={4}>In 2015 Javascript launch its new version which is called Ecamscript 6 or ES6 in this concept javascript launch many useful concept such as object-oriented Programming, Arrow Function and many advance concept which makes progammer life easy. To learn in details click 👇</Text>

                <View style={Styles.footerContainer}>
                    <TouchableOpacity onPress={function () {
                        openWebsite('https://www.w3schools.com/js/js_es6.asp');
                    }}>
                        <Text style={Styles.footerText}>Read More</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={function () {
                        openInstagram();
                    }}>
                        <Text style={Styles.footerText}>Follow Me!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 10
    },

    container: {
        borderRadius: 5,
        margin: 10,
        elevation: 10,
        padding: 8,
        shadowColor: '#005B41',
        backgroundColor: '#005B41',
        shadowOpacity: 0.5,
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        marginBottom: 8
    },
    cardImage: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 200,
        width: '100%',
        marginBottom: 10
    },

    cardDescription: {
        fontSize: 14,
        marginBottom: 2
    },

    footerContainer: {
        margin: 10,
        marginTop: 20,
        marginBottom: 30,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    footerText: {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
        color: 'black'
    }
})

export default ActionCard;