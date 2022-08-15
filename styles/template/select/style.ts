import styled from 'styled-components';

const Select = styled.select`
	width: 100%;
	height: 60px;
	border-radius: 10px;
	background: #efefff;
	box-shadow: inset 0px -4px 4px rgba(255, 255, 255, 0.58),
		inset 0px 4px 4px rgba(0, 0, 0, 0.12);
	border-radius: 10px;

	font-size: 100%;
	cursor: pointer;
	border: none;
	color: ${({ theme }) => theme.colors.secondary.dark};
	padding-left: 20px;
	appearance: none;
`;

export { Select };
