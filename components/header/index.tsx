import React from 'react';
import Span from '../../styles/template/shared/style';
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
				<Span color={theme.colors.primary.default}>Aline</Span>
				<Span color={theme.colors.secondary.dark}> Rossi</Span>
			</LogoTipo>
			<Navigation>
				{links.map((link, key) => <Link key={key} href={link.href}>{link.label}</Link>)}
			</Navigation>
		</HeaderContainer>
	</>
);

export default Header;
