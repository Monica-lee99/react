/*
 * @Author: your name
 * @Date: 2020-12-28 19:47:44
 * @LastEditTime: 2020-12-28 19:55:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\dist\error.js
 */
import React from 'react'
class ErrorBoundary extends React.Component{
  constructor(){
    super()
    this.state = {hasError:false}
  }
  render(){
    if(this.state.hasError){
      return (
        <h1>error</h1>
      )
    }
    return this.props.children
    
  }
  componentDidCatch(error,info){
    this.setState({hasError:true})
    console.log(error,info);
  }
}
export default ErrorBoundary