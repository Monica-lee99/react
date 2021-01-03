/*
 * @Author: your name
 * @Date: 2020-12-28 21:45:19
 * @LastEditTime: 2021-01-02 20:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\UserList.js
 */
import React from 'react';
import UserList from './UserList';
import axios from 'axios'
import PropTypes from 'prop-types'
class UserListContainer extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      user:[]
    }
  }
  static childContextTypes = {
    addUser: PropTypes.func
  }
  getChildContext() {
    return {addUser: this.addUser}
  }
  addUser = (newUser) => {
    console.log(this.state)
    const newUser1 = this.state.user.concat({url:newUser,id:this.state.user.length})
    this.setState({
      user:newUser1
    })
    console.log(this.state.user)
  }
  componentDidMount(){
    let promise = axios.get("https://api.github.com/users/octocat/gists");
    promise.then((result) =>
        {
          var lastGist = result.data;
          for(var [index] of lastGist.entries()){
            lastGist[index].id = index
          }
          console.log(lastGist)
          this.setState({
            user: lastGist
          })
        })
  }
  render(){
    return (<UserList users={this.state.user} />)
  }
}

// console.log(UserListContainer.childContextType);
export default UserListContainer