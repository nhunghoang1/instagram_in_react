import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Comment extends Component {
  static propTypes = {
    name: PropTypes.string,
    commentText: PropTypes.string
  }

  render() {
    return (
      <div>
        <div className="name">
          {this.props.name}
        </div>
        <div className="comment-text">
          {this.props.commentText}
        </div>
      </div>
    )
  }
}

export default Comment
