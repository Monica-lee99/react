/*
 * @Author: your name
 * @Date: 2020-12-23 20:57:32
 * @LastEditTime: 2020-12-23 22:08:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\src\PostList.js
 */
import React from 'react'
import PropTypes from 'prop-types'
class PostItem extends React.Component {
  render () {
    const {title, author, date, vote} = this.props.post
    return (
      <li>
        <div>
          {title}
        </div>
        <div>
          创建人：{author}
        </div>
        <div>
          创建时间：{date}
        </div>
        <button onClick={() => this.handClick()} type="">点赞</button>{vote}
      </li>
    )
  }
  handClick (id) {
    this.props.onVote(this.props.post.id)
  }
}
PostItem.propTypes = {
  post : PropTypes.shape({
    id : PropTypes.number,
    title : PropTypes.string,
    date : PropTypes.string,
    author : PropTypes.string,
    vote : PropTypes.number,
  })
}
class PostList extends React.Component {
  constructor () {
    super()
    this.state = {
      posts : []
    }
    this.timer = null
  }
  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({
        posts:[
          {id: 1,title: '大家一起讨论React', author: '张三',date: '2020/12/23', vote: 0},
          {id: 2,title: '大家一起讨论Vue', author: '李四',date: '2020/12/23', vote: 0},
          {id: 3,title: '大家一起讨论Angular', author: '王五',date: '2020/12/23', vote: 0}
        ]
      })
    }, 1000);
  }
  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  handleVote (id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item
      return newItem
    })
    this.setState({
      posts
    })
  }
  render () {
    return (
    <div>
      帖子列表：
      <ul>
        {this.state.posts.map((item, index) => <PostItem onVote = {(id) => this.handleVote(id)} key = {index} post = {item}/>)}
      </ul>
    </div>)
  }
}
export default PostList