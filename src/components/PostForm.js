import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const PostForm = ({
  titleLabel,
  contentLabel,
  onSubmit,
  initialTitle,
  initialContent,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Text style={styles.label}>{titleLabel}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{contentLabel}</Text>
      <TextInput
        style={styles.input}
        value={content}
        multiline={true}
        numberOfLines={6}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.button}
        title="Save Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};
PostForm.defaultProps = {
  initialTitle: "",
  initialContent: "",
};

export default PostForm;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    // marginHorizontal: 8,
    marginVertical: 5,
    fontWeight: 500,
  },
  input: {
    padding: 8,
    // marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderBottomWidth: 3,
  },
  button: {
    marginTop: 8,
    borderRadius: 5,
  },
});
