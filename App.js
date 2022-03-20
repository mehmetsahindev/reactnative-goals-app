import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals(goals => [...goals, { key: Math.random().toString(), value: enteredGoal }]);
    setIsVisible(false)
  }

  const cancelAddGoalHandler = () => {
    setIsVisible(false)
  }

  const deleteGoalHandler = goalId => {
    setGoals(goals.filter(goal => goal.key !== goalId));
  }

  return (
    <View style={styles.screen}>
      <Button title='ADD NEW GOAL' onPress={() => setIsVisible(true)} />
      <GoalInput onAddGoal={addGoalHandler} onCancel={cancelAddGoalHandler} isVisible={isVisible} />
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
