/*
 * @Author: your name
 * @Date: 2020-12-20 16:05:35
 * @LastEditTime: 2020-12-28 20:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\App.js
 */
import './App.css';
import React from 'react'
import ErrorBoundary from './error'
const myStyle = {
  fontSize: 100,
  color: '#FF0000'
}; 
// const Profile = ({user}) => <div>name:{user.name}</div>
class App extends React.Component {
  constructor () {
    super()
    this.state = {date: new Date(),user:null}
  }
  onClick(){
    this.setState({user:null})
  }
  render () {
    return (
      <div>
        <h1>hello,world!</h1>
        <h2 style={myStyle}>现在是{this.state.date.toLocaleTimeString()}</h2>
        <ErrorBoundary>
          {/* <Profile user={this.state.user}/> */}
          <button onClick={() => this.onClick()}>12</button>
        </ErrorBoundary>
      </div>
    )
  }
  componentDidMount () {
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000)
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }
  componentWillUnmount () {
    clearInterval(this.timeId)
  }
}

export default App;
