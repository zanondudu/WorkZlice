import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import colors from '../../assets/colors';

export const Container = styled(Grid)`
  height: 100vh;
  background-color: ${colors.gold};
  box-shadow: 3px 1px 6px rgba(0,0,0,0.16);
  padding: 30px;
`;

export const MusicPanelContainer = styled.div`
  position: relative;
  bottom: 0;
`;
