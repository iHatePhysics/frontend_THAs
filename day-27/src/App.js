import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <div className="todo-app">
        <AddTodo />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
