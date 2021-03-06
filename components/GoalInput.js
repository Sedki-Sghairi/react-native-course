import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

export default function GoalInput(props) {
	return (
		<Modal visible={props.show} animationType="slide">
			<View style={styles.screen}>
				<TextInput
					placeholder="mrigel"
					style={styles.inputContainer}
					onChangeText={props.handleChange}
					value={props.text}
				/>
				<View style={styles.containerow}>
					<View style={styles.button}>
						<Button title="Add" onPress={props.handleClick} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.handleCancel} color="red" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	inputContainer: {
		borderColor: 'grey',
		borderWidth: 1,
		width: ' 80%',
		padding: 4,
		borderRadius: 3
	},
	containerow: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '80%'
	},
	button: {
		width: '40%',
		marginTop: 4
	}
});
