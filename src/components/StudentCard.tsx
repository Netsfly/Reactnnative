import { Image, StyleSheet, Text, View } from "react-native";
import CounterButton from "./CounterButton";

type Props = {
  name: string;
  role: string;
  img: string;
  desc: string;
  button?: string;
  btnStep?: number;
};

export default function StudentCard({
  name,
  role,
  img,
  desc,
  button = "Follow",
  btnStep = 1,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: img }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>

      <Image source={{ uri: img }} style={styles.postImage} />

      <Text style={styles.desc}>
        <Text style={{ fontWeight: "bold" }}>{name} </Text>
        {desc}
      </Text>

      <CounterButton title={button} step={btnStep} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  role: {
    color: "gray",
    fontSize: 12,
  },
  postImage: {
    width: "100%",
    height: 350,
  },
  desc: {
    padding: 10,
  },
});