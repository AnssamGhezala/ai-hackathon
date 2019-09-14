import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Plant Village Challenge</Text>
      </View>
      <View>
        <View style={styles.plantContainer}>
          <Text>Image carousel here </Text>
        </View>
        <View style={styles.plantInfo}>
          <View style={styles.fileName}>
            <Text>Name of file </Text>
          </View>
          <View style={styles.className}>
            <Text>Class + disease </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fileName: {},
  className: {},
  plantContainer: {},
  plantInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    padding: 10,
    paddingTop: 40,
    display: "flex",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    textAlign: "center",
    fontSize: 60,
    flex: 1,
    flexWrap: "wrap",
    textDecorationLine: "underline"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
