# RescuMe – Your Lifeline in Times of Crisis

## Table of Contents
- [Project Description](#project-description)
- [Team](#team)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Usage](#installation--usage)
- [App Flow](#app-flow)
- [Demo & Visualization](#demo--visualization)
- [Conclusion](#conclusion)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Project Description

**RescuMe** is a React Native mobile application designed to deliver rapid help during disasters and calamities. It connects people in need with relief teams, bridging the gap between the afflicted and professionals by providing a robust interface for communication, location sharing, identification, and monitoring.

RescuMe is tailored for government agencies, private/semi-private organizations, NGOs, and volunteer groups mobilizing to help affected individuals during emergencies.

---

## Team

**Team Periperi**  
- Aaditya Bhatnagar  
- Manav Arya Singh

> “RescuMe is there for you, especially when it matters the most.” - Aaditya  
> “RescuMe saves you when you’re in a pinch.” - Manav

---

## Features

- **Two Levels of Emergency:**  
  - *RescuMe* (standard alert)
  - *RescuMeNow* (emergency SOS signal)

- **Real-Time GPS Mapping:**  
  - Live location updates for both rescue teams and stranded users  
  - ETA timer for remote rescue (e.g., helicopter access)

- **Retrace Last Known Location:**  
  - Stores last known positions in case of connectivity loss

- **Optimized Route Selection:**  
  - Algorithmically finds the shortest, most efficient route between rescue teams and users  
  - **Suggest Route:** Stranded users can mark checkpoints to guide relief teams, especially useful when official routes are blocked or unknown

- **Health Status Signaling:**  
  - Users can send health conditions with their location

- **Local News Feed:**  
  - Provides latest updates about the situation in the user’s locality

- **Verified User Profiles:**  
  - Stores and verifies user profiles for tailored emergency response

- **Hotspot Visualization:**  
  - Shows danger/shelter hotspots on the map for safe navigation

- **Command Center Communication:**  
  - Connects users with crisis helpline staff via text or voice

- **Volunteer Support:**  
  - “Be a RescuEr” button for volunteers to join rescue efforts

---

## Tech Stack

**Frontend (Mobile App):**
- React Native (Expo or CLI)
- Expo Router (navigation)
- TypeScript & JavaScript

**Mapping & Location:**
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)
- Google Maps API
- [expo-location](https://docs.expo.dev/versions/latest/sdk/location/)

**Backend:**
- Firebase Auth (profile creation & user verification, linked to national ID)
- Firebase Firestore (stores user health profiles, rescue team details, live locations, and suggested routes)

**Visualization/Demo:**
- Figma (UI/UX prototyping)

---

## Installation & Usage

1. **Clone the Repository**

2. **Install Dependencies**

3. **Start the App**
Scan the QR code with your Expo Go app or run on an emulator.

4. **Configuration**
- Add your Google Maps API key and Firebase config in the appropriate files.
- For detailed setup, see the [docs](./docs/SETUP.md) (if available).

---

## App Flow

1. **User Registration:**  
- Users create a verified profile (linked to national ID).

2. **Emergency Alert:**  
- User triggers *RescuMe* or *RescuMeNow*.
- Location and health status sent to command center.

3. **Rescue Coordination:**  
- Rescue teams see real-time locations and suggested routes.
- Stranded users can mark checkpoints to suggest custom routes.

4. **Live Tracking:**  
- Both parties’ locations are updated live on the map.
- ETA and best route are displayed.

5. **Communication:**  
- Users can chat or call crisis helpline staff.

6. **Volunteer Engagement:**  
- Volunteers can join rescue efforts via the app.

---

## Demo & Visualization

- **Figma Prototype:** [Link to Figma or screenshots]
- **GitHub Repository:** [https://github.com/Aadi11z/RescuMe](https://github.com/Aadi11z/RescuMe)

---

## Conclusion

In times of crisis and panic, RescuMe ensures everyone can get the help they need. We are committed to securing the safety of people during emergencies and promise to be there when it matters most.

---

## License

[MIT License](./LICENSE)

---

## Acknowledgments

- Built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/)
- Maps powered by [Google Maps API](https://developers.google.com/maps)
- Backend by [Firebase](https://firebase.google.com/)
- UI/UX prototyping with [Figma](https://figma.com)
