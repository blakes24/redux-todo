import { useSelector } from 'react-redux';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((store) => store.todos);

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <NewTodoForm />
      {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
};

export default TodoList;
