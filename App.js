import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [ text, setText ] = useState('');
	const [ goals, setGoals ] = useState([]);
	const handleChange = (text) => {
		setText(text);
	};
	const handleClick = () => {
		setGoals((currentGoals) => [ ...currentGoals, text ]);
	};
	return (
		<View>
			<View style={styles.screen}>
				<TextInput
					placeholder="mrigel"
					style={styles.inputContainer}
					onChangeText={handleChange}
					value={text}
				/>
				<Button title="Add" onPress={handleClick} />
			</View>
			<View>{goals.map((goal) => <Text>{goal}</Text>)}</View>
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
