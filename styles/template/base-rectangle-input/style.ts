import styled from 'styled-components';
import BaseInput from '../input/style';

const BaseRectangleInput = styled(BaseInput)`
	width: 100%;
	height: 60px;
	border-radius: 10px;
	text-align: start;

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.primary.default};
	}
`;

export default BaseRectangleInput;
