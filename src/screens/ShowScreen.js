import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const post = state.find((post) => post.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ paddingRight: 15 }}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={40} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    paddingBottom: 200,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: 700,
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  content: {
    fontSize: 20,
    color: "grey",
  },
});
