// App.tsx
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const profileImage = { uri: 'https://placehold.co/100x100' }; // Replace with your image

function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <Icon name="bell" size={24} color="#fff" />
      </View>
      <View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileCaption}>2019 Flood{'\n'}Rathnapura City</Text>
      </View>
      <TouchableOpacity style={styles.rescueBtn}>
        <Text style={styles.rescueBtnText}>Rescue Me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sosBtn}>
        <Text style={styles.sosBtnText}>Emergency | SOS</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contacts</Text>
        <View style={styles.iconRow}>
          <Icon name="fire-truck" size={36} color="#e25822" />
          <Icon name="ambulance" size={36} color="#2ecc40" />
          <Icon name="hospital" size={36} color="#0074d9" />
          <Icon name="police-badge" size={36} color="#ff4136" />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.iconRow}>
          <Icon name="file-document" size={36} color="#555" />
          <Icon name="leaf" size={36} color="#27ae60" />
          <Icon name="alert" size={36} color="#f1c40f" />
          <Icon name="tools" size={36} color="#3498db" />
        </View>
      </View>
    </ScrollView>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={profileImage} style={styles.drawerImage} />
        <Text style={styles.drawerName}>User Name</Text>
        <Text style={styles.drawerProfile}>View profile</Text>
      </View>
      <DrawerItem label="Notification" icon={() => <Icon name="bell" size={24} />} onPress={() => {}} />
      <DrawerItem label="Invite Friend" icon={() => <Icon name="account-plus" size={24} />} onPress={() => {}} />
      <DrawerItem label="Help" icon={() => <Icon name="help-circle" size={24} />} onPress={() => {}} />
      <View style={styles.drawerSection}>
        <DrawerItem label="First Aid Tips" onPress={() => {}} />
        <DrawerItem label="Emergency Preparedness" onPress={() => {}} />
        <DrawerItem label="Safety Tips" onPress={() => {}} />
        <DrawerItem label="Hazard Alert" icon={() => <Icon name="alert" size={24} />} onPress={() => {}} />
        <DrawerItem label="Disaster Recovery" icon={() => <Icon name="tools" size={24} />} onPress={() => {}} />
        <DrawerItem label="Settings" icon={() => <Icon name="cog" size={24} />} onPress={() => {}} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#f57c1f', padding: 16, borderRadius: 12,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  profileSection: { alignItems: 'center', marginVertical: 16 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  profileCaption: { textAlign: 'center', color: '#555' },
  rescueBtn: {
    backgroundColor: '#aaa', padding: 16, borderRadius: 8, alignItems: 'center', marginVertical: 8,
  },
  rescueBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  sosBtn: {
    backgroundColor: '#e53935', padding: 16, borderRadius: 8, alignItems: 'center', marginVertical: 8,
  },
  sosBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  section: { marginVertical: 12 },
  sectionTitle: { fontWeight: 'bold', color: '#333', marginBottom: 8 },
  iconRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 },
  drawerHeader: { alignItems: 'center', padding: 20, backgroundColor: '#f57c1f' },
  drawerImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  drawerName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  drawerProfile: { color: '#fff', fontSize: 14, marginBottom: 8 },
  drawerSection: { marginTop: 16 },
});
