import React, { Component } from 'react'
import Post from 'Post'
import data from 'data/data.json'

export class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState ({
      posts: data.posts
    });
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map( (post, i) => {
            return( 
              <Post 
                key={i}
                userName={post.user.name} 
                userAvatar={post.user.avatar}
                postImage={post.image}
                numberOfLikes={post.numberOfLikes}
                commentList={post.comments}
              /> 
            )
          })
        }
      </div>
    )
  }
}

export default Posts
