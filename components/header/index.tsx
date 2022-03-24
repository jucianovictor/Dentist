import React from 'react';
import theme from '../../styles/theme';
import {
  HeaderContainer, Link, LogoTipo, Navigation,
} from './style';

interface ILink {
  label: string
  href: string
}

const links: ILink[] = [
  { label: 'Sobre mim', href: '#' },
  { label: 'Tratamentos', href: '#' },
  { label: 'Clínica', href: '#' },
  { label: 'Atendimento', href: '#' },
];

const Header: React.FC = () => (
  <>
    <HeaderContainer>
      <LogoTipo>
        <span style={{ color: theme.colors.primary.default }}>Aline</span>
        <span style={{ color: theme.colors.secondary.dark }} > Rossi </span>
      </LogoTipo>
      <Navigation>
        {links.map((link, key) => <Link key={key} href={link.href}>{link.label}</Link>)}
      </Navigation>
    </HeaderContainer>
  </>
);

export default Header;
