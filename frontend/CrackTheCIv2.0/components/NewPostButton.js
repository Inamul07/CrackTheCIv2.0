import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/colors";
import { Entypo } from "@expo/vector-icons";

function NewPostButton({ navigation }) {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={() => navigation.push("AddPostScreen")}>
				<View style={styles.button}>
					<Entypo name="plus" size={24} color="black" />
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		position: "absolute",
		bottom: 25,
		right: 20,
		zIndex: 1,
	},
	button: {
		width: 65,
		height: 65,
		backgroundColor: colors.secondary,
		borderRadius: 37,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 50,
		height: 50,
	},
});

export default NewPostButton;
