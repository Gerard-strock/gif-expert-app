import { useState, useEffect } from 'react'
import { getGif } from '../helpers/getFetchGifs'

export const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGif(category)
      .then(img => {
        setState({
          data: img,
          loading: false
        })
      })
  }, [category])

  return state
}

// useEffect(() => {
//   getGif(category)
//     .then((images) => setImages(images))
// }, [category])
