import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button,
  Text,
  View,
} from "react-native";
import PieChart from "react-native-pie-chart";
import HorizontalSlider from "react-horizontal-slider";
import { AntDesign } from "@expo/vector-icons";
import DateDisplay from "../util/DateDisplay";

const PieChartStat = () => {
  const widthAndHeight = 250;
  const categories = ["Food", "Travel", "Movies", "Others", "Grocery"];
  const series = [123, 321, 123, 789, 537];
  series.sort();
  const sliceColor = ["#fbd203", "#ffb300", "#ff9100", "#ff6c00", "#ff3c00"];
  const obj = new DateDisplay();
  const [frequency, setFrequency] = useState(obj.get_weeks_data());

  useEffect(() => {});

  const data = [];

  const PerformWeekly = () => {
    setFrequency(obj.get_weeks_data());
    setPeriod(0);
  };

  const PerformMonthly = () => {
    setFrequency(obj.get_months_data());
    setPeriod(0);
  };

  const PerformYearly = () => {
    setFrequency(obj.get_years_data());
    setPeriod(0);
  };

  const [period, setPeriod] = useState(frequency.length - 1);
  console.log(period);

  const moveLeft = () => {
    setPeriod((period - 1) < 0 ? 0: period - 1);
  };

  const moveRight = () => {
    setPeriod((period + 1) > frequency.length - 1 ? frequency.length -1 : period + 1);
  };

  useEffect(() => {
    for (let i = 0; i < categories.length; i++) {
      const obj = {
        category: categories[i],
        value: series[i],
        color: sliceColor[i],
        percentage: Math.floor(
          (series[i] / series.reduce((acc, curr) => acc + curr, 0)) * 100
        ),
        id: i,
      };
      data.push(obj);
    }
  }, [frequency, period]);

  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 20,
        justifyContent: "space-around",
        backgroundColor: item.color,
      }}
    >
      <View style={styles.tableData}>
        <Text>{item.category} </Text>
        <Text>Rs.{item.value}</Text>
        <Text>{item.percentage} % </Text>
      </View>
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
        {/* <ScrollView
          key={frequency}
          horizontal
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}
        >
          {renderScrollViewContent()}
        </ScrollView> */}
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

      <Text style={styles.title}>Monthly </Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
      />
      <Text style={styles.title}>Expense Chart</Text>
      <View style={styles.list}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
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
  scrollViewContent: {
    alignItems: "center",
  },
  contentItem: {
    width: 400,
    justifyContent: "center",
    alignItems: "center",
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
});

export default PieChartStat;
