import React, { FormEvent, useCallback, useState } from 'react';
import "./App.css"
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './usersSlice';

const App = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const users:string[] = useSelector((state: any) => state.users)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!user.trim().length) return null
    dispatch(addUser(user));
    setUser("");
  }

  const onRemoveClick = useCallback((value: string) => {
    dispatch(removeUser(value));
  }, []);

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <input className='Add-Button' type="text" name="User" id="User" value={user} onChange={(e: any) => setUser(e.target.value)} />
        <button className='Add-Button' type="submit">ADD</button>
      </form>

      <div>
        {!users.length ?
          <p>No data found</p> :
          <table>
            <tbody>
              {users.map((user) => (
                <tr key={user}>
                  <td>{user}</td>
                  <td><button onClick={() => onRemoveClick(user)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default App