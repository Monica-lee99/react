import './App.css';
import React from 'react'
const myStyle = {
  fontSize: 100,
  color: '#FF0000'
}; 
class App extends React.Component {
  constructor () {
    super()
    this.state = {date: new Date()}
  }
  render () {
    return (
      <div>
        <h1>hello,world!</h1>
        <h2 style={myStyle}>现在是{this.state.date.toLocaleTimeString()}</h2>
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
