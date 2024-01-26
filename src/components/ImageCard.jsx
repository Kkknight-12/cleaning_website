import { Stack } from '@mui/material';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { ImageContainer } from './ImageContainer.jsx';

export const ImageCard = ({
  heading,
  paragraph,
  image_path,
  image_alt,
  styles,
}) => {
  return (
    <Stack spacing={2} className={cx(styles)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Stack spacing={2}>
          <p className='text-2xl font-semibold'>
            <span>{heading}</span>
          </p>
          <div className='max-w-[300px] md:max-w-full !mx-auto'>
            <ImageContainer
              src={image_path}
              alt={image_alt}
              styles='object-contain rounded-2xl overflow-hidden max-h-[300px]'
            />
          </div>
          <p className='text-lg font-semibold'>{paragraph}</p>
        </Stack>
      </div>
    </Stack>
  );
};

ImageCard.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  image_path: PropTypes.string,
  image_alt: PropTypes.string,
  styles: PropTypes.string,
};
