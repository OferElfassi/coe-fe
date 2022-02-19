import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom';

function CustomButton(props) {
  const {
    text,
    size,
    color,
    icon,
    disabled,
    variant,
    onClick,
    className,
    to,
    type,
    ...rest
  } = props;
  const navigate = useNavigate();

  const handleClick = e => {
    if (to) {
      navigate(to);
    }
    onClick(e);
  };
  if (!text || variant === 'icon') {
    return (
      <IconButton
        {...rest}
        size={size}
        disabled={disabled}
        className={className}
        onClick={handleClick}
        color={color}>
        {icon}
        {text || ''}
      </IconButton>
    );
  }
  return (
    <Button
      {...rest}
      className={className}
      disabled={disabled}
      variant={variant}
      startIcon={icon}
      color={color}
      type={type}
      size={size}
      onClick={handleClick}>
      {text}
    </Button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']),
};
CustomButton.defaultProps = {
  text: null,
  icon: null,
  to: null,
  disabled: false,
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  className: '',
  type: 'button',
  onClick: () => {},
};
export default CustomButton;
