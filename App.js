import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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
			<GoalInput text={text} handleChange={handleChange} handleClick={handleClick} />
			<FlatList data={goals} renderItem={(itemData) => <GoalItem itemData={itemData} />} />
		</View>
	);
}
