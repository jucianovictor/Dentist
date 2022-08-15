import { DefaultTheme } from 'styled-components';
import BaseRectangleInput from '../../../styles/template/base-rectangle-input/style';
import { Select } from '../../../styles/template/select/style';
import Span from '../../../styles/template/span/span';
import Button from '../../shared/button';
import DatePicker from '../../shared/date-picker';
import { Container, DoctorImage, DoctorPicture, Form, Title } from './style';

interface Props {
	theme: DefaultTheme;
}

const MedicalApointment: React.FC<Props> = ({ theme }: Props) => {
	return (
		<>
			<Container>
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
					<BaseRectangleInput type="time" placeholder="Horário da Consulta" />
					<Select name="Tratamentos">
						<option>Selecione o tipo de consulta</option>
						<option>Selecione o tipo de consulta</option>
						<option>Selecione o tipo de consulta</option>
						<option>Selecione o tipo de consulta</option>
					</Select>
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
		</>
	);
};

export default MedicalApointment;
