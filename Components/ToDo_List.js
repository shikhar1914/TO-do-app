import React from "react";
import ToDo from "./ToDo";

function ToDo_List(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <ToDo
            todo={todo}
            key={todo.id}
            setTodos={props.setTodos}
            todos={props.todos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDo_List;
