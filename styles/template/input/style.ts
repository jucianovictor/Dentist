import styled from 'styled-components';

const BaseInput = styled.input`
  width: 100%;
  font-size: 18px;
  min-width: 140px;
  height: 40px;
  border-radius: 2rem;
  padding: 15px;
  border: 2px solid ${props => props.theme.colors.primary.default};
  color: ${props => props.theme.colors.primary.default};
  background-color: transparent;
  place-self: center;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${props => props.theme.colors.secondary.default};
  }
`;

export default BaseInput;
