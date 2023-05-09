import { View, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../assets/colors";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Card from "../components/Card";
import NewPostButton from "../components/NewPostButton";
import SetProfile from "../components/SetProfile";
import { DOMAIN } from "../keys/keys";

const HomeScreen = ({ navigation }) => {
	const [companies, setCompanies] = useState([]);
	const domain = DOMAIN;

	useEffect(() => {
		fetch(domain + "company/all-companies")
			.then((res) => res.json())
			.then((data) => {
				data.push({
					name: "Others",
					logo: require("../assets/logos/others.jpg"),
				});
				setCompanies(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const [profileVisibility, setProfileVisibility] = useState(true);

	return (
		<>
			<ScrollView
				contentContainerStyle={{
					alignItems: "center",
					justifyContent: "center",
				}}
				style={{ backgroundColor: colors.primary }}
			>
				<View style={styles.container}>
					{companies.map((item, key) => {
						return (
							<TouchableHighlight
								key={key}
								onPress={() =>
									navigation.push("DetailsScreen", {
										company: item.name,
									})
								}
							>
								<Card image={item.logo} title={item.name} />
							</TouchableHighlight>
						);
					})}
				</View>
			</ScrollView>
			<NewPostButton navigation={navigation} />
			{profileVisibility && (
				<SetProfile setProfileVisibility={setProfileVisibility} />
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2D2D2D",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 50,
	},
});

export default HomeScreen;
