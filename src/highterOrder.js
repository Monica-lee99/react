/*
 * @Author: your name
 * @Date: 2021-01-02 21:11:19
 * @LastEditTime: 2021-01-02 21:22:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\highterOrder.js
 */
import React from 'react'
function withpersistentData (ChildComponent) {
  return class extends React.Component {
    constructor(){
      super()
      this.state = {
        data:''
      }
    }
    componentDidMount(){
      let data = localStorage.getItem('data')
      this.setState({data})
    }
    render(){
      return (<ChildComponent data={this.state.data} {...this.props}/>)
    }
  }
}
class MyComponents extends React.Component {
  render(){
    return <div>
      {this.props.data}
    </div>
  }
}
const MyWithpersistentData = withpersistentData(MyComponents)
export default MyWithpersistentData