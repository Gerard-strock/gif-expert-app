import { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Kurt Cobain'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <button>Agregar</button>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
