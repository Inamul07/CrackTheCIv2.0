import {
	View,
	TouchableOpacity,
	TextInput,
	Image,
	StyleSheet,
	ActivityIndicator,
	Alert,
	Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import colors from "../assets/colors";
import CustomButton from "../components/CustomButton";
import { firebase } from "../config/firebase";
import { getDownloadURL, ref, getStorage } from "firebase/storage";

const SetProfile = ({ setProfileVisibility }) => {
	const [image, setImage] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const storage = getStorage();

	const uploadImage = async (image) => {
		setUploading(true);
		const response = await fetch(image);
		const blob = await response.blob();
		const filename = image.substring(image.lastIndexOf("/") + 1);

		try {
			await firebase
				.storage()
				.ref("avatars")
				.child(filename)
				.put(blob)
				.then(() => {
					setUploading(false);
					getDownloadURL(ref(storage, "avatars/" + filename)).then(
						(url) => setImageUrl(url)
					);
				});
		} catch (e) {
			console.log(e);
		}
	};

	const pickImage = async () => {
		try {
			const { status } =
				await ImagePicker.requestCameraPermissionsAsync();
			if (status !== "granted") {
				alert(
					"Sorry, we need camera roll permissions to make this work!"
				);
				return;
			}

			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: false,
			});

			if (!result.canceled) {
				console.log(result.assets);
				setImage(result.assets[0].uri);
				uploadImage(result.assets[0].uri);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<TouchableOpacity onPress={pickImage}>
						<Image
							style={styles.image}
							source={
								image == null
									? require("../assets/avatar.jpeg")
									: { uri: image }
							}
						/>
					</TouchableOpacity>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Enter Username"
					selectionColor={colors.primary}
				/>
				<CustomButton
					title="Continue"
					onPress={() => setProfileVisibility(false)}
				/>
			</View>
			{uploading && (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size={"large"} color={"red"} />
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 50,
		backgroundColor: colors.primary,
		position: "absolute",
		height: "100%",
		width: "100%",
		zIndex: 2,
	},
	imageContainer: {
		marginBottom: 20,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
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
	loadingContainer: {
		backgroundColor: colors.secondary,
		position: "absolute",
		zIndex: 3,
		width: "100%",
		height: "100%",
		opacity: 0.4,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SetProfile;
