import { useState } from 'react';
import { User } from '../../types/User';

type Props = {
  users: Array<User>;
};

export const Form: React.FC<Props> = ({ users }) => {
  const [selectedUserId, setSelectedUserId] = useState('0');
  const [title, setTitle] = useState('');

  return (
    <>
      <h1>Add todo form</h1>

      <form action="/api/users" method="POST">
        <div className="field">
          <input
            type="text"
            data-cy="titleInput"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          {title !== '' || (
            <span className="error">Please enter a title</span>
          )}
        </div>

        <div className="field">
          <select
            data-cy="userSelect"
            value={selectedUserId}
            onChange={(event) => {
              setSelectedUserId(event.target.value);
            }}
          >
            <option value="0" disabled>Choose a user</option>
            {users.map(user => (
              <option value={`${user.id}`}>
                {user.name}
              </option>
            ))}
          </select>

          {selectedUserId !== '0' || (
            <span className="error">Please choose a user</span>
          )}
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>
    </>
  );
};
