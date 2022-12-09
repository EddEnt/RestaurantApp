import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

function MainScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Home Page</Text>
      <CustomButton>About Us</CustomButton>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: "red",
  },
});
