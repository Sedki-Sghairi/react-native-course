import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function GoalItem(props) {
	return (
		<View style={styles.listItem}>
			<Text>{props.itemData.item.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		margin: 10
	}
});
