import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/images/home/pokedex.png" alt="Pokedex head title" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hello, fellow trainer!</h2>
        <p className='pokedex__invitation'>Write your name here so you can get right into Pokedex</p>
      </header>

      <FormHome />
    </article>

  )
}

export default Home