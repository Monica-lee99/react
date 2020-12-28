/*
 * @Author: your name
 * @Date: 2020-12-28 19:24:48
 * @LastEditTime: 2020-12-28 19:37:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\form.js
 */
import React from 'react'
class loginForm extends React.Component{
  constructor(){
    super()
    this.state = {name:'',password:''}
  }
  render(){
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>用户名：
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        </label>
        <label>密码：
        <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
        </label>
        <input type="submit" name="" value="登录" />
      </form>
    )
  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
  }
}
export default loginForm
