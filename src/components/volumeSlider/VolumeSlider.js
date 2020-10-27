import React from 'react'
import PropTypes from 'prop-types';

import { VolumeSlider as Slider} from './styles';

const VolumeSlider = ({onChange}) => {
  return (
    <>
      <Slider 
        defaultValue={0.3}
        aria-labelledby="discrete-slider-small-steps"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.1}
        max={1}
        onChangeCommitted={value => onChange(value)}
      />
    </>
  )
}

VolumeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default VolumeSlider;