import { useState } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

function App() {
// useState is react hook + array destr.
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
//  add todo method to help with state
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />     
      <List todos={todos}/>          {/*components inside list, passing whole array of todos into List.js */}
    </div>
  );
}

export default App;
