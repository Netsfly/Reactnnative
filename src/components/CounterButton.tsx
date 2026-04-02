import { useState } from "react";
import { Button, Text, View } from "react-native";

type CounterButtonProps = {
  title: string;
  initialValue: number;
  step: number;
};

export default function CounterButton({
  title,
  initialValue,
  step,
}: CounterButtonProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count}</Text>
      <Button title={title} onPress={() => setCount(count + step)} />
    </View>
  );
}