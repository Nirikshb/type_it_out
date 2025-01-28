import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import TopBar from '../components/TypingWebsite/TopBar';
const LoginForm = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>LoginForm</Text>

			<Text style={styles.label}>Name</Text>
			<TextInput type="email" placeholder="Enter Name" style={styles.input}></TextInput>

			<Text style={styles.label}>Email</Text>
			<TextInput type="email" placeholder="Enter Email" style={styles.input}></TextInput>

			<Text style={styles.label}>Password</Text>
			<TextInput type="email" placeholder="Enter Password" style={styles.input}></TextInput>
		</View>
	);
};

export default LoginForm;

const styles = StyleSheet.create({
	container: {
		// justifyContent: 'center',
		backgroundColor: ''
	},
	label: {
		color: 'white',
		marginBottom: 20
	},
	header: {
		fontSize: 42,
		textAlign: 'center',
		color: 'white',
		marginVertical: 50
	},
	input: {
		height: 45,
		width: 250,
		color: 'white',
		borderBlockColor: 'white',
		borderWidth: 1,
		justifyContent: 'center',
		marginBottom: 20
	}
});
