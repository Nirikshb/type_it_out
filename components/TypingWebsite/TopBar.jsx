import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TopBar = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.topBarText}>Typing Website</Text>
			<AntDesign name="user" size={25} color="#007AFF" />
			{/* <Button title="Go to Main Page" onPress={() => router.push('/')} /> */}
		</View>
	);
};

export default TopBar;

const styles = StyleSheet.create({
	container: {
		// flex : 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
		// backgroundColor : '#FFF',
	},
	topBarText: {
		color: 'white',
		fontSize: 28
	}
});
