import { CardGif } from '../styles/GifGrid'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from '../componets/GifGridItem'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category)

  return (
    <CardGif>
      <h2>{category}</h2>
      {loading && <p>Loading...</p>}
      {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
    </CardGif>
  )
}

export default GifGrid
