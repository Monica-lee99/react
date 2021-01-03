/*
 * @Author: your name
 * @Date: 2020-12-20 16:05:35
 * @LastEditTime: 2021-01-03 14:53:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\App.js
 */
import './App.css';
import React from 'react'
// import ErrorBoundary from './error'
import { HashRouter, Route, Switch } from 'react-router-dom';
import UserListContainer from './UserContainer'
import MyWithpersistentData from './highterOrder';
import UserGist from './UserGust'
import PostList from './PostList'
import Home from './home'
// const myStyle = {
//   fontSize: 100,
//   color: '#FF0000'
// }; 
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
      // <div>
      //   <h1>hello,world!</h1>
      //   <h2 style={myStyle}>现在是{this.state.date.toLocaleTimeString()}</h2>
      //   <ErrorBoundary>
      //     {/* <Profile user={this.state.user}/> */}
      //     <button onClick={() => this.onClick()}>12</button>
      //   </ErrorBoundary>
      <Home/>
        // <HashRouter>
        //   <Switch>
        //     <Route path="/" component={Home}/>
        //     <Route path="/repos" component={MyWithpersistentData}/>
        //     <Route path="/about" component={UserListContainer}/>
        //     {/* <Route path="/about" component={UserListContainer}/> */}
        //     {/* <Route path="/PostList" component={PostList}/> */}
        //   </Switch>
        // </HashRouter> 
      // </div>
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
