import React, { useState } from 'react';
import { SafeAreaView,View,StyleSheet, TouchableOpacity, Modal, TextInput, Text, ScrollView} from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
 const [expenses, setExpenses] = useState({});
 const [modalVisible, setModalVisible] = useState(false);
 const [expenseInput, setExpenseInput] = useState('');
 const [selectedDate, setSelectedDate] = useState(new Date());

 const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
 };

 const addExpense = () => {
    if (selectedDate) {
      const updatedExpenses = { ...expenses };
      updatedExpenses[selectedDate] = updatedExpenses[selectedDate] || [];
      updatedExpenses[selectedDate].push(expenseInput);
      setExpenses(updatedExpenses);
      setExpenseInput('');
      setModalVisible(false);
    }
  };

 return (
    <SafeAreaView style={styles.container}>
    <View style={styles.calendarContainer}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true },
        }}
      />
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.container}>
          <Text>Add Expense for {selectedDate}</Text>
          <TextInput
            placeholder="Expense"
            value={expenseInput}
            onChangeText={setExpenseInput}
          />
          <TouchableOpacity onPress={addExpense}>
            <Text>Add Expense</Text>
          </TouchableOpacity>
          <Text>Your expenses are "${expenses}"</Text>
        </View>
      </Modal>
      <ScrollView>
        {Object.entries(expenses).map(([date, expenseList]) => (
          <View key={date}>
            <Text style={{ fontWeight: 'bold' }}>{date}</Text>
            {expenseList.map((expense, index) => (
              <Text key={index}>{expense}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
 );
};
const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       backgroundColor: 'lightblue',
       alignSelf: 'center',
       width: '100%', // Adjust the width as needed
       height: '100%'
    },
    calendarContainer: {
       width: '100%', // Adjust the width as needed
       height: '100%', // Adjust the height as needed
       alignSelf: 'center', // Center the calendar horizontally
       justifyContent: 'center', // Center the calendar vertically
    },
   });
export default MyCalendar;