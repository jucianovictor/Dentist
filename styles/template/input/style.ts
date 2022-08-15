import styled from 'styled-components';

const BaseInput = styled.input`
	all: unset;
	padding-left: 20px;
	background: #efefff;
	box-shadow: inset 0px -4px 4px rgba(255, 255, 255, 0.58),
		inset 0px 4px 4px rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	color: ${({ theme }) => theme.colors.secondary.dark};

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondary.dark};
		opacity: 1;
	}
`;

export default BaseInput;
