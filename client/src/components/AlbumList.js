import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/AlbumList.css'

class AlbumList extends Component {
  render() {
    return (
      <div>
        <h1>My Photo Albums</h1>
        {this.props.albums.map(album => (
          <Link key={'albumlistview' + album.albumId} to={'/album/' + album.albumId}>
            <img className="little" alt={album.albumName} src={album.cover} />
            <p>{album.albumName}</p>
          </Link>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(AlbumList)