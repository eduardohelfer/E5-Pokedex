import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexbyid/Pokemon404'
import Header from '.././components/shared/Header'
import './styles/pokedexById.css'

const PokedexById = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => {
        setPokemon(res.data)
        setHasError(false)
      })
      .catch(err => {
        navigate(`/pokedex/`)
        setHasError(true)
        console.log(err)

      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  } else {

    const handleReturn = () => {
      navigate(`/pokedex/`)
    }
    return (
      <article className='pokemon'>
        <header className='pokedex__header'>
          <Header />
        </header>

        <header className='pokemon__header'>

          <div className={`pokemon__header-frame bg-${pokemon?.types[0].type.name}`}>
            <div className='returnOverLogo' onClick={handleReturn}></div>
            <img
              className='pokemon__sprite'
              src={pokemon?.sprites.other['official-artwork'].front_default}
              alt=""
            />
          </div>
        </header>

        <section className='pokemon__number-name'>
          <h1 className='pokemon__number'>#{pokemon?.id}</h1>
          <div className='pokemon__return' onClick={handleReturn}>Return Pokedex</div>
          <h1 className={`pokemon__name letter-${pokemon?.types[0].type.name}`}>——&nbsp;&nbsp;&nbsp;{pokemon?.name}&nbsp;&nbsp;&nbsp;——</h1>
        </section>

        <section className='pokemon__weight-height'>
          <div className='pokemon__weight-container'>
            <h3 className='pokemon__weight-label'>Weight</h3>
            <div className={`pokemon__weight-number letter-${pokemon?.types[0].type.name}`}>{pokemon?.weight}</div>
          </div>
          <div className='pokemon__weight-container'>
            <h3 className='pokemon__weight-label'>Height</h3>
            <div className={`pokemon__weight-number letter-${pokemon?.types[0].type.name}`}>{pokemon?.height}</div>
          </div>
        </section>

        <section className='pokemon__type-skills'>
          <div className='pokemon__type-group'>

            <h2>Type</h2>
            <div className='pokemon__types-container'>
              {
                pokemon?.types.map(type => (
                  <div key={type.slot} className={`pokemon__type bg-${type.type.name}`}>{type.type.name}</div>
                ))
              }
            </div>
          </div>
          <div className='pokemon__type-group'>
            <h2>Skills</h2>
            <div className='pokemon__types-container'>
              {
                pokemon?.abilities.map(ability => (
                  <div key={ability.slot} className='pokemon__skill'>{ability.ability.name}</div>
                ))
              }
            </div>
          </div>
        </section>

        <section className='pokemon__stats'>
          <h1 className={`pokemon__stats-title letter-${pokemon?.types[0].type.name}`}>Stats</h1>
          <div className='pokemon__stats-container'>
            {
              pokemon?.stats.map(stat => (
                <div key={stat.stat.name} className='pokemon__stat'>
                  <div className='pokemon__stat-label'>{stat.stat.name}</div>
                  <div className={`pokemon__stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}/150</div>
                  <div className={`pokemon__stat-scale`}>
                    <div className='pokemon__stat-bar' style={{ width: `${(stat.base_stat / 150) * 100}%` }}></div>


                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <section className='pokemon__movements'>
          <h2 className='pokemon__movements-title'>Movements</h2>
          <div className='pokemon__movements-container'>
            {
              pokemon?.moves.map(move => (
                <div key={move.move.url} className='pokemon__movements-move'>
                  {move.move.name.toUpperCase()}
                </div>
              ))
            }
          </div>
        </section>

      </article >
    )
  }
}

export default PokedexById