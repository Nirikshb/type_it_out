import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const UpperMenu = () => {
	const [selectedTime, setSelectedTime] = useState(null);
	const [countdown, setCountdown] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [customTimeInput, setCustomTimeInput] = useState('');
	const times = ['15s', '30s', '45s'];

	const handleCustomTime = () => {
		const seconds = parseInt(customTimeInput, 10);
		if (!isNaN(seconds) && seconds > 0) {
		  handleSelect(`${seconds}s`);
		  setCustomTimeInput('');
		} else {
		  Alert.alert('Invalid Time', 'Please enter a valid number of seconds');
		}
	  };
	useEffect(() => {
		let interval;
		if (isActive && countdown > 0) {
			interval = setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000);
		} else if (countdown === 0 && isActive) {
			setIsActive(false);
			Alert.alert("Time's up!");
		}
		return () => clearInterval(interval);
	}, [isActive, countdown]);

	const handleSelect = (time) => {
		const seconds = parseInt(time, 10);
		setSelectedTime(time);
		setCountdown(seconds);
		setIsActive(false);
	};

	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	const resetTimer = () => {
		setCountdown(selectedTime ? parseInt(selectedTime, 10) : 0);
		setIsActive(false);
	};

	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Countdown Timer</Text>

			<Text style={styles.timerText}>{formatTime(countdown)}</Text>

			<View style={styles.buttonRow}>
				{times.map((time) => (
					<TouchableOpacity
						key={time}
						style={[styles.timeButton, selectedTime === time && styles.selectedButton]}
						onPress={() => handleSelect(time)}
					>
						<Text style={styles.buttonText}>{time}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View style={styles.controlRow}>
				<TouchableOpacity
					style={[styles.controlButton, isActive ? styles.pauseButton : styles.startButton]}
					onPress={toggleTimer}
					disabled={!selectedTime || countdown === 0}
				>
					<Text style={styles.controlText}>{isActive ? 'Pause' : 'Start'}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.controlButton, styles.resetButton]} onPress={resetTimer}>
					<Text style={styles.controlText}>Reset</Text>
				</TouchableOpacity>
			</View>


			<View style={styles.customTimeContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Enter seconds"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={customTimeInput}
          onChangeText={setCustomTimeInput}
        />
        <TouchableOpacity
          style={[styles.timeButton, styles.customTimeButton]}
          onPress={handleCustomTime}
        >
          <Text style={styles.buttonText}>Set Custom</Text>
        </TouchableOpacity>
      </View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#1a1a1a',
		borderRadius: 15,
		margin: 20
	},
	title: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20
	},
	timerText: {
		color: '#2196F3',
		fontSize: 48,
		textAlign: 'center',
		marginVertical: 20,
		fontWeight: 'bold'
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	timeButton: {
		backgroundColor: '#333',
		padding: 15,
		borderRadius: 10,
		width: '30%',
		alignItems: 'center'
	},
	selectedButton: {
		backgroundColor: '#2196F3',
		transform: [{ scale: 1.05 }]
	},
	disabledButton: {
		opacity: 0.6
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16
	},
	controlRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 15
	},
	controlButton: {
		paddingVertical: 12,
		paddingHorizontal: 25,
		borderRadius: 8,
		minWidth: 100,
		alignItems: 'center'
	},
	startButton: {
		backgroundColor: '#4CAF50'
	},
	pauseButton: {
		backgroundColor: '#FFC107'
	},
	resetButton: {
		backgroundColor: '#F44336'
	},
	controlText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	},
	customTimeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	  },
	  customInput: {
		backgroundColor: '#333',
		color: 'white',
		padding: 15,
		borderRadius: 10,
		flex: 1,
		marginRight: 10,
	  },
	  customTimeButton: {
		width: '40%',
	  },
});

export default UpperMenu;
