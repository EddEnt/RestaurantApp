import { Button, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

function MainScreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.bodyContainer}>
        <CustomButton onPress={() => navigation.navigate("MyRestaurant")}>
          My Restaurants
        </CustomButton>
        <CustomButton onPress={() => navigation.navigate("AddRestaurant")}>
          Add New Restaurant
        </CustomButton>
      </View>
      <View style={styles.footer}>
        <CustomButton onPress={() => navigation.navigate("AboutScreen")}>
          About Us
        </CustomButton>
        <View>
          <Text style={styles.footerText}>By Project 25</Text>
        </View>
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
  bodyContainer: {
    padding: 10,
    margin: 8,
    marginHorizontal: 60,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    alignItems: "center",
  },
  footerText: {
    marginTop: 10,
    fontSize: 11,
  },
});
