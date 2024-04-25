import Form from "./Components/Form";
import React, { useState, useEffect } from "react";
import "./App.css";
import ToDo_List from "./Components/ToDo_List";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterTodos = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterTodos();
    saveLocal();
  }, [todos, filter]);

  return (
    <div className="App">
      <header>
        <h1>Your To-Dos</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <ToDo_List
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
