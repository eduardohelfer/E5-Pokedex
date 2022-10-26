import React from 'react'
import './styles/header.css'

const Footer = () => {
  return (
    <header className='header'>

      <div className='header__red'>
        <div className='header__container'>
          <img className='pokedex__img' src="../../../images/home/pokedex.png" alt="Pokedex head title" />
          <div className='header__circle'>
            <div className='header__circle-int'></div>
          </div>
        </div>
        <div className='header__black'>
        </div>
      </div>


    </header>
  )
}

export default Footer