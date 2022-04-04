import { CardGif } from '../styles/GifGrid'
import { useFetchGif } from '../hooks/useFetchGif'
import GifGridItem from '../componets/GifGridItem'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category)

  return (
    <>
      <h2>{category}</h2>
      {loading && <p>Loading...</p>}
      <CardGif>
        {
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </CardGif>
    </>
  )
}

export default GifGrid
