import axios from "axios";

import { errorHandler } from "./errorHandler";
import { API_URL, AUTH_KEY } from "../../constant/api";
import { getToken } from "./getToken";
import { Todo, TodoResponse, TodosResponse } from "../../types/todo";

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
          [AUTH_KEY]: token,
        },
      }
    );
    return res;
  } catch (e) {
    errorHandler(e);
  }
};

export const putTodo = async (id: string, title: string, content: string) => {
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
          [AUTH_KEY]: token,
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
        [AUTH_KEY]: token,
      },
    });

    return res;
  } catch (e) {
    errorHandler(e);
  }
};

export const getTodos = async (): Promise<Todo[]> => {
  const token = getToken();

  const res = await axios.get(API_URL + "/todos", {
    headers: {
      [AUTH_KEY]: token,
    },
  });
  return res.data.data;
};

export const getTodo = async (id: string): Promise<Todo> => {
  const token = getToken();

  const res = await axios.get(API_URL + `/todos/${id}`, {
    headers: {
      [AUTH_KEY]: token,
    },
  });

  return res.data.data;
};
