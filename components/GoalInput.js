import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course goal" 
                style={styles.input} 
                onChangeText={goalInputHandler} 
                value={enteredGoal}/>
            <Button 
                title="ADD" 
                onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1
    }
});