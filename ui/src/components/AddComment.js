import Title from './InputTitle'
import Content from './InputCotent'
import React from 'react'
import '../css/addComment.css'
import { Link } from 'react-router-dom'
 
class Post extends React.Component {
  render () {
    return (
      <div>
        <div className="title">
          <strong>Blogs</strong>
          <hr size="2px" width="100%" />
        </div>
        <div className="content-post">
          <Title updateTitle={this.props.updateTitle} />
          <Content updateContent={this.props.updateContent} />
          <div className="content-button">
            <button>
              <Link to="/" className="linkButton">
                返回
              </Link>
            </button>
            <div className="option">
              <button
                className="ok"
                disabled={!(this.props.data.title && this.props.data.content)}
                onClick={(e) => {
                  e.preventDefault()
                  this.props.handleSubmit(this.props.data)
                }}
              >
                完成
              </button>
              <button className="cancel">
                <Link to="/post" className="linkButton">
                  清空
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
