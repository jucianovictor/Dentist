import styled from 'styled-components';

const IconButtonBase = styled.div<{
  width: string;
  height: string;
}>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 5rem;
  border: none;
  cursor: pointer;
`;

const IconAccentButton = styled(IconButtonBase)`
  color: ${props => props.theme.colors.accent.contrast};
  background: linear-gradient(90deg, ${props => props.theme.colors.accent.default} 4.2%, ${props => props.theme.colors.accent.light} 91.6%);
  box-shadow: 0px 10px 50px 3px rgba(255, 6, 6, 0.25);
`;

export {
	IconButtonBase,
	IconAccentButton,
};
