import React, { useEffect, useState } from "react";
import { ITodo } from "./types/types";
import axios from "axios";
import TodoItem from "./TodoItem";
import List from "./List";

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todos: ITodo) => <TodoItem todo={todos} key={todos.id} />}
    />
  );
};

export default TodosPage;
