import Image from 'next/image';
import styled from 'styled-components';
import Span from '../../../styles/template/span/span';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const ArticleSpanTitle = styled(Span)`
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
`;

const Container = styled.section`
	margin: 130px 0 160px 0;
	width: 100%;
	height: min-content;
	display: grid;
	grid-template-columns: 255px auto;
	place-items: center;
	justify-content: center;
	column-gap: 40px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-template-columns: 1fr;
		row-gap: 40px;
	}
`;

const Pictures = styled.aside`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(215px, 324px));
	column-gap: 20px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		width: 334px;
		grid-template-columns: 1fr;
		row-gap: 30px;
	}
`;

const Picture = styled.picture`
	position: relative;

	&:hover {
		&::before {
			content: '';
			position: absolute;
			background-color: ${({ theme }) => theme.colors.primary.default}b5;
			width: 100%;
			height: 100%;
			border-radius: 20px;
			z-index: 2;
		}

		&::after {
			content: '';
			position: absolute;
			background: ${({ theme }) => theme.colors.primary.contrast};
			width: 100%;
			height: 100%;
			transform: translate(0%, -100%);
			clip-path: polygon(
				30% 49%,
				49% 49%,
				49% 30%,
				51% 30%,
				51% 49%,
				70% 49%,
				70% 51%,
				51% 51%,
				51% 70%,
				49% 70%,
				49% 51%,
				30% 51%
			);
			z-index: 3;
		}
	}
`;

const Img = styled(Image)`
	border-radius: 20px;
`;

const Article = styled.article`
	width: 255px;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	color: ${props => props.theme.colors.secondary.dark};
`;

export { Container, Pictures, Picture, Img, Article, ArticleSpanTitle };
