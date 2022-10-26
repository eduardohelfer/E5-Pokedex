import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css'
import Header from '.././components/shared/Header'
import { setPagexGlobal } from './../store/slices/pagex.slice'
import { setTypexGlobal } from './../store/slices/typex.slice'


const Pokedex = () => {

  const dispatch = useDispatch()

  const [pokemons, setPokemons] = useState()



  // Types logic

  const typex = useSelector(state => state.typex)
  // const [typeSelected, setTypeSelected] = useState('All Pokemons')
  //  ////  ////// setTypeSelected(typex)
  const [typeSelected, setTypeSelected] = useState(typex)

  dispatch(setTypexGlobal(typeSelected))

  // Pagiination logic

  const pagex = useSelector(state => state.pagex)

  const [page, setPage] = useState(pagex)

  dispatch(setPagexGlobal(page))



  const [pokePerPage, setPokePerPage] = useState(8)


  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      // only if a type was selected
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      // only when choice is  for All Pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }

  }, [typeSelected])

  const userName = useSelector(state => state.userName)





  return (
    <div>
      <header className='pokedex__header'>
        <Header />
      </header>
      <span className='pokedex__welcome'>Welcome&nbsp;<span className='pokedex__name'>{userName}</span><span>, here you can find all your favorite pokemons.</span></span>
      <aside className='search-select__aside'>
        <InputSearch />
        <SelectByType
          setTypeSelected={setTypeSelected}
          setPage={setPage}
        />
      </aside>
      <aside className='pagination__aside'>
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </aside>

      <main>
        <div className='card-container'>
          {
            pokemons?.slice((page - 1) * pokePerPage, page * pokePerPage).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </main>
    </div >
  )
}

export default Pokedex