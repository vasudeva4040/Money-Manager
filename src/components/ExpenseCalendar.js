import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ExpenseCalendar = ({ expenses }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderDay = (date) => {
    const expensesForDay = expenses[date.dateString];
    return (
      <View>
        <Text>{date.day}</Text>
        {expensesForDay && (
          <View>
            {expensesForDay.map((expense, index) => (
              <Text key={index}>{expense.description}: ${expense.amount}</Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        renderDay={renderDay}
      />
      <Modal
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Add expense for {selectedDay && selectedDay.dateString}</Text>
          {/* Your expense input fields and buttons */}
          <Button title="Close" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ExpenseCalendar;