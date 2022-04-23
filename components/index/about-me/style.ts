import styled from 'styled-components';
import Span from '../../../styles/template/span/span';
import BREAKPOINTS from '../../../styles/utils/breakpoints';

const Container = styled.section`
	width: 100%;
	height: min-content;
	display: grid;
	place-items: center;
	grid-template-columns: minmax(421px, 650px) minmax(585px, 829px);
	justify-content: center;
	margin-bottom: 80px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-template-columns: minmax(min-content, 829px);
		grid-template-rows: 740px 1fr;
	}
`;

const Title = styled.h1`
	font-weight: 400;
	font-size: 22px;
	line-height: 75px;
	letter-spacing: 0.5em;
	transform: translate(0.5em, 0px);
	color: ${props => props.theme.colors.primary.default};
`;

const Article = styled.article`
	display: grid;
	width: 100%;
	height: 100%;
	place-content: center;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	color: ${props => props.theme.colors.secondary.dark};
	padding: 0 0 0 50px;

	@media (max-width: ${BREAKPOINTS.large}px) {
		grid-row: 2;
		place-content: start;
		padding: 0 50px;
	}
`;

const ArticleSpanTitle = styled(Span)`
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
`;

const SubTitle = styled.h2`
	font-weight: 700;
	font-size: 28px;
	line-height: 60px;
	color: ${props => props.theme.colors.secondary.default};
`;

const Aside = styled.aside`
	display: grid;
	width: 100%;
	height: 100%;
`;

export { Container, Title, Article, ArticleSpanTitle, SubTitle, Aside };
