const initialState = {
  albums: [],
  currentAlbum: {
    id:null,
    albumName:null,
    images:[]
  },
  currentImage: {
    prev: {},
    curr: {},
    next: {}
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALBUMS':
      return {...state, albums: action.payload}
    case 'GET_ALBUM':
      return {...state, currentAlbum: action.payload}
    case 'GET_IMAGE':
      return {...state, currentImage: action.payload}
    default:
      return state
  }
}