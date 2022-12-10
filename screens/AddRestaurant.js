import { View, Text, TextInput, StyleSheet } from "react-native";
import RestaurantForm from "../components/RestaurantForm";

function AddRestaurant() {
  return (
    <View styles={style.rootContainer}>
      <RestaurantForm />
    </View>
  );
}

export default AddRestaurant;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
