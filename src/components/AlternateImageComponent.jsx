import { ImageContainer } from './ImageContainer.jsx'
import PropTypes from 'prop-types'

const AlternateImageComponent = ({
  imageUrl,
  imageAlt,
  paragraph,
  imageOrder,
}) => {
  const imageStyles = `w-full max-w-full h-auto object-cover rounded-xl order-1 md:order-${
    imageOrder === 1 ? 2 : 1
  }`

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 items-center">
      <p className={`order-2 text-lg tracking-wider`}>{paragraph}</p>

      <ImageContainer src={imageUrl} alt={imageAlt} styles={imageStyles} />
    </div>
  )
}

AlternateImageComponent.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  paragraph: PropTypes.string,
  imageOrder: PropTypes.number,
}

export default AlternateImageComponent