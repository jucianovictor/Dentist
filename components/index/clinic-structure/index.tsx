import React from 'react';
import { DefaultTheme } from 'styled-components';
import { IImage } from '../interfaces';
import {
	Article,
	ArticleSpanTitle,
	Container,
	Img,
	Picture,
	Pictures,
} from './style';

interface Props {
	theme: DefaultTheme;
	pictures: IImage[];
}

const ClinicStructure: React.FC<Props> = ({ theme, pictures }: Props) => (
	<Container>
		<Article>
			<ArticleSpanTitle color={theme.colors.secondary.default}>
				Estrutura <br />
			</ArticleSpanTitle>
			<ArticleSpanTitle color={theme.colors.primary.default}>
				da clínica
			</ArticleSpanTitle>
			<br />
			<br />
			is simply dummy text.is simply dummy text.
		</Article>
		<Pictures>
			{pictures?.map(({ src, title }, key) => (
				<Picture key={key}>
					<Img
						src={src}
						alt={title}
						width={324}
						height={324}
						layout={'responsive'}
					/>
				</Picture>
			))}
		</Pictures>
	</Container>
);

export default ClinicStructure;