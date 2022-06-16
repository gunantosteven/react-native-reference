import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOnStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOnStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoParent: {
    height: 100,
    justifyContent: "flex-end",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
