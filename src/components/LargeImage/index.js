import './index.css'

const LargeImage = props => {
  const {galleryLargeDetails} = props
  const {imageUrl, imageAltText} = galleryLargeDetails

  return (
    <li className="list-container">
      <img src={imageUrl} alt={imageAltText} />
    </li>
  )
}
export default LargeImage
