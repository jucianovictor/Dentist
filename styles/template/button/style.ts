import styled from 'styled-components';
import { Color } from '../../theme';

const ButtonBase = styled('button')`
  width: 100%;
  height: 40px;
  font-weight: 600;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
`;

const Button = styled(ButtonBase)<{ themeColor: Color }>`
  color: ${props => props.themeColor.contrast || props.theme.colors.primary.contrast};
  background-color: ${props => props.themeColor.default || props.theme.colors.primary.default};
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.themeColor.default || props.theme.colors.primary.default};

  &:hover {
    border: ${props => `solid 2px ${props.themeColor.default || props.theme.colors.primary.default}` || 'none'};
  }
`;

const ButtonOutlineEffect = styled(Button)`
  background-color: transparent;
  color: ${props => props.themeColor.default || props.theme.colors.primary.default};
  border: ${props => `solid 2px ${props.themeColor.default || props.theme.colors.primary.default}` || 'none'};

  &:hover {
    color: ${props => props.themeColor.contrast || props.theme.colors.primary.contrast};
    background-color: ${props => props.themeColor.default || props.theme.colors.primary.default};
  }
`;

export {
  Button,
  SecondaryButton,
  ButtonOutlineEffect,
};
