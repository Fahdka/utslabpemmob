import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type InfoStatus = 'selesai' | 'proses';

export interface InfoCardProps {
  title: string;
  status: InfoStatus;
  onPress: () => void;
}

const STATUS_COLOR: Record<InfoStatus, string> = {
  selesai: '#2E7D32',
  proses: '#EF6C00',
};

export default function InfoCard({ title, status, onPress }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.badge, { backgroundColor: STATUS_COLOR[status] }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#1565C0',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

