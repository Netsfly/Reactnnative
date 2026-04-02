import { Text } from "react-native";

type GreetingProps = {
  name: string;
  role: string;
};

export default function Greeting({ name, role }: GreetingProps) {
  return <Text>Hello {name}, have a good a day! {role}</Text>;
}