import axios from "axios";

const API_URL = "http://localhost:8080";

const token = localStorage.getItem("token");

export const createTodo = async (title: string, content: string) => {
  try {
    const res = await axios.post(
      API_URL + "/todos",
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = async () => {
  try {
    const res = await axios.get(API_URL + "/todos", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
