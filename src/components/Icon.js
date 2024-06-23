import React from "react";
import { View,TouchableOpacity } from "react-native";
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

const Icon = (props) => {
    const {name,size,color} = props
    return (
        <TouchableOpacity>
            <View>
                <FontAwesome name={name} size={size} color={color} />
            </View>
        </TouchableOpacity>
    )
}


export default Icon;