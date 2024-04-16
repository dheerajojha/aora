import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
	return (
		<View className="bg-red-700 justify-center items-center h-screen">
			<Text>profile screen</Text>
			<Link href="/">go to index/home</Link>
		</View>
	);
};

export default profile;
