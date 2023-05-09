import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import colors from "../assets/colors";
import postsFile from "../assets/postsFile";
import React from "react";

const PostScreen = ({ route, navigation }) => {
	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();

		var months = [
			"January",
			"Febrauary",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		today = dd + " " + months[mm - 1] + " " + yyyy;
		return today;
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.userContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require("../assets/avatar.jpeg")}
							style={styles.image}
						/>
					</View>
					<View style={styles.userTextContainer}>
						<Text style={styles.userText}>07_inamul</Text>
					</View>
				</View>
				<View style={styles.postContainer}>
					<Text style={{ fontSize: 20 }} selectable>
						{postsFile.postText}
					</Text>
				</View>
				<View style={styles.dateTextContainer}>
					<Text style={styles.dateText}>Posted on {getDate()}</Text>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	userContainer: {
		padding: 10,
		flexDirection: "row",
	},
	userTextContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 10,
	},
	imageContainer: {
		borderRadius: 36,
		overflow: "hidden",
	},
	image: {
		width: 46,
		height: 46,
		borderRadius: 36,
	},
	userText: {
		color: colors.secondary,
		fontSize: 20,
	},
	postContainer: {
		backgroundColor: colors.secondary,
		padding: 25,
	},
	dateTextContainer: {
		marginLeft: 10,
		marginBottom: 145,
		marginTop: 5,
	},
	dateText: {
		color: colors.secondary,
		fontSize: 16,
	},
});

export default PostScreen;
