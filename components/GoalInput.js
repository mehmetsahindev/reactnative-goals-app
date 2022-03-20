import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const enteredGoalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
        console.log("dasdasd")
    }

    const addGoalHandler = () => {
        console.log(enteredGoal);
        props.onAddGoal(enteredGoal)
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder='Enter a Goal' style={styles.input} onChangeText={enteredGoalHandler} value={enteredGoal} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title='CANCEL' color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    input: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        width: '100%',
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        marginHorizontal: 10
    }
})

export default GoalInput;