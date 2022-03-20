import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const enteredGoalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Enter a Goal' style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row'
    },
    input: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 20
    },
})

export default GoalInput;