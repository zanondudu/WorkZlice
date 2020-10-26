import React from 'react'
import PropTypes from 'prop-types';


import {Button as StyledButton} from './styles'

const Button = ({
  action,
  text
}) => {
  return (
    <StyledButton
      onClick={action}
    >
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button;
