import { useState } from 'react'
import PropTipes from 'prop-types'
import { Input } from '../styles/AddCategorys'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Agregar Categoria'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.PropTipes = {
  setCategories: PropTipes.func.isRequired
}

export default AddCategory
