import axios from "axios";
import { errorHandler } from "./auth";

const API_URL = "http://localhost:8080";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const createTodo = async (title: string, content: string) => {
  try {
    const token = getToken();

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
    errorHandler(e);
  }
};

export const putTodos = async (id: string, title: string, content: string) => {
  try {
    const token = getToken();

    const res = await axios.put(
      API_URL + `/todos/${id}`,
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
    errorHandler(e);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const token = getToken();

    const res = await axios.delete(API_URL + `/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return res;
  } catch (e) {
    errorHandler(e);
  }
};

export const getTodos = async () => {
  try {
    const token = getToken();

    const res = await axios.get(API_URL + "/todos", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    errorHandler(e);
  }
};

export const getTodo = async (id: string) => {
  try {
    const token = getToken();

    const res = await axios.get(API_URL + `/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (e) {
    errorHandler(e);
  }
};
