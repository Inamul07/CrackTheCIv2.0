import { View, ScrollView, TextInput, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import CustomButton from "../components/CustomButton";
import colors from "../assets/colors";

const AddPostScreen = ({ naviagtion }) => {
	const [selected, setSelected] = useState("");
	const [display, setDisplay] = useState(false);

	const data = [
		{ key: "1", value: "Meta" },
		{ key: "2", value: "Amazon" },
		{ key: "3", value: "Apple" },
		{ key: "4", value: "Netflix" },
		{ key: "5", value: "Google" },
		{ key: "6", value: "Others" },
	];

	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<SelectList
						boxStyles={styles.input}
						dropdownStyles={{
							marginHorizontal: 20,
							backgroundColor: colors.secondary,
						}}
						notFoundText={
							<Text style={{ color: "tomato" }}>Not Found</Text>
						}
						placeholder="Select Company"
						search
						setSelected={(val) => {
							setSelected(val);
							val == 6 ? setDisplay(true) : setDisplay(false);
						}}
						data={data}
					/>
					<Text
						style={{
							fontSize: 16,
							color: "white",
							marginHorizontal: 25,
							textAlign: "justify",
						}}
					>
						<Text style={{ fontWeight: "bold" }}>Note : </Text>If
						you don't find the particular company, search and select
						"Others" and provide the details
					</Text>
					{display && (
						<View>
							<TextInput
								style={styles.input}
								placeholder="Comapny name"
							/>
							<TextInput
								style={styles.input}
								placeholder="Comapny branch"
							/>
						</View>
					)}
					<TextInput
						style={styles.input}
						placeholder="Post title"
						selectionColor={colors.primary}
					/>
					<TextInput
						multiline
						placeholder="Post Description"
						style={styles.input}
						selectionColor={colors.primary}
					/>
					<View style={styles.button}>
						<CustomButton title={"Submit"} />
					</View>
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
	input: {
		margin: 20,
		borderWidth: 1,
		padding: 10,
		color: colors.primary,
		borderRadius: 30,
		backgroundColor: colors.secondary,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AddPostScreen;
