import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import PostForm from "../components/PostForm";

const EditScreen = ({ navigation }) => {
  const { state, updateBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const post = state.find((post) => post.id === id);

  return (
    <PostForm
      titleLabel="Edit Title:"
      contentLabel="Edit Content:"
      onSubmit={(title, content) =>
        updateBlogPost(id, title, content, () => navigation.pop())
      }
      initialTitle={post.title}
      initialContent={post.content}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
