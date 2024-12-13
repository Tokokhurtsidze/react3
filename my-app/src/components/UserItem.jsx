import React from 'react';

function UserItem({ id, name, action }) {
  return (
    <div className="user-item">
      <p>ID: {id}</p>
      <p>NAME: {name}</p>
      <button onClick={() => action(id)}>Remove user</button>
    </div>

  );
}


export default UserItem;