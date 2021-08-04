import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

export default function App() {
  // theme clair #ecf0f1
  // theme fonce #2c3e50

  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={{
        ...styles.container, // ... spreadOperator, copie l'objet
        backgroundColor: darkMode ? "#2c3e50" : "#ecf0f1",
      }}
    >
      <View>
        {darkMode ? (
          <Image source={require("./assets/moon.png")} style={styles.logo} />
        ) : (
          <Image source={require("./assets/sun.png")} style={styles.logo} />
        )}

        <Button
          title={darkMode ? "Passer en mode jour" : "Passer en mode nuit"}
          color="#327756"
          onPress={() => setDarkMode((prevState) => !prevState)}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
