
export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=HjKmIFSujWmiLSJbAqBRt3XmgpzgJx07`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map((img) => {
    return {
      img: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs
}
