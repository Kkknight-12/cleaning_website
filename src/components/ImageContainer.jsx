import cx from 'classnames'
import PropTypes from 'prop-types'

export const ImageContainer = ({ src, alt, styles }) => {
  return <img src={src} alt={alt} className={cx(styles)} />
}

ImageContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  styles: PropTypes.string,
}