import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, Button } from 'react-native';
import Slider from '@react-native-community/slider';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [expenses, setExpenses] = useState({}); // State to store expenses for each date
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleDatePress = (date) => {
    setSelectedDate(date);
    // You can add logic here to show expenses for the selected date
    console.log('Expenses for', date, ':', expenses[date]);
    setShowModal(true); // Show modal when a date is pressed
  };

  // Function to render individual days
  const renderDay = (day) => {
    return (
      <TouchableOpacity
        key={day}
        onPress={() => handleDatePress(day)}
        style={[
          styles.dayContainer,
          selectedDate === day && styles.selectedDay,
        ]}
      >
        <Text style={styles.dayText}>{day}</Text>
        {/* You can add expenses or events here */}
      </TouchableOpacity>
    );
  };

  // Function to render days for the current month
  const renderDays = () => {
    const days = [];
    // Logic to generate days for the current month
    // Replace this with your own logic to generate days
    const totalDays = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
    for (let i = 1; i <= totalDays; i++) {
      days.push(renderDay(i));
    }
    return days;
  };

  // Function to get current month and year
  const getCurrentMonthYear = () => {
    const today = new Date();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[currentMonth]} ${today.getFullYear()}`;
  };

  // Get screen dimensions
  const { width, height } = Dimensions.get('window');

  // Calculate the width and height for each day container
  const containerSize = Math.min(width, height) / 7; // Assuming 7 days in a row

  return (
    <View style={[styles.container, { backgroundColor: 'lightgray' }]}>
      <Text style={styles.monthYear}>{getCurrentMonthYear()}</Text>
      <Slider
        style={{ width: '80%' }}
        minimumValue={0}
        maximumValue={11}
        step={1}
        value={currentMonth}
        onValueChange={(value) => setCurrentMonth(value)}
      />
      <View style={[styles.daysContainer, { width: containerSize * 7 }]}>
        {renderDays()}
      </View>
      {/* Modal to display expenses */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Expenses for {selectedDate}</Text>
          {/* Render expenses here */}
          {expenses[selectedDate] && expenses[selectedDate].map((expense, index) => (
            <Text key={index} style={styles.expenseText}>{expense.description}: ${expense.amount}</Text>
          ))}
          <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', // Background color of the container
  },
  monthYear: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dayContainer: {
    width: '14%', // Adjust width to fill the screen
    aspectRatio: 1, // Maintain aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  dayText: {
    fontSize: 16,
  },
  selectedDay: {
    backgroundColor: 'lightblue',
  },
  expenseText: {
    fontSize: 12,
    color: 'green',
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Calendar;
