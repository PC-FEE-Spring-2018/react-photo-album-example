import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAlbum} from '../actions'
import {Link} from 'react-router-dom'
import AlbumNav from './AlbumNav'

class Album extends Component {
  static defaultProps = {
    album: {
      images: []
    }
  }

  componentDidMount() {
    getAlbum(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.id !== newProps.match.params.id) {
      getAlbum(newProps.match.params.id)
    }
  }

  render() {
    return (
      <div>
        <AlbumNav />
        <h1>{this.props.album.albumName}</h1>
        {this.props.album.images.map(image => (
          <Link key={'albumimage' + image.id} to={`/image/${image.id}`}>
            <img className="little" src={image.imageURL} alt={image.imageName} />
            <p>{image.imageName}</p>
          </Link>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    album: state.currentAlbum
  }
}

export default connect(mapStateToProps)(Album)