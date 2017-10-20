import React, {Component} from 'react'

export default class CreatePost extends Component {

  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input className="form-control" type="text" id="author" name="authorName" />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" id="title" name="blogTitle" />

        </div>
        <div className="form-group">
          <label htmlFor="entry">Type your blog</label>
          <textarea className="form-control" id="entry" name="blogEntry" />

        </div>
        <button className="btn btn-primary" type="submit">Post</button>
      </form>
    )
  }
}
