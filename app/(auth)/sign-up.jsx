import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
	const [form, setForm] = useState({
		email: "",
		userName: "",
		password: "",
	});
	const [isSubmiting, setIsSubmiting] = useState(false);
	return (
		<SafeAreaView className="h-full bg-primary">
			<ScrollView>
				<View className="px-4 min-h-[88vh] items-center justify-center">
					<Image source={images.logo} className="h-[84px] w-[130px]" resizeMode="contain" />
					<Text className="text-2xl text-white font-psemibold">Sign Up to Aora</Text>
					<FormField
						title="Email"
						value={form.email}
						handlerChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>

					<FormField
						title="userName"
						value={form.userName}
						handlerChangeText={(e) => setForm({ ...form, userName: e })}
						otherStyles="mt-7"
						keyboardType="userName"
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
						Already Have an Account?{" "}
						<Link href="sign-in" className="text-secondary-100 font-psemibold">
							Sign In
						</Link>
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
