import React from "react";

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ContactList()
{

    const contacts = [
        {
            id: 1,
            name: 'Ritik Prakash',
            status: 'CS Student - Learning React Native',
            imageUrl: 'https://scontent.fbho4-2.fna.fbcdn.net/v/t39.30808-1/346445932_1352098952001510_511891653173018172_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AszZftGnn90AX9JkjNu&_nc_ht=scontent.fbho4-2.fna&oh=00_AfDWk4QSc7-lDBTHRUJ8mPVmDVTvf_MruFbGWHTESUBOHQ&oe=65481A35'
        },

        {
            id: 2,
            name: 'Gyantik Prakash',
            status: 'CA Student - Clear CA Intermediate',
            imageUrl: 'https://scontent.fbho4-3.fna.fbcdn.net/v/t39.30808-6/367957673_1369392530310470_2316716529653173284_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8dRbmXdVlDEAX-VWCTw&_nc_ht=scontent.fbho4-3.fna&oh=00_AfBf5D0s8r4uu9U0X9JlSDFW8mHuWfEatFltumwAuS9o8g&oe=6548C27B'
        },

        {
            id: 3,
            name: 'Sanjay Kumar',
            status: 'LIC Agent',
            imageUrl: 'https://scontent.fbho4-4.fna.fbcdn.net/v/t1.6435-1/170295752_926106428152719_3962664164619248942_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=sOYMbOpnwdEAX8LveFX&_nc_ht=scontent.fbho4-4.fna&oh=00_AfAyHVoX0aX9RLgBOT1o-rThKOpYBs6Qmtcw62rkARIfDg&oe=656B493F'
        },
    ]
    return(
        <View> 
            <Text style = {Styles.heading}>Contact List</Text>
            <ScrollView scrollEnabled = {false} style = {Styles.listContainer}>
                {contacts.map(({id, name, status, imageUrl})=>(
                    <View style = {Styles.container} key={id}>
                        <Image style = {Styles.image}
                        source={{uri: imageUrl}}/>
                        <View>
                        <Text style = {Styles.name}> {name} </Text>
                        <Text style = {Styles.status}> {status} </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create(
    {
        heading: {
            margin: 10,
            fontSize: 24,
            fontWeight: "600"

        },
        listContainer: {
            margin: 10
        },
        container: {
            display: "flex",
            flexDirection: "row",
            padding: 10
        },
        image: {
            height: 60,
            width: 60,
            borderRadius: 60/2,
            marginRight: 8
        },
        name: {
            fontSize: 16,
            fontWeight: '500'
        },
        status: {
            fontSize: 14,
            fontStyle: 'italic'
        }
    }
)