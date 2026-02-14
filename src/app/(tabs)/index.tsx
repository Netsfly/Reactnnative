import StudentCard from "@/components/StudentCard";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const data = [
    {
      id: "1",
      name: "Marcus",
      role: "Fullstack Dev",
      desc: "Building scalable apps 🚀",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&fit=crop",
      button: "Follow",
      btnStep: 1,
    },
    {
      id: "2",
      name: "Elena",
      role: "Product Manager",
      desc: "Focusing on user growth 📈",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
      button: "Connect",
      btnStep: 3,
    },
    {
      id: "3",
      name: "Leo",
      role: "Cybersecurity",
      desc: "Protecting digital assets 🛡️",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
      button: "Hire",
      btnStep: 5,
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: 10,
          gap: 12,
        }}
      >
        {data.map((item) => (
          <View key={item.id} style={{ width: "47%" }}>
            <StudentCard {...item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}