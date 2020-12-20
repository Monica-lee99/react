import React from 'react'
class HelloMessage extends React.Component {
  // constructor () {
  //   // super()
  // }
  render () {
    return (
      <h2>{this.props.name}</h2>
    )
  }
}
HelloMessage.defaultProps = {
  name: 'liguohao'
};
export default HelloMessage