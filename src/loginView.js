import React from 'react'
function UserGreeting(props) {
  return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
  return <h1>请先注册。</h1>;
}
class LoginView extends React.Component {
  render () {
    const isLoggedIn =  this.props.isLoggedIn
    if (isLoggedIn) {
      return (
      <UserGreeting/>
      )
    } else {
      return (
      <GuestGreeting/>
      )
    }
  }
}
export default LoginView