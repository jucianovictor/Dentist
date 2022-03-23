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
  background-color: ${props => props.themeColor.value || props.theme.colors.primary.value};
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.themeColor.value || props.theme.colors.primary.value};

  &:hover {
    border: ${props => `solid 2px ${props.themeColor.value || props.theme.colors.primary.value}` || 'none'};
  }
`;

const ButtonOutlineEffect = styled(Button)`
  background-color: transparent;
  color: ${props => props.themeColor.value || props.theme.colors.primary.value};
  border: ${props => `solid 2px ${props.themeColor.value || props.theme.colors.primary.value}` || 'none'};

  &:hover {
    color: ${props => props.themeColor.contrast || props.theme.colors.primary.contrast};
    background-color: ${props => props.themeColor.value || props.theme.colors.primary.value};
  }
`;

export {
  Button,
  SecondaryButton,
  ButtonOutlineEffect,
};
