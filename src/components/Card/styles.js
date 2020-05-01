import styled from 'styled-components/native';

import {baseColors} from '../../colors/baseColors';

export const Card = styled.View`
  width: 90%;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: ${baseColors.white};
  box-shadow: 1px 1px 5px ${baseColors.neutral500};
`;
