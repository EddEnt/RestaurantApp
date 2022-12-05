import { StyleSheet, Text, View } from "react-native";

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textAboutInfo}>Edward Entecott - 101190443</Text>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: "30%",
    alignItems: "center",
  },
  textAboutInfo: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
