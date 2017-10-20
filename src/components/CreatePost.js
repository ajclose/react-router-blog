import React, {Component} from 'react'

export default class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleEntryChange = this.handleEntryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      author: "",
      title: "",
      blogPost: ""
    }
  }

  handleNameChange(e) {
    this.setState({author: e.target.value})
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleEntryChange(e) {
    this.setState({blogPost: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      author: e.target.value,
      title: e.target.value,
      blogPost: e.target.value
    })
    let blog = JSON.stringify(this.state)
    console.log(blog);
    const url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/"
    fetch(url, {
      method: 'POST',
      body: blog,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response, "success!");
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err, "failure!");
    })
    this.setState({
      author: "",
      title: "",
      blogPost: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input className="form-control" type="text" id="author" name="author" placeholder="Enter your name" value={this.state.author} onChange={this.handleNameChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text" id="title" name="title" placeholder="Enter the title" value={this.state.title} onChange={this.handleTitleChange}/>

        </div>
        <div className="form-group">
          <label htmlFor="entry">Type your blog</label>
          <textarea className="form-control" id="entry" name="blogPost" placeholder="Enter your content" value={this.state.blogPost} onChange={this.handleEntryChange}/>

        </div>
        <button className="btn btn-primary" type="submit">Post</button>
      </form>
    )
  }
}
