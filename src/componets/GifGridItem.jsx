import { Card, Image, Paragraph } from '../styles/GifGridItem'

const GifGridItem = ({ title, url }) => {
  return (
    <Card>
      <Image src={url} alt={title} />
      <Paragraph>{title}</Paragraph>
    </Card>
  )
}

export default GifGridItem
