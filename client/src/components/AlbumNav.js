import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AlbumNav extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.albums.map(album => (
            <li key={'leftnav' + album.albumId}><Link to={`/album/${album.albumId}`}>{album.albumName}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(AlbumNav)