import React, { Component } from 'react'
import Comment from '../Comment/Comment.js'
import PropTypes from 'prop-types'


export class Comments extends Component {
  static propTypes = {
    commentList: PropTypes.array
  }

  render() {
    return (
      <div>
        {
          this.props.commentList.map( (comment, i) => {
            return( 
              <Comment
                key={i}
                name={comment.user.name}
                commentText={comment.commentText}
              /> 
            )
          })
        }
      </div>
    )
  }
}

export default Comments
