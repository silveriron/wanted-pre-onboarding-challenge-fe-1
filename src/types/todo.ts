export interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface TodosResponse {
  data: Todo[];
}

export interface TodoResponse {
  data: Todo;
}
