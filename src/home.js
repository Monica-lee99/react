/*
 * @Author: your name
 * @Date: 2021-01-03 14:39:34
 * @LastEditTime: 2021-01-03 14:53:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\home.js
 */
import React from 'react'
import { Route } from 'react-router'
import PostList from './PostList'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:''
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  render() {
    const {match, location} = this.props
    console.log(match,location)
    const {userName} = this.state
    return (
      <div>
        <header userName={userName} onLogOut={this.handleLogout} location={location}>
  
        </header>
        <Route path={match.url} exact render={props => <PostList userName={userName} {...props} />}>
        </Route>
        {/* <Route path={`${match.url}/:id`} render={props => <Post userName={userName} {...props} />}>
        </Route> */}
      </div>
    )
  }
  handleLogout() {

  }
}
export default Home