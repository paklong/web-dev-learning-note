import { useState } from 'react'
import './App.css'


export default function App() {
  const [todos, setTodos] = useState(["Buy milk", "Walk dog", "Learn React"]);

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="text"
            defaultValue={todo}
            onChange={(e) => {
              const newTodos = [...todos];
              newTodos[index] = e.target.value;
              setTodos(newTodos);
            }}
          />
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
