// App.js (or your main screen)
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // Use className for styling
    <View style={styles.container} className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-red-500 text-xl font-bold p-4 bg-white rounded-lg shadow-md">
        Open up App.js to start working on your app! (Styled with NativeWind)
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// You can keep using StyleSheet for things not covered by Tailwind or for base styles
const styles = StyleSheet.create({
  container: {
     //flex: 1, // Replaced by className="flex-1"
     //backgroundColor: '#fff', // Replaced by className="bg-blue-100"
     //alignItems: 'center', // Replaced by className="items-center"
     //justifyContent: 'center', // Replaced by className="justify-center"
  },
});