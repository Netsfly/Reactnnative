import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/b6/2c/56/b62c5679f6f6461245483bf9f435fec6.jpg",
        }}
        style={styles.banner}
      />
      
      <View style={styles.card}>
        <Text style={styles.name}>Alexander</Text>
        <Text style={styles.group}>B-BA22</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BUTTOn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  banner: {
    height: 370,
    backgroundColor: "#addf24",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 60,
    padding: 20,
    alignItems: "center",
    marginTop: -60,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  
  name: {
    fontSize: 33,
    fontWeight: "600",
  },

  group: {
    color: "black",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#444343",
    width: "100%",
    paddingVertical: 20,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});