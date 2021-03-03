import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

const NewTodoForm = () => {
  const [ formData, setFormData ] = useState({ text: '' });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name] : value
    }));
  };

  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch({ type: 'ADD_TODO', payload: todo });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (formData.text.trim().length > 0) {
      const todo = { ...formData, id: nanoid() };
      addTodo(todo);
    }
    setFormData({ text: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo </label>
      <input onChange={handleChange} name="text" id="text" type="text" value={formData.text} placeholder="Add a todo" />
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;
