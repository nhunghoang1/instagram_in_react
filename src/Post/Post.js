import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Post.css'
import Comments from '../Comments/Comments.js'

export class Post extends Component {
  static propTypes = {
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
    postImage: PropTypes.string,
    postAction: PropTypes.string,
    numberOfLikes: PropTypes.number,
    commentList: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.state = {
      numberOfLikes: this.props.numberOfLikes,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return { numberOfLikes: prevState.numberOfLikes + 1 };
    });
  } 

  render() {
    return (
      <div className="container">
        <div className="post-header">
          <img className="avatar" src={this.props.userAvatar} /> 
          <div className="user-name">
          {this.props.userName}
          </div>
        </div>

        <div>
          <img src={this.props.postImage} />
        </div>

        <div className="action">
          {this.props.postAction}
        </div>

        <div className="number-of-likes">
          <button onClick={this.handleClick}>
            {this.state.numberOfLikes} Likes
          </button>
        </div>

        <div className="comments">
            <Comments commentList={this.props.commentList} />
        </div>
      </div>
    )
  }
}

export default Post

