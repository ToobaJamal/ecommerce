export const Rating = ({fullStars, emptyStars}) => {
  const fullStarsJSX = []
  const emptyStarsJSX = []
  for(let i = 0; i < fullStars; i++) {
    fullStarsJSX.push(<i key={i} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>)
  }
  for(let i = 0; i < emptyStars; i++) {
    emptyStarsJSX.push(<i key={i} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)
  }
  return (
    <div className="flex items-center my-2">
        {fullStarsJSX}
        {emptyStarsJSX}
    </div>
  )
}
