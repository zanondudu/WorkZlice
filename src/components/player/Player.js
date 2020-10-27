import React from 'react'
import ReactPlayer from "react-player";
import PropTypes from 'prop-types';

import {Container} from './styles'

const Player = ({
  play,
  volume,
  music,
  changeMusic,
}) => {
  return (
    <Container>
      <ReactPlayer
        url={music}
        controls
        volume={volume}
        playing={play}
        height={0}
        onEnded={changeMusic}
      />
    </Container>
  )
}

Player.propTypes = {
  play: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  music: PropTypes.string.isRequired
}

export default Player; 
