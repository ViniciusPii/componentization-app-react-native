import styled from 'styled-components/native';

export const Card = styled.View`
  width: ${({width}) => width}%;
  height: ${({height}) => height}px;
  padding: 15px;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  border-radius: 8px;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
  box-shadow: 1px 1px 5px ${({theme, shadow}) => theme[shadow]};
`;
