import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const Card = ({ image, title }) => {
	return (
		<View style={styles.card}>
			<Image
				source={title !== "Others" ? { uri: image } : image}
				style={[
					styles.image,
					{ borderRadius: title === "Others" ? 15 : 0 },
				]}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		height: Dimensions.get("window").width / 3,
		width: Dimensions.get("window").width / 3,
		backgroundColor: "#D9D9D9",
		borderRadius: 15,
		elevation: 15,
		alignItems: "center",
		justifyContent: "center",
		margin: 15,
	},
	image: {
		height: 70,
		width: 70,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#000",
		marginTop: 10,
	},
});

export default Card;
