import React, {Component} from 'react'

import {Link} from 'react-router-dom'

export default class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/"
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({posts: json}))
  }

  render() {
    let blogs = this.state.posts.map(post => {
      return (
        <div key={post._id}>
          <Link to={`/show/${post._id}`}>{post.title}</Link>
        </div>

      )
    })
    return(
      <div>
        {blogs}
      </div>
    )
  }
}
