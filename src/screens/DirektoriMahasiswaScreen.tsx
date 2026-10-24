import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface Mahasiswa {
  id: string;
  nama: string;
  prodi: string;
}

const DAFTAR_MAHASISWA: Mahasiswa[] = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function DirektoriMahasiswaScreen() {
  const [keyword, setKeyword] = useState<string>('');

  const hasil = DAFTAR_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Cari nama mahasiswa"
      />
      <FlatList
        data={hasil}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  nama: {
    fontSize: 16,
    fontWeight: '600',
  },
  prodi: {
    color: '#616161',
    marginTop: 2,
  },
  empty: {
    textAlign: 'center',
    color: '#616161',
    marginTop: 16,
  },
});

