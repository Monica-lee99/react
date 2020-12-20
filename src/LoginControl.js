import React from 'react'
import LoginView from './loginView'
class LoginControl extends React.Component {
  constructor () {
    super()
    this.state = {
      isLogin: false
    }
  }
  render () {
    const numbers = [1,2,3,4,5]
    const listItems = numbers.map((numbers) =>
      <li key={numbers.toString()}>{numbers}</li>
    );
    let isLogin = this.state.isLogin
    console.log(isLogin)
    let button = null
    if (isLogin) {
      button = <button type="" onClick={() => this.loginOut()}>切换</button>
    } else {
      button = <button type="" onClick={() => this.loginIn()}>切换</button>
    }
    return (
      <div>
        <LoginView isLoggedIn={isLogin}/>
        {button}
        <ul>
        {listItems}
        </ul>
      </div>
    )
  }
  loginOut () {
    console.log('登出')
    this.setState(() => {
      return {isLogin: false}
    })
  }
  loginIn () {
    console.log('登录')
    this.setState(() => {
      return {isLogin: true}
    })
  }
}
export default LoginControl