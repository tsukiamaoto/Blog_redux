import React from 'react'
import Title from './InputTitle'
import Content from './InputCotent'
import { Link } from 'react-router-dom'
import '../css/addComment.css'
class Edit extends React.Component {
  componentDidMount () {
    this.props.searchPost(this.props.match.params.id)
  }
  render () {
    if (!this.props.isFetched) {
      return <span>Loading...</span>
    } else if (this.props.error) {
      return <span>Error:{this.props.error}</span>
    } else {
      return (
        <div>
          <div className="title">
            <strong>Blogs</strong>
            <hr size="2px" width="100%" />
          </div>
          <div className="content-post">
            <Title
              updateTitle={this.props.updateTitle}
              currentTitle={this.props.data.title}
            />
            <Content
              updateContent={this.props.updateContent}
              currentContent={this.props.data.content}
            />
            <div className="content-button">
              <button>
                <Link
                  to={`/article/${this.props.data.id}`}
                  className="linkButton"
                >
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
                <button
                  className="cancel"
                  onClick={(e) => {
                    e.preventDefault()
                    this.props.handleClear()
                  }}
                >
                  清空
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Edit
