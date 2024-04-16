import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	return (
		<SafeAreaView className="p-4">
			<ScrollView>
				<View>
					<Text>Home</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
