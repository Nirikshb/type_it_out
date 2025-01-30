import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

const UpperMenu = () => {
	const [countTouch, setCountTouch] = useState('');

	const onPress = (value) => {
		// Alert.alert('You tapped the button!',value);
		setCountTouch(value);
	};

	return (
		<View>
			<Text style={styles.title}>Choose Your Countdown</Text>
			<Text style={styles.chosenCount}>You Have Chose {countTouch}</Text>
			<View style={styles.countContainer}>
				<Button title="15s" style={styles.countdown} onPress={() => onPress('15s')}></Button>
				<Button title="30s" style={styles.countdown} onPress={() => onPress('30s')}></Button>
				<Button title="45s" style={styles.countdown} onPress={() => onPress('45s')}></Button>
				{/* <Button title='15s' style={styles.countdown}></Button> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: 'white',
		textAlign: 'center'
	},
	chosenCount: {
		color: 'white',
		marginTop: 12,
		textAlign: 'center'
	},
	countdown: {
		color: 'white',
		marginTop: 20,
		borderColor: '#eaeaea',
		borderWidth: 1,
		padding: 12,
		width: 70,
		textAlign: 'center',
		borderRadius: 4
	},
	countContainer: {
		// flex : 1,
		flexDirection: 'row',
		color: 'white',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
});

export default UpperMenu;
