import { StyleSheet, Text, View } from "react-native";

const GREEN = "#00843D";
const DARK_GREEN = "#006B32";
const LIGHT_GREEN = "#EAF7EF";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca IFMA</Text>
      <Text style={styles.subtitle}>Seu conhecimento começa aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 22,
    fontWeight: "900",
    color: DARK_GREEN,
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00843D",
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginTop: 5,
  },
});
