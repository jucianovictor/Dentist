import { DefaultTheme } from 'styled-components';
import Span from '../../../styles/template/span/span';
import Icon, { AvailableIcons } from '../../shared/icon';
import {
	CategoryContainer,
	CategoryTitle,
	FooterContainer,
	FooterContent,
	Link,
	Links,
	LogoTipo,
} from './style';

interface Props {
	theme: DefaultTheme;
}

const Footer: React.FC<Props> = ({ theme }: Props) => {
	const linksByCategory = [
		{
			title: 'Tratamentos',
			links: [
				{
					title: 'Check-up',
					href: '#',
				},
				{
					title: 'Exodontias',
					href: '#',
				},
				{
					title: 'Clareamento',
					href: '#',
				},
				{
					title: 'Aparelho Dentário',
					href: '#',
				},
			],
		},
		{
			title: 'Navegue',
			links: [
				{
					title: 'Sobre mim',
					href: '#',
				},
				{
					title: 'Tratamentos',
					href: '#',
				},
				{
					title: 'Clínica',
					href: '#',
				},
				{
					title: 'Atendimento',
					href: '#',
				},
			],
		},
	];

	const socialNetworks: AvailableIcons[] = [
		'facebook',
		'instagram',
		'linkedin',
	];

	const phoneNumber = '(11) 99999-9999';
	const address = `
		Rua Manoel Gomes de Souza
		(14-A), 307 W, Jardim Acácia
		Tangará da Serra, MT
		CEP: 78300-035.
	`;

	return (
		<FooterContainer id="footer">
			<FooterContent>
				<CategoryContainer>
					<LogoTipo>
						<Span color={theme.colors.primary.default}>Aline</Span>
						<Span color={theme.colors.secondary.dark}> Rossi</Span>
					</LogoTipo>
					<Links>
						<Link
							withIcons={true}
							href="https://api.whatsapp.com/send?phone=55859999999999"
							target="_blank"
						>
							<Icon icon="phone" color={theme.colors.secondary.light} />
							{phoneNumber}
						</Link>
						<Link
							href="https://goo.gl/maps/ZNzQF8GcAarT5WXG7"
							target="_blank"
							withIcons={true}
						>
							<Icon
								icon="location"
								style="solid"
								color={theme.colors.secondary.light}
							/>
							{address}
						</Link>
					</Links>
				</CategoryContainer>
				{linksByCategory.map(({ title, links }, key) => (
					<CategoryContainer key={key}>
						<CategoryTitle>{title}</CategoryTitle>
						<Links>
							{links.map(({ title, href }, key) => (
								<Link key={key} href={href}>
									{title}
								</Link>
							))}
						</Links>
					</CategoryContainer>
				))}
				<CategoryContainer>
					<CategoryTitle>Redes Sociais</CategoryTitle>
					<Links onlyIcons={true}>
						{socialNetworks.map((network, key) => (
							<Link key={key} href={`https://www.${network}.com`}>
								<Icon
									key={key}
									icon={network}
									width={30}
									height={30}
									sizeMultiplier={1.2}
									color={theme.colors.secondary.light}
								/>
							</Link>
						))}
					</Links>
				</CategoryContainer>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
