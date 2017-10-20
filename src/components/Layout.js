import React, {Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Blog</NavLink>
          <div className="nav">
            <NavLink className="nav-item nav-link" to="/create">New Blog Post</NavLink>
            <NavLink className="nav-item nav-link" to="/show">Show All Posts</NavLink>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
