import store from './store'
import axios from 'axios'

export function getAlbums() {
  axios.get('http://localhost:3001/albums?_embed=images').then(resp => {
    const albums = resp.data.map(album => {
      const theAlbum = {
        albumId: album.id,
        albumName: album.albumName,
        cover: album.images[0].imageURL
      }

      return theAlbum
    })

    store.dispatch({
      type: 'GET_ALBUMS',
      payload: albums
    })
  })
}

export function getAlbum(id) {
  axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
    store.dispatch({
      type: 'GET_ALBUM',
      payload: resp.data
    })
  })
}

export function getImage(id) {
  axios.get(`http://localhost:3001/images/${id}`).then(resp => {
    const currentImage = resp.data

    axios.get(`http://localhost:3001/albums/${currentImage.albumId}?_embed=images`).then(resp2 => {
      const albumImages = resp2.data.images

      const rep = {
        prev: albumImages.find((img, i, arr) => {
          return arr[i + 1] && arr[i + 1].id === currentImage.id
        }) || albumImages[albumImages.length - 1],
        curr: currentImage,
        next: albumImages.find((img, i, arr) => {
          return arr[i - 1] && arr[i - 1].id === currentImage.id
        }) || albumImages[0]
      }

      store.dispatch({
        type: 'GET_IMAGE',
        payload: rep
      })
    })
  })
}

