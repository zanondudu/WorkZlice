import styled from 'styled-components';
import { Button as button} from '@material-ui/core';
import colors from '../../assets/colors';

export const Button = styled(button)`
  width: 100%;
  background-color: ${colors.tomato} !important;
  box-shadow: 0px 5px 4px rgba(0,0,0,0.16);
  color: ${colors.white} !important;
`
