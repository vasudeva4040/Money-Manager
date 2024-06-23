import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "../components/Icon";
import UserIcons from "../components/UserIcons";

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Icon name={"user-circle-o"} size={150} color={"teal"} />
      </View>
      <View style={styles.item}>
        <UserIcons icon='verified-user' color='green' name='Account'/>
        <UserIcons icon='lock' color='#3498db' name='Privacy'/>
        <UserIcons icon='public' color='#2ecc71' name='App Language'/>
        <UserIcons icon='question-answer' color='#f39c12' name='About'/>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "oldlace",
  },
  profile: {
    alignItems: "center",
    padding: 20,
  },
  item: {
    flexDirection: 'column',
  }
});

export default ProfilePage;