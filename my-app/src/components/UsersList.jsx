import { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component {
  state = {
    inputvalue: "",
    users: [
      { id: 1, name: "Toko" },
      { id: 2, name: "Gio" },
    ],
  };

  handleInputChange = (event) => {
    this.setState({
      inputvalue: event.target.value,
    });
  };

  addUser = (event) => {
    event.preventDefault();

    const { inputvalue, users } = this.state;

    if (inputvalue.trim() === "") return; 

    const newUser = {
      id: users.length + 1, 
      name: inputvalue,
    };

    this.setState({
      users: [...users, newUser],
      inputvalue: "", 
    });
  };
 
  removeuser=(id)=>{
    const users= this.state.users.filter((user)=>user.id !==id)
    this.setState({
        users
   
    })

  }
  render() {
    return (
      <div className="users">
        <form className="user-form" onSubmit={this.addUser}>
          <input
            type="text"
            value={this.state.inputvalue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add user</button>
        </form>
        {this.state.users.map((user) => (
          <UserItem key={user.id} id={user.id} name={user.name} action={this.removeuser}/>
        ))}
      </div>
    );
  }
}

export default UsersList;
