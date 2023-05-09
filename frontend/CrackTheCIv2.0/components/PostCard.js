import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../assets/colors";

const PostCard = ({ image, title, description }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: "row",
		padding: 16,
		backgroundColor: colors.secondary,
		borderRadius: 15,
		margin: 16,
		width: "90%",
	},
	imageContainer: {
		borderRadius: 36,
		overflow: "hidden",
	},
	image: {
		width: 72,
		height: 72,
	},
	textContainer: {
		marginLeft: 16,
		justifyContent: "center",
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginTop: 8,
	},
});

export default PostCard;
