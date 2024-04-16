import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [isSubmiting, setIsSubmiting] = useState(false);
	return (
		<SafeAreaView className="h-full bg-primary">
			<ScrollView>
				<View className="px-4 min-h-[88vh] items-center justify-center">
					<Image source={images.logo} className="h-[84px] w-[130px]" resizeMode="contain" />
					<Text className="text-2xl text-white font-psemibold">Sign in to Aora</Text>
					<FormField
						title="Email"
						value={form.email}
						handlerChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>

					<FormField
						title="Password"
						value={form.password}
						handlerChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles="mt-7"
						keyboardType="password"
					/>
					<CustomButton
						title="Sign in"
						containerStyles={`w-full mt-7`}
						handlerpress={() => {}}
						isLoading={isSubmiting}
					/>
					<Text className="text-gray-100 mt-4 text-base font-pregular">
						Don't Have an Account?{" "}
						<Link href="sign-up" className="text-secondary-100 font-psemibold">
							Sign Up
						</Link>
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
