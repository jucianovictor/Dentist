import React from 'react';
import { useTheme } from 'styled-components';
import Span from '../../../styles/template/span/span';
import { HeaderContainer, Link, LogoTipo, Navigation } from './style';

const Header: React.FC = () => {
	const theme = useTheme();
	return (
		<HeaderContainer>
			<LogoTipo>
				<Span color={theme.colors.primary.default}>Aline</Span>
				<Span color={theme.colors.secondary.dark}> Rossi</Span>
			</LogoTipo>
			<Navigation>
				<Link href="#">Sobre mim</Link>
				<Link href="#treatments">Tratamentos</Link>
				<Link href="#">Clínica</Link>
				<Link href="#">Atendimento</Link>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;
