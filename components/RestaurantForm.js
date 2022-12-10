import { View } from "react-native";
import Input from "./Input";

function RestaurantForm() {
  function nameChangeHandler() {}

  return (
    <View>
      <Input
        label="Name"
        textInputConfig={{
          keyboardType: "default",
          placeholder: "Restaurant Name...",
          onChangeText: nameChangeHandler,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          keyboardType: "default",
          placeholder: "Restaurant Description...",
        }}
      />
      <Input
        label="Tags"
        textInputConfig={{
          keyboardType: "default",
          placeholder: "Restaurant Tags...",
          multiline: true,
        }}
      />
    </View>
  );
}

export default RestaurantForm;
