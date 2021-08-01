const addTodo = (todo) => {
  return {
    type: "AddTodo",
    payload: todo,
  };
};

const delTodo = (id) => {
  return {
    type: "DelTodo",
    payload: id,
  };
};
const setTodo = (id) => {
  return {
    type: "SetTodo",
    payload: id,
  };
};
const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        let t = todos.slice(0, 4);
        return dispatch({
          type: "LoadTodo",
          payload: t,
        });
      });
  };
};
const clearTodo = () => {
  return {
    type: "ClearTodos",
  };
};
export { addTodo, delTodo, setTodo, loadTodo, clearTodo };
