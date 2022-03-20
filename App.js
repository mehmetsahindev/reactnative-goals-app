import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const enteredGoalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setGoals(goals => [...goals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter a Goal' style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {goals.map((goal, key) => (
          <View key={key} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  inputContainer: {
    flexDirection: 'row'
  },
  input: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 20
  },
  listItem: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginTop: 10
  }
});
