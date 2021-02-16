import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import PlayView from "./Views/PlayView/Main";
import { createStackNavigator } from "@react-navigation/stack";
import { SetupGameScreen } from "./Views/Screens/SetupGame";
import { ViewPagerScreen } from "./Views/Screens/ViewPager";
import { RulesScreen } from "./Views/Screens/Rules";
import { HomeScreen } from "./Views/Screens/Home";
//navigation
import { NavigationContainer } from "@react-navigation/native";

import { Button as Button2, Text } from "react-native-elements";

const MainStack = createStackNavigator();

function PlayGameScreen({ route, navigation }) {
  const { players } = route.params;
  return (
    <>
      <PlayView players={players}></PlayView>
    </>
  );
}

function DetailsScreen({ route, navigation }) {
  const { players, monopoly } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>Players: {JSON.stringify(players)}</Text>
      <Text>monopoly: {JSON.stringify(monopoly)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Login" }}
        />
        <MainStack.Screen name="Details" component={DetailsScreen} />
        <MainStack.Screen
          name="Pager"
          component={ViewPagerScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Rules"
          component={RulesScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="SetupGame"
          component={SetupGameScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="PlayGame"
          component={PlayGameScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#33D1FF",
  },
});
