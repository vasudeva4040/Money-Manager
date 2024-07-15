import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ExpenseList = (props) => {
    const {icon,description,color,amount} = props
    return (
        <TouchableOpacity>
            <View style={[styles.items,styles.shadowProp]}>
                <MaterialCommunityIcons name={icon} size={36} color={color} />
                <LinearGradient colors={['transparent','white']} style={styles.line}/>
                <View style={styles.textWrap}>
                    <Text style={styles.descWrap}>{description}</Text>
                    <Text style={styles.amountWrap}>
                        <FontAwesome name="rupee" size={22} color="black" />
                        {amount}
                    </Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'white',
        borderRadius:10
    },
    shadowProp: {  
        shadowOffset: {width: -2, height: 5},  
        shadowColor: 'black',  
        shadowOpacity: 0.2,  
        shadowRadius: 5,
    },
    line:{
        height:'100%',
        width:1,
        marginLeft:10
    }, 
    textWrap:{
        flex:1,
        marginLeft:20
    },
    descWrap:{
        fontSize:20,
        fontWeight:'300'
    },
    amountWrap:{
        fontSize:24,
        fontWeight:'500',
    }
})

export default ExpenseList