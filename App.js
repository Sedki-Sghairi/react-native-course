import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ text, setText ] = useState('');
	const [ goals, setGoals ] = useState([]);
	const [ isOpenModel, setIsOpenModal ] = useState(false);
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
		setIsOpenModal(false);
		setText('');
	};
	const removeGoalHandler = (id) =>
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== id);
		});
	return (
		<View>
			<View style={styles.container} />
			<Button title="show modal" onPress={() => setIsOpenModal(true)} />
			<GoalInput
				text={text}
				handleChange={handleChange}
				handleClick={handleClick}
				show={isOpenModel}
				handleCancel={() => setIsOpenModal(false)}
			/>
			<FlatList
				data={goals}
				renderItem={(itemData) => (
					<GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.key)} itemData={itemData} />
				)}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		height: 40
	}
});
