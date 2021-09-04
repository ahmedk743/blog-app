import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import PostForm from "../components/PostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <PostForm
      titleLabel="Title:"
      contentLabel="Content:"
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate("Index"))
      }
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
