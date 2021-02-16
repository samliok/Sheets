import { Alert } from "react-native";
export const SelectAceAlert = async () =>
  new Promise((resolve) => {
    Alert.alert(
      "ACE!",
      "Choose whether the ace is low(1) or high(14)",
      [
        {
          text: "Low",
          onPress: () => {
            setLeftValue(1);
            resolve("LOW");
          },
        },
        {
          text: "High",
          onPress: () => {
            setLeftValue(14), resolve("HIGH");
          },
        },
      ],
      { cancelable: false }
    );
  });
