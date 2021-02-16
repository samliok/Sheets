import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// I put the button in absolute position because I want it to be on top of everything behind it

const styles = StyleSheet.create({
  container: {
    backgroundColor: "navy",
    width: 55,
    height: 55,
    borderRadius: 28,
    position: "absolute",
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    zIndex: 1,
    elevation: 1,
  },

  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

const AddButtonProps = {
  onAdd: () => {},
};

const AddButton = ({ onAdd }) => (
  <TouchableOpacity style={styles.container} onPress={onAdd}>
    <Text style={styles.text}>+</Text>
  </TouchableOpacity>
);

export default AddButton;
