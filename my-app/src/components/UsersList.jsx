import { useEffect, useState ,useRef, useCallback } from "react";
import UserItem from "./UserItem";

const UsersList = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Toko" },
    { id: 2, name: "Gio" },
  ]);
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus(); 
  },[])
    // useEffect(()=>{
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(data => data.json())
      // .then(res => console.log(res))
      // console.log(users.length-1);
      // return () => {
        // console.log('cleanup',users[users.length-1]);
         
      
// }},[users])
  const onchange = (event) => {
    const value = event.target.value;
    setinputvalue(value);
  };

  const addUser = (event) => {
    event.preventDefault();
    const user = {
      id:users.length+1,
      name:inputvalue
    }
  
    if (inputvalue.trim() === "") return;
  
  setUsers((prevState) => [...prevState, user]);
    setinputvalue("");
  };
  

  const removeUser = useCallback((id) => {
    setUsers((prevState)=> prevState.filter((user) => user.id !== id))
      },[])
  
  return (
    <div className="users">
      <form className="user-form" onSubmit={addUser}>
        <input ref={inputRef}
          type="text"
          value={inputvalue}
          onChange={onchange} 
        />
        <button type="submit">Add user</button>
      </form>
{/* <button onClick={customFocus}>Focus </button> */}
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          action={removeUser}
        />
      ))}
    </div>
  );
};

export default UsersList;


