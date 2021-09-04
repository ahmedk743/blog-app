import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "UPDATE_POST":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_POST", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
const updateBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "UPDATE_POST", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost },
  [{ title: "Farzi Post", content: "Farzi Content", id: 1 }]
);
