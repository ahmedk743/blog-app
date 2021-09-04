import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View style={{ height: "100%", backgroundColor: "#F7F7F7" }}>
      {state.length === 0 ? (
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              flex: 1,
              margin: 10,
              fontSize: 20,
              fontWeight: 600,
              paddingTop: 160,
              paddingLeft: 60,
            }}
          >
            Tap on + Icon above to Create Post.
          </Text>
          <Image
            style={{ width: 150, height: 150, marginTop: 10 }}
            source={require("../../assets/arrow.png")}
          />
        </View>
      ) : (
        <FlatList
          data={state}
          keyExtractor={(post) => post.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <AntDesign style={styles.icon} name="delete" size={34} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ paddingRight: 15 }}
        onPress={() => navigation.navigate("Create")}
      >
        <AntDesign name="plus" size={24} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  icon: {},
});

export default IndexScreen;
