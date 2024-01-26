import { Button } from '@mui/material';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const ButtonComponent = ({
  type,
  button_text,
  variant,
  styles,
  onClick,
}) => {
  return (
    <Button
      sx={{ borderRadius: '32px' }}
      type={type}
      variant={variant}
      className={cx(styles)}
      onClick={onClick}
    >
      {button_text}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  button_text: PropTypes.string,
  variant: PropTypes.string,
  styles: PropTypes.string,
  onClick: PropTypes.func,
};
