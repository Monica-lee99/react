/*
 * @Author: your name
 * @Date: 2020-12-28 21:45:19
 * @LastEditTime: 2020-12-28 21:54:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\UserList.js
 */
import React from 'react';
class UserList extends React.Component{
  render () {
    return (
      <div>
        <ul>
          {}
        </ul>
      </div>
    )
  }
}
class UserListContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user:[]
    }
  }
  componentDidMount(){
    var that = this
    fetch('/path/to/user-api').then((resp) => {
      resp.json().then((data) => {
        console.log(data)
      })
    })
  }
  render(){
    return (null)
  }
}
export default UserListContainer