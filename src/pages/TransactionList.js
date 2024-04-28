import React from "react";
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from "react-native";
import DateDisplay from "../util/DateDisplay";
import  { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const TransactionList = () => {
  const obj = new DateDisplay();
  const [frequency, setFrequency] = useState(obj.get_weeks_data());

  const PerformWeekly = () => {
    setFrequency(obj.get_weeks_data());
  };

  const PerformMonthly = () => {
    setFrequency(obj.get_months_data());
  };

  const PerformYearly = () => {
    setFrequency(obj.get_years_data());
  };

  const [period, setPeriod] = useState(frequency.length - 1);

  const moveLeft = () => {
    setPeriod((period - 1) < 0 ? 0: period - 1);
  };

  const moveRight = () => {
    setPeriod((period + 1) > frequency.length - 1 ? frequency.length -1 : period + 1);
  };

  useEffect(() => {
    console.log("Hello");
  }, [frequency, period]);
  const data = [
    {
      date: "30/03/2024",
      data: [
        {
          category: "Food",
          description: "Lunch",
          amount: "300",
          type: "Expenditure",
        },
        {
          category: "Travel",
          description: "Auto",
          amount: "400",
          type: "Expenditure",
        },
      ],
    },
    {
      date: "29/03/2024",
      data: [
        {
          category: "Food",
          description: "Lunch",
          amount: "500",
          type: "Expenditure",
        },
        {
          category: "Petty Cash",
          description: "Recovery",
          amount: "400",
          type: "Income",
        },
      ],
    },
  ];

  const getColor = (category) => {
    if (category === "Income") {
      return "blue";
    } else {
      return "red";
    }
  };

  const renderItem = ({ item }) => (
    
    <View style={styles.item}>
      <View style={styles.itemText}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={[styles.amount, { color: getColor(item.type) }]}>
        Rs.{item.amount}
      </Text>
    </View>
  );

  const renderSectionHeader = ({ section: { date } }) => (
    <View style={styles.header}>
      <Text>{date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.optionButton} onPress={PerformWeekly}>
          <Text style={styles.optionButtonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={PerformMonthly}>
          <Text style={styles.optionButtonText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={PerformYearly}>
          <Text style={styles.optionButtonText}>Yearly</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalSlider}>
        <View style={styles.contentItem}>
        <Text>{frequency[period]}</Text>
      </View>
        <TouchableOpacity style={styles.arrowLeft} onPress={moveLeft}>
          <AntDesign name="leftcircleo" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowRight} onPress={moveRight}>
          <AntDesign name="rightcircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: "#fff",
    },
    header: {
      backgroundColor: "#f2f2f2",
      padding: 10,
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    itemText: {
      flex: 1,
      marginRight: 10,
    },
    category: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: "#555",
    },
    amount: {
      fontSize: 16,
      fontWeight: "bold",
    },
    arrowLeft: {
      position: "absolute",
      left: 0,
      padding: 10,
    },
    arrowRight: {
      position: "absolute",
      right: 0,
      padding: 10,
    },
    optionButton: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: "#e0e0e0",
      justifyContent: "center",
      alignItems: "center",
    },
    optionButtonText: {
      color: "#333",
      fontWeight: "bold",
    },
    tableData: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    option: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 20,
      backgroundColor: "#e0e0e0",
      color: "#333",
      fontWeight: "bold",
    },
    horizontalSlider: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    buttons: {
      flexDirection: "row",
      paddingTop: 50,
      justifyContent: "space-around",
    },
    contentItem: {
      width: 400,
      justifyContent: "center",
      alignItems: "center",
    },
  });  

export default TransactionList;
