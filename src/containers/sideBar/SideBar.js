import React from 'react';
import MusicPanel from '../musicPanel/MusicPanel';

import { Container, MusicPanelContainer } from './styles';

const Sidebar = () => {
  return (
    <Container item xs={2}>
      <MusicPanelContainer>
        <MusicPanel />
      </MusicPanelContainer>
    </Container>
  )
}

export default Sidebar;