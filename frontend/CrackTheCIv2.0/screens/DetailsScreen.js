import { View, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";
import NewPostButton from "../components/NewPostButton";
import PostCard from "../components/PostCard";
import colors from "../assets/colors";

const DetailsScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={() => navigation.push("PostScreen")}>
				<PostCard
					image={require("../assets/avatar.jpeg")}
					title="Meta Work Experience | California"
					description="by 07_inamul"
				/>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => navigation.push("PostScreen")}>
				<PostCard
					image={require("../assets/avatar.jpeg")}
					title="Meta SDE"
					description="by 07_inamul"
				/>
			</TouchableHighlight>
			<NewPostButton />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.primary,
	},
});

export default DetailsScreen;
