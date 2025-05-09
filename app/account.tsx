import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <Text style={styles.sectionTitle}>Account</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Change Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Phone Number Verification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>ID Verification</Text>
      </TouchableOpacity>

      {/* Health Profile */}
      <Text style={styles.sectionTitle}>Health</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Health Profile</Text>
      </TouchableOpacity>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>Preferences</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Language</Text>
      </TouchableOpacity>

      {/* Info */}
      <Text style={styles.sectionTitle}>About</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Version 1.0.0</Text>
      </TouchableOpacity>

      {/* Help */}
      <Text style={styles.sectionTitle}>Help & Support</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Contact Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});
