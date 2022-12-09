import { Button, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

function MainScreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Text>Home Page</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton onPress={() => navigation.navigate("AboutScreen")}>
          About Us
        </CustomButton>
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
  },
  bodyContainer: {},
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    alignItems: "center",
  },
});
