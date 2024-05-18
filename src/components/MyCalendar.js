import React, { useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
 const [horizontal, setHorizontal] = useState(false);
 const [selectedDate, setSelectedDate] = useState(new Date());

 const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
 };

 const handleToggleView = () => {
    setHorizontal(!horizontal);
 };

 return (
    <ScrollView horizontal={horizontal}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true },
        }}
      />
      <Button title="Toggle View" onPress={handleToggleView} />
    </ScrollView>
 );
};

export default MyCalendar;