import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/searchByType.css'
import { setTypexGlobal } from './../../store/slices/typex.slice'
import { useDispatch, useSelector } from 'react-redux'

const SelectByType = ({ setTypeSelected, setPage }) => {

  const sel = document.getElementById('selected')

  const dispatch = useDispatch()

  const typex = useSelector(state => state.typex)

  const [types, setTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => {
        setTypes(res.data.results)
        setTypeSelected(typex)
      })
      .catch(err => console.log(err))

  }, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
    dispatch(setTypexGlobal(e.target.value))
    setPage(1)
  }

  return (
    <select className='type__select' id='selected' onChange={handleChange}>
      <option className='type__option' value='All Pokemons'>All Pokemons</option>
      {
        types?.map(type => (
          <option className='type__option' key={type.url} value={type.url} selected={type.url == typex ? true : false}> {type.name}</option>
        ))
      }
    </select >
  )
}

export default SelectByType