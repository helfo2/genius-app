import React, { useState } from 'react';
import {Modal, StyleSheet, View, TextInput, Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    // const cancelGoalHandler = () = {
    //     onCancel
    // };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course goal" 
                    style={styles.input} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}/>
                <Button 
                    title="CANCEL" 
                    color="red" 
                    onPress={props.onCancel}/>
                <Button 
                    title="ADD" 
                    onPress={addGoalHandler} />
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     },
    input: {
        width: '80%',
        borderColor: 'red',
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
     }
});