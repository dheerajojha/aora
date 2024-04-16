import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const FormField = ({ title, value, placeholder, handlerChaneText, otherStyles, ...props }) => {
	return (
		<View className={`space-y-2 ${otherStyles} w-full`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>
			<View className="bg-black-100 p-4 rounded-2xl">
				<TextInput
					placeholder={placeholder}
					placeholderTextColor="#7b7b8b"
					onChangeText={handlerChaneText}
				/>
			</View>
		</View>
	);
};

export default FormField;
