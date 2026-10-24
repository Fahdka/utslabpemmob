import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import InfoCard, { InfoStatus } from './src/components/InfoCard';
import DirektoriMahasiswaScreen from './src/screens/DirektoriMahasiswaScreen';

export default function App() {
  const showDetail = (title: string, status: InfoStatus) => {
    Alert.alert(title, `Status: ${status}`);
  };

  return (
    <View style={styles.container}>
      <InfoCard
        title="Mengerjakan Jobsheet 04"
        status="proses"
        onPress={() => showDetail('Mengerjakan Jobsheet 04', 'proses')}
      />
      <InfoCard
        title="Instalasi Expo dan VS Code"
        status="selesai"
        onPress={() => showDetail('Instalasi Expo dan VS Code', 'selesai')}
      />
      <DirektoriMahasiswaScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
});
