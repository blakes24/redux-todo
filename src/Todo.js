import { useDispatch } from 'react-redux';
import './Todo.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch({ type: 'DELETE_TODO', payload: todo.id });

  return (
    <div className="Todo">
      <div className="Todo-btns">
        <button onClick={remove} className="Todo-remove">
          X
        </button>
      </div>
      <p>{todo.text}</p>
    </div>
  );
};

export default Todo;
