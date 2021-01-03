/*
 * @Author: your name
 * @Date: 2021-01-02 18:17:48
 * @LastEditTime: 2021-01-02 20:45:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\UserList.js
 */
import React from 'react';
import UserAdd from './UserAdd'
import PropTypes from 'prop-types'
class UserList extends React.Component{
  constructor(props,context){
    super(props)
    this.state = {
      newUser:''
    }
  }

  // componentDidMount(){
  //   console.log(this.props.users)
  // }
  // static childContextType = {
  //   addUser: PropTypes.fuc
  // }
  render(){
    // console.log(this.context);
    return (
      <div>
        <ul>
          {this.props.users.map(function(user){
            
            return (
            <li key={user.id}>
              <span>{user.url}</span>
            </li>
            )
          })}
        </ul>
        <UserAdd/>
      </div>
    )
  }
}
// Use/
export default UserList