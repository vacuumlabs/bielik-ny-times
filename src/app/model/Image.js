// formats image of article response
export const parseArticleImage = imageResponse => ({
  width: imageResponse.width,
  height: imageResponse.height,
  url: imageResponse.url,
})
