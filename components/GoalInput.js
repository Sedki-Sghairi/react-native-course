import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function GoalInput(props) {
	return (
		<View style={styles.screen}>
			<TextInput
				placeholder="mrigel"
				style={styles.inputContainer}
				onChangeText={props.handleChange}
				value={props.text}
			/>
			<Button title="Add" onPress={props.handleClick} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 70,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	inputContainer: {
		borderColor: 'grey',
		borderWidth: 1,
		width: ' 80%',
		padding: 4
	}
});
