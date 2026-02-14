import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CounterButtonProps = {
  title: string;
  step?: number;
};

export default function CounterButton({ title, step = 1 }: CounterButtonProps) {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
        Likes: {count}
      </Text>

      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          backgroundColor: "#3897f0",
          padding: 8,
          borderRadius: 6,
          alignItems: "center",
        }}
        onPress={() => setCount(count + step)}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}