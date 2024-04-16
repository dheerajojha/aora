import { ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const index = () => {
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="justify-center items-center min-h-[90vh] w-full px-4">
					<Image source={images.logo} className="h-[84px] w-[130px]" resizeMode="contain" />
					<Image source={images.cards} className=" w-full h-[300px]" resizeMode="contain" />
					<View className="relative">
						<Text className="text-white font-bold text-3xl text-center">
							Discover Endless Possibilites With <Text className="text-secondary-200">Aora</Text>
						</Text>
						<Image
							source={images.path}
							className="absolute -right-8 -bottom-2 w-[136px] h-[15px]"
						/>
					</View>

					<Text className="text-sm text-center text-gray-100 font-pregular mt-7">
						Where creativity meets innovation: embar on a journey of limitless exploration with aora
					</Text>

					<CustomButton
						title="Continue with Email"
						handlerpress={() => {
							router.navigate("/sign-in");
						}}
						containerStyles={"w-full mt-7"}
					/>
				</View>
			</ScrollView>
			<StatusBar backgroundColor="#161622" style="light" />
		</SafeAreaView>
	);
};

export default index;
