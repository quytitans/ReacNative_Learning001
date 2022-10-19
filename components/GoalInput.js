import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setenteredGoalText] = useState('');

    function goalInputHandler(enterdText) {
        setenteredGoalText(enterdText);
    };    

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setenteredGoalText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='input here'
                onChangeText={goalInputHandler} 
                value={enteredGoalText}
                />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8,
      },
});