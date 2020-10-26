import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import colors from '../../assets/colors';

export const Container = styled(Grid)`
  height: 100px;
  background-color: ${colors.gold};
  box-shadow: 8px 1px 6px rgba(0,0,0,0.16)
`;
