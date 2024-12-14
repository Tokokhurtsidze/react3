import { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      inputvalue: "",
      todoID: 1,
      error:null,
      users: [
        { id: 1, name: "Toko" },
        { id: 2, name: "Gio" },
      ],
    };
  }

  componentDidMount() {
    this.fetchTodo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoID !== this.state.todoID) {
      this.fetchTodo();
    }
  }
static getDerviedStateFromError(error){
  return{
    error:error.message
  }
}
  fetchTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.todoID}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  handleInputChange = (event) => {
    this.setState({ inputvalue: event.target.value });
  };
// shouldComponentUpdate(nextprops,nextstate){
//     return !(this.state.show == nextstate.show && this.state.users == nextstate.users && this.state.todoID == nextstate.todoID)

//   }
  addUser = (event) => {
    event.preventDefault();
    const { inputvalue, users } = this.state;

    if (inputvalue.trim() === "") return;

    const newUser = {
      id: Date.now(),
      name: inputvalue,
    };

    this.setState({
      users: [...users, newUser],
      inputvalue: "",
    });
  };

  removeUser = (id) => {
    const users = this.state.users.filter((user) => user.id !== id);
    this.setState({ users });
  };

  toggle = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  open = () => {
    this.setState({ show: true });
  };

  nextTodo = () => {
    this.setState((prevState) => ({ todoID: prevState.todoID + 1 }));
  };

  render() {
    const { show, users, inputvalue } = this.state;

    return (
      <div className="users">
        <form className="user-form" onSubmit={this.addUser}>
          <input
            type="text"
            value={inputvalue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add user</button>
        </form>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.open}>Open</button>
        <button onClick={this.nextTodo}>Next todo</button>
        {show &&
          users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              action={this.removeUser}
            />
          ))}
      </div>
    );
  }
}

export default UsersList;

