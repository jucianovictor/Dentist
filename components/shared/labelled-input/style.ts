import styled from 'styled-components';
import BaseInput from '../../../styles/template/input/style';

const LabbeledBaseInput = styled(BaseInput)`
	margin-top: 5px;
	color: ${props => props.theme.colors.primary.default};
`;

const TextInput = styled(LabbeledBaseInput).attrs({
	type: 'text',
})``;

const PasswordInput = styled(LabbeledBaseInput).attrs({
	type: 'password',
})``;

const EmailInput = styled(LabbeledBaseInput).attrs({
	type: 'email',
})``;

const Label = styled.label`
	color: ${props => props.theme.colors.primary.dark};
	margin-left: 5px;
	font-weight: bold;
`;

export { Label, TextInput, EmailInput, PasswordInput };
