import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TaskList({ data, deleteItem, editItem}) {
    return(
        <View style={styles.areaItem}>

            <View style={styles.areaText}>
                <TouchableWithoutFeedback onPress={ () => editItem(data) }>
                    <Text style={styles.textItem}>{data.nome}</Text>
                </TouchableWithoutFeedback>
            </View>

            <TouchableOpacity style={styles.areaIcon} onPress={ () => deleteItem(data.key) }>
                <Ionicons name="trash-outline" size={24} color='#d20000'/>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    areaItem:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#c7c7c7',
        backgroundColor: '#FFF',
        borderRadius: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 1
    },
    textItem:{
        textAlign: 'left',
        color: '#000'
    },
    areaText: {
        paddingRight: 4,
        width: '90%'
    },
    areaIcon: {
        marginRight: 4,
    }
})