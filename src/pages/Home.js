import React from "react";
import { useState } from "react";
import { View,StyleSheet,SafeAreaView,Text,FlatList } from "react-native";
import Icon from "../components/Icon";
import ExpenseList from "../components/ExpenseList";
import DataList from "../utilities/DataList";
import ExpensePop from "../components/ExpensePop";
import DayDate from "../components/DayDate";

const Home = () => {
    const [balance,setBalance] = useState(52876.45)
    const [dataList,setDataList] = useState(DataList)
    const [showProfie, setShowProfile] = useState(false)
    const handleSaveExpense = (newDataList) => {
        const updatedDataList = [...dataList, ...newDataList]
        const l = newDataList.length
        const newExpense = newDataList[l-1]
        const newBalance = balance - newExpense.amount
        console.log(newBalance,newExpense)
        setDataList(updatedDataList)
        setBalance(newBalance)
    }
    const renderItem = ({ item }) => (
        <ExpenseList
            icon={item.icon}
            description={item.description}
            color={item.color}
            amount={item.amount}
        />
    )
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={[styles.wrap,{marginTop:10}]}>
                <DayDate/>
                <View style={{flex:1}}/>
                <Icon name={'bell-o'} size={24} color={'black'}/>
                <View style={{marginHorizontal:10}}/>
                <Icon name={'user-circle-o'} size={30} color={'black'}/>
            </View>
            <View style={[styles.wrap,{marginTop:40}]}>
                <View>
                    <Text style={styles.balanceText}>Balance:</Text>
                    <Text style={styles.balanceValue}>{balance}</Text>
                </View>
                <View>
                    <ExpensePop onSave={handleSaveExpense}/>
                </View>
            </View>
            <View style={[{paddingHorizontal:20},{marginTop:20}]}>
                <Text style={styles.spendText}>Spending History</Text>
            </View>
            <View style={styles.listWrap}>
                <FlatList
                    data={DataList}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    ItemSeparatorComponent={() => <View style={{height:10}}/>}
                    contentContainerStyle={{paddingBottom:200}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'oldlace',
        // alignItems:'center'
    },
    shadowProp: {  
        shadowOffset: {width: -2, height: 5},  
        shadowColor: 'black',  
        shadowOpacity: 0.2,  
        shadowRadius: 5,
    },
    wrap:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems:'center'
    },
    balanceText:{
        fontSize:20,
        fontWeight:'300'
    },
    balanceValue:{
        fontSize:30,
        fontWeight:'600',
        color:'black'
    },
    spendText:{
        fontSize:24,
        fontWeight:'500',
    },
    listWrap:{
        padding:10
    }
})

export default Home