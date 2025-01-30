import { Image, StyleSheet, Platform, Text, SafeAreaView } from 'react-native';
import LoginForm from '@/components/LoginForm';
import TopBar from '@/components/TypingWebsite/TopBar';
import UpperMenu from '@/components/TypingWebsite/UpperMenu';

export default function HomeScreen() {
	return (
		<SafeAreaView>
      {/* <Text>ABC</Text> */}
		<UpperMenu />
			{/* <LoginForm /> */}
		</SafeAreaView>
	);
}
