import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {getAlbums} from '../actions'

import AlbumList from './AlbumList'
import Album from './Album'
import Image from './Image'

class App extends Component {
  componentDidMount() {
    getAlbums()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={AlbumList} />
            <Route path="/album/:id" component={Album} />
            <Route path="/image/:id" component={Image} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
