import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [ text, setText ] = useState('');
	const [ goals, setGoals ] = useState([]);
	const handleChange = (text) => {
		setText(text);
	};
	const handleClick = () => {
		setGoals((currentGoals) => [
			...currentGoals,
			{
				key: (Math.random() * Math.random()).toString(),
				text: text
			}
		]);
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
			<FlatList
				data={goals}
				renderItem={(itemData) => (
					<View style={styles.listItem}>
						<Text>{itemData.item.text}</Text>
					</View>
				)}
			/>
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
	},
	listItem: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		margin: 10
	}
});
