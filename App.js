import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [goals, setGoals] = useState([]);



  const addGoalHandler = (enteredGoal) => {
    setGoals(goals => [...goals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  const deleteGoalHandler = goalId => {
    setGoals(goals.filter(goal => goal.key !== goalId));
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={goals} renderItem={itemData => (
        <GoalItem title={itemData.item.value} onDelete={deleteGoalHandler} id={itemData.item.key} />
      )} />
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
});
