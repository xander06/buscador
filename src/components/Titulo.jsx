import React from 'react'

const Titulo = () => {
  return (
    <div>
        <div className='titulo'>
        <img className='logo'
          src={require(`../img2/logo.png`)}
          alt='Logo'
        />
        <h1>Buscador </h1><br />
      </div>
    </div>
  )
}

export default Titulo
