import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getImage} from '../actions'
import {connect} from 'react-redux'

class Image extends Component {
  componentDidMount() {
    getImage(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      getImage(newProps.match.params.id)
    }
  }

  render() {
    return (
      <div>
        <Link to={'/album/' + this.props.curr.albumId}>
          Back to Album
        </Link>
        
        <div className="carousel">
          <div>
            <Link to={'/image/' + this.props.prev.id}><img className="little" src={this.props.prev.imageURL} /></Link>
          </div>
          <div>
            <p>{this.props.curr.imageName}</p>
            <img className="middle" src={this.props.curr.imageURL} alt={this.props.curr.imageName} />
          </div>
          <div>
            <Link to={'/image/' + this.props.next.id}><img className="little" src={this.props.next.imageURL} /></Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    prev: state.currentImage.prev,
    curr: state.currentImage.curr,
    next: state.currentImage.next
  }
}

export default connect(mapStateToProps)(Image)