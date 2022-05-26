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
	margin: 110px 0 110px 0;
	width: 100%;
	height: min-content;
	display: grid;
	grid-template-columns: 255px auto;
	place-items: center;
	justify-content: center;
	column-gap: 40px;
	padding: 0 50px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-template-columns: 1fr;
		row-gap: 40px;
	}
`;

const Pictures = styled.aside`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(191px, 348px));
	column-gap: 20px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		width: 334px;
		grid-template-columns: 1fr;
		row-gap: 30px;
	}
`;

const Picture = styled.picture`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		background-color: ${({ theme }) => theme.colors.primary.default}b5;
		border-radius: 20px;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 2;
		transition: opacity 0.6s ease-in-out;
	}

	&:after {
		content: '';
		position: absolute;
		background: ${({ theme }) => theme.colors.primary.contrast};
		width: 100%;
		height: 100%;
		transform: translate(0%, -100%);
		clip-path: polygon(
			36% 49%,
			49% 49%,
			49% 36%,
			51% 36%,
			51% 49%,
			65% 49%,
			65% 51%,
			51% 51%,
			51% 65%,
			49% 65%,
			49% 51%,
			36% 51%
		);
		z-index: 3;
		opacity: 0;
		transition: opacity 0.6s ease-in-out;
	}

	&:hover {
		&::before {
			opacity: 1;
		}

		&::after {
			opacity: 1;
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
