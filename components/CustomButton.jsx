import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlerpress, containerStyles, textStyles, isLoading }) => {
	return (
		<TouchableOpacity
			onPress={handlerpress}
			activeOpacity={0.7}
			disabled={isLoading}
			className={`bg-secondary-100 rounded-xl p-4 justify-center items-center ${containerStyles} ${
				isLoading ? "opacity-50" : ""
			}`}
		>
			<Text className={`text-lg font-psemibold text-primary ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
