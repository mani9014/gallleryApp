// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, clickTabId} = props
  const {thumbnailUrl, thumbnailAltText, id} = galleryDetails

  const clickImage = () => {
    clickTabId(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={clickImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
