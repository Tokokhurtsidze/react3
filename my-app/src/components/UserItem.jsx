import React from 'react';

const UserItem=({ id, name, action })=> {
 console.log('user', id);
 
 return (
    <div className="user-item">
      <p>ID: {id}</p>
      <p>NAME: {name}</p>
      <button onClick={() => action(id)}>Remove user</button>
    </div>

  );

}


export default React.memo(UserItem);