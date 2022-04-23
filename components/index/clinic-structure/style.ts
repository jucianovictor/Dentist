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

export { Container, Pictures, Img, Article, ArticleSpanTitle };
