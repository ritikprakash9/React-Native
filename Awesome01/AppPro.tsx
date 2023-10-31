import React from "react";

import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";



function AppPro()
{

    const isDarkMode = useColorScheme() === 'dark';
    return(
        <SafeAreaView>
            <View style = {styles.container}>
                <Text style = {isDarkMode ? styles.whiteText : styles.whiteText}>Hello Ritik!</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    whiteText:{
        color: 'green'
    },

    darkText:{
        color: 'red'
    }
})



export default AppPro;