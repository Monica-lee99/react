/*
 * @Author: your name
 * @Date: 2021-01-02 19:41:50
 * @LastEditTime: 2021-01-02 20:57:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\UserAdd.js
 */
import React from 'react'
import PropTypes from 'prop-types'
class UserAdd extends React.Component{
  constructor(){
    super()
    this.state = {
      newUser:''
    }
    this.handClick = this.handClick.bind(this)
  }
  static contextTypes={
    addUser: PropTypes.func
  }
  handChange(e){
    this.setState({
      newUser:e.target.value
    })
  }
  handClick(e){
    e.preventDefault();
    console.log(this.context);
    this.context.addUser(this.state.newUser)
    // console.log(this.props.users)
  }
  componentDidMount(){
    this.inputInstance.focus()
  }
  render(){
    return(
      <div>
          <input type="text" ref={(input) => this.inputInstance = input} onChange={(e) => {this.handChange(e)}} name="" value={this.state.newUser} />
          <button onClick={this.handClick} type="">添加</button>
      </div>
      
    )
  }
}

export default UserAdd