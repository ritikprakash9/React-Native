import React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

function ElevatedApp() {
    return (
        <View>
            <Text style={Styles.heading}>Elevated Card</Text>
            <ScrollView horizontal={true} style={Styles.container}>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[Styles.card, Styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
    },

    container: {
        padding: 10,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5
    },
    cardElevated: {
        backgroundColor: 'wheat',
        elevation: 1,

        shadowOffset : {
            width: 1,
            height: 1
        },

        shadowColor: '#333'
    },

    
});

export default ElevatedApp;
