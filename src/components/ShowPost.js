import React, {Component} from 'react'

import {Link} from 'react-router-dom'

export default class ShowPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params
    const url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({post: json}))
  }

  render() {
    return (
      <div className="post">
        <h2>{this.state.post.title}</h2>
        <h5>By: {this.state.post.author}</h5>
        <p>{this.state.post.blogPost}</p>
        <Link to="/show" className="btn btn-primary">Back To Blog List</Link>
      </div>
    )
  }
}
