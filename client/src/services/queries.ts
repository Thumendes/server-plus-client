import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api } from "./api";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const findAllTodoQuery = () =>
  useQuery<AxiosResponse<Todo[]>>("findAllTodo", () => {
    return api.get("/todos");
  });
