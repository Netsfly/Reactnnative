import StudentCard from '@/components/StudentCard';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <StudentCard
          name="Tom Johnson"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          photo="https://i.pravatar.cc/150?img=3"
        />

        <StudentCard
          name="Emily Davis"
          description="lorem 123 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          photo="https://i.pravatar.cc/150?img=5"
        />

        <StudentCard
          name="Steve Smith"
          description="lorem 456 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          photo="https://i.pravatar.cc/150?img=8"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16, // Добавляем отступы по краям
  },
});