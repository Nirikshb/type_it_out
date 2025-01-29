import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TopBar = () => {
	const openMe = () => {
		console.log('click');
	};
	const EngRing = [
		{
			id: 1,
			title: 'Web Rings'
		},
		{
			id: 2,
			title: 'Jewel Rings'
		},
		{
			id: 3,
			title: 'Eng Rings'
		},
		{
			id: 4,
			title: 'Eng Rings'
		},
		{
			id: 5,
			title: 'Eng Rings'
		},
		{
			id: 6,
			title: 'Eng Rings'
		},
		{
			id: 7,
			title: 'Eng Rings'
		},
		{
			id: 8,
			title: 'Eng Rings'
		}
	];

	const Item = ({ title }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.topBarText}>Typing Website</Text>
			<AntDesign name="user" size={25} color="#007AFF" onPress={() => openMe} />
			{/* <Button title="Go to Main Page" onPress={() => router.push('/')} /> */}
			<View style={styles.overlay}>
				<FlatList
					data={EngRing}
					renderItem={({ item }) => <Item title={item.title} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
};

export default TopBar;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	topBarText: {
		color: 'white',
		fontSize: 28
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 200,
		zIndex: 1,
		height: 500,
		backgroundColor: 'white',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4
	},
	title: {
		fontSize: 20,
		fontStyle: 'italic'
	}
});
