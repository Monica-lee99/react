/*
 * @Author: your name
 * @Date: 2020-12-23 20:03:40
 * @LastEditTime: 2020-12-23 20:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\UserGust.js
 */
import React from 'react'
import axios from 'axios';

class Content extends React.Component {
  render() {
    return (
      <div><input onChange={this.props.updateValue} type="" name="" value={this.props.value}/></div>
    )
  }
}
class HelloMessage extends React.Component {
  constructor(props){
    super(props)
    this.state = {value :'hello world'}
  }
  updateValue (e) {
    this.setState({
      value:e.target.value
    })
    console.log(e.target.value)
  }
  render() {
    var value = this.state.value
    return (
      <Content updateValue={(e) => this.updateValue(e)} value={value}/>
    )
  }
}
class UserGist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {username: '', lastGistUrl: ''};
  }
  componentDidMount() {
    // var that = this
    let promise = axios.get(this.props.source);
    promise.then((result) =>
        {
          var lastGist = result.data[0];
          console.log(result)
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          })
        })
  }
  componentWillUnmount() {
    // this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
        <HelloMessage/>
      </div>
    );
  }
}
export default UserGist
 