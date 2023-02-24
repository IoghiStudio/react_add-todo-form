import { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { TodoList } from './components/TodoList';
import { Form } from './components/Form';

const findUser = (userId: number) => {
  return usersFromServer.find(user => userId === user.id);
};

const todosWithUser = todosFromServer.map(todo => {
  const user = findUser(todo.userId);

  return {
    ...todo,
    user,
  };
});

export const App = () => {
  const [todos, setTodos] = useState(todosWithUser);

  return (
    <div className="App">
      <Form users={usersFromServer} />

      <TodoList todos={todos} />
    </div>
  );
};
