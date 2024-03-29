import { DefaultTheme } from 'styled-components';
import Span from '../../../styles/template/span/span';
import { adjustLightness } from '../../../styles/utils/color-functions';
import Icon from '../../shared/icon';
import {
	Container,
	H2,
	IconContainer,
	InfoCardContainer,
	InfoCardContent,
	InfoCardsContainer,
	Label,
	ScheduleContainer,
	Timetable,
} from './style';

interface Props {
	theme: DefaultTheme;
}

interface ScheduleProps {
	label: string;
}

const Schedule: React.FC<ScheduleProps> = ({ label }: ScheduleProps) => (
	<ScheduleContainer>
		<Label>{label}</Label>
		<Timetable>
			<div>Horário:</div>
			<div>8h</div>
		</Timetable>
	</ScheduleContainer>
);

const Schedules: React.FC<Props> = ({ theme }: Props) => (
	<Container id="schedules">
		<Schedule label="Segunda, Terça e Quarta" />
		<Schedule label="Quinta e Sexta" />
		<Schedule label="Finais de Semana" />
		<InfoCardsContainer>
			<InfoCardContainer>
				<IconContainer placeSelf="start">
					<Icon icon="clock" color={theme.colors.primary.default} />
				</IconContainer>
				<H2 color={theme.colors.primary.default}>
					<Span color={theme.colors.secondary.light}>Horário de </Span>
					<span>Atendimento</span>
				</H2>
				<InfoCardContent color={theme.colors.secondary.dark} alignSelf="center">
					is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has.
				</InfoCardContent>
			</InfoCardContainer>
			<InfoCardContainer
				bgColor={theme.colors.primary.default}
				color={theme.colors.primary.contrast}
			>
				<IconContainer
					bgColor={adjustLightness(theme.colors.primary.default, 16)}
				>
					<Icon icon="location" color="#fff" />
				</IconContainer>
				<H2 color={theme.colors.primary.contrast}>Localização</H2>
				<InfoCardContent color={theme.colors.primary.contrast}>
					Rua Manoel Gomes de Souza (14-A), 307 W, Jardim Acácia - Tangará da
					Serra/MT - CEP: 78300-035
				</InfoCardContent>
			</InfoCardContainer>
		</InfoCardsContainer>
	</Container>
);

export default Schedules;
