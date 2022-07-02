import Image from 'next/image';
import styled from 'styled-components';

const Title = styled.h2`
	grid-column: 2;
	align-self: self-end;
	color: ${({ theme }) => theme.colors.secondary.light};
	font-weight: 700;
	font-size: 50px;
	line-height: 60px;
`;

const Form = styled.form`
	width: 810px;
	height: min-content;
	display: grid;
	grid-row: 2/3;
	grid-column: 2;
	column-gap: 30px;
	row-gap: 15px;
	align-content: center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, min-content);

	select:nth-child(n) {
		grid-column: 1/3;
		grid-row: 3;
	}

	div:nth-child(n) {
		grid-column: 1;
		grid-row: 4;
	}
`;

const DoctorImage = styled(Image)``;

const DoctorPicture = styled.picture`
	display: block;
	position: relative;
	grid-row: 1/3;
	width: 100%;
	height: 875px;
`;

const Container = styled.section`
	display: grid;
	height: min-content;
	column-gap: 50px;
	row-gap: 70px;
	grid-template-columns: 690px 810px;
	grid-template-rows: repeat(3, min-content);
	place-self: center;
	text-align: center;
	margin: 60px 0;
	padding: 0 50px;
`;

export { Title, Container, DoctorPicture, DoctorImage, Form };
