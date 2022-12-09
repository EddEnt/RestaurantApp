import { View, Text } from "react-native";

function CustomButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default CustomButton;
