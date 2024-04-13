import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
	return (
		<View className="bg-red-700 justify-center items-center h-screen">
			<Text>index</Text>
			<Link href="profile">go to profile</Link>
		</View>
	);
};

export default index;
