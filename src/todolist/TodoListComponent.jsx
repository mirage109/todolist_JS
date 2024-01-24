import React, { useState } from "react";
import todos from "../todos.json";
import { Todo } from "./TodoComponent";
import { AddTodo } from "./AddTodo";
import Style from "./Todo.module.css";
import { TaskCalculation } from "./TaskCalculation";

export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState(todos);
  

  const addNewToDoToList = (newItem) => {
    setTodoList([...todoList, newItem]);
  };
  const changeMarked = (id) => {
    //console.log(id);
    const findElement = todoList.find((el) => el.id === id);
    findElement.marked = !findElement.marked;
    //console.log(findElement);
    setTodoList([...todoList]);
  };

  const deleteTodo = (id) => {
    //console.log(id);
    todoList.forEach(function (el, i) {
      if (el.id === id) todoList.splice(i, 1);
    });
    setTodoList([...todoList]);
  };

  return (
    <div className={Style["todo"]}>
      <AddTodo addNewToDoToList={addNewToDoToList} />
      {todoList.map((el) => (
        <Todo
          className={Style["todo-list"]}
          changeMarked={changeMarked}
          deleteTodo={deleteTodo}
          key={el.id}
          {...el}
        />
      ))}
      <TaskCalculation todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};
