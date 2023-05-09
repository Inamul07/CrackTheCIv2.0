import { View, Text, TextInput, Image, StyleSheet, Alert } from "react-native";
import colors from "../assets/colors";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const onSignUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password).catch((err) =>
			Alert.alert("Sign Up Error", err.message)
		);
	};

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const validate = (email, password, confirmPassword) => {
		if (!validateEmail(email)) {
			Alert.alert("Type Error", "Please enter a valid email");
			return;
		}
		if (password === null || password.length < 6) {
			Alert.alert(
				"Weak Password",
				"Password must contain atleast of 6 characters"
			);
			return;
		}
		if (confirmPassword !== password) {
			Alert.alert(
				"Match Error",
				"The password doesn't match! Please check again."
			);
			return;
		}
		onSignUp(email, password);
	};

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require("../assets/logos/crackTheCI.png")}
					style={styles.logo}
				/>
			</View>
			<TextInput
				style={styles.input}
				placeholder="E-mail"
				selectionColor={colors.primary}
				inputMode="email"
				autoCapitalize="none"
				autoCorrect={false}
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<TextInput
				secureTextEntry
				placeholder="Password"
				style={styles.input}
				selectionColor={colors.primary}
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<TextInput
				secureTextEntry={true}
				placeholder="Confirm Password"
				style={styles.input}
				selectionColor={colors.primary}
				value={confirmPassword}
				onChangeText={(text) => setConfirmPassword(text)}
			/>
			<CustomButton
				title="Submit"
				onPress={() => validate(email, password, confirmPassword)}
			/>
			<View style={styles.signupTextContainer}>
				<Text style={styles.signupText}>Already a user? </Text>
				<Text
					style={[
						styles.signupText,
						{
							color: "dodgerblue",
							fontStyle: "italic",
							textDecorationLine: "underline",
						},
					]}
					onPress={() => navigation.goBack()}
				>
					Login
				</Text>
			</View>
		</View>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 50,
	},
	logo: {
		width: 200,
		height: 200,
		marginBottom: 10,
	},
	input: {
		margin: 20,
		borderWidth: 1,
		padding: 10,
		color: colors.primary,
		borderRadius: 30,
		backgroundColor: colors.secondary,
		width: "100%",
	},
	button: {
		width: "100%",
		backgroundColor: colors.secondary,
		borderRadius: 20,
		margin: 20,
	},
	signupTextContainer: {
		alignSelf: "flex-end",
		flexDirection: "row",
	},
	signupText: {
		fontSize: 16,
		color: colors.secondary,
	},
});
