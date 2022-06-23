import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.core.secondary};
`;

export const CreateAccount = styled('p')`
  font-size: 14px;
  color: ${(props) => props.theme.palette.core.primary};
`;
