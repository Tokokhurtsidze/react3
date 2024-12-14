import React, {PureComponent } from 'react';

class UserItem extends PureComponent {
  // shouldComponentUpdate(nextprops,nextstate){
  //   return !(this.state.show == nextstate.show && this.state.users == nextstate.users)

  // }
  render(){
const { id, name, action }=this.props
  
  return (
    <div className="user-item">
      <p>ID: {id}</p>
      <p>NAME: {name}</p>
      <button onClick={() => action(id)}>Remove user</button>
    </div>

  );
}
}


export default UserItem;