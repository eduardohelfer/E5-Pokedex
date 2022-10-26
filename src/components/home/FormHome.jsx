import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form onSubmit={submit} className='pokedex__form'>
      <input
        className='pokedex__input'
        type="text"
        placeholder={`Your Name`}
      />
      <button className='pokedex__btn'>Let's get started!</button>
    </form>
  )
}

export default FormHome