import './Modal.css'
import React from 'react'

export function Modal({onClose, item}) {

  console.log('in modal', item)

  const { imageUrl, name, films, shortFilms, videoGames, tvShows } = item

  console.log('films', films)

  const stylesImg = {
    width: '220px',
    height: '220px',
    overflow: 'hidden',
    borderRadius: '50%'
  }

  // films, shortFilms, videoGames, tvShows
  return (
    <div className='modal'>
      <img src={imageUrl} style={stylesImg} />
      <div>{name}</div>
      <div>{films}</div>
      <div>{shortFilms}</div>
      <div>{videoGames}</div>
      <div>{tvShows}</div>

      <br/>
      <button onClick={onClose}>Zamknij</button>
    </div>

  )
}


