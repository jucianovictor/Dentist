import { DefaultTheme } from 'styled-components';
import BaseRectangleInput from '../../../styles/template/base-rectangle-input/style';
import Span from '../../../styles/template/span/span';
import Button from '../../shared/button';
import DatePicker from '../../shared/date-picker';
import Select from '../../shared/select';
import TimePicker from '../../shared/time-picker';
import { Container, DoctorImage, DoctorPicture, Form, Title } from './style';

interface Props {
	theme: DefaultTheme;
}

const MedicalApointment: React.FC<Props> = ({ theme }: Props) => {
	return (
		<Container id="medical-appointment">
			<Title>
				Marque sua <Span color={theme.colors.primary.default}>consulta</Span>
			</Title>
			<DoctorPicture>
				<DoctorImage
					src="/images/aline-form.png"
					alt="Doutora"
					layout="fill"
					objectFit="fill"
				/>
			</DoctorPicture>
			<Form>
				<BaseRectangleInput type="text" placeholder="Seu nome" />
				<BaseRectangleInput type="email" placeholder="Seu e-mail" />
				<DatePicker
					value={null}
					placeholder="Data da consulta"
					alt="Date picker"
				/>
				<TimePicker
					placeholder="Hora da consulta"
					value={null}
					minuteStep={15}
					alt="Time picker"
				/>
				<Select<{ id: number; description: string }>
					placeholder="Selecione o tipo de consulta"
					options={[
						{ id: 1, description: 'Consulta' },
						{ id: 2, description: 'Obturação' },
						{ id: 3, description: 'Clareamento' },
						{ id: 4, description: 'Extração' },
					]}
					getLabel={value => value?.description}
				/>
				<Button
					{...{
						width: '215px',
						text: 'Enviar',
						borderRadius: '10px',
						themeColor: theme.colors.accent,
					}}
				/>
			</Form>
		</Container>
	);
};

export default MedicalApointment;
