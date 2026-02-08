import { Image, StyleSheet, Text, View } from 'react-native';

type StudentCardProps = {
  name: string;
  description: string;
  photo: string;
};

export default function StudentCard({
  name,
  description,
  photo,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
    elevation: 3, // Android
    shadowColor: '#000', // iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
