import { IImage } from '../interfaces';
import { Company, Container, Title } from './style';

interface Props {
	companyImages: IImage[];
}

const CompanyHealth: React.FC<Props> = ({ companyImages }: Props) => (
	<>
		<Title>Convênios</Title>
		<Container>
			{companyImages.map((image, key) => (
				<Company
					key={key}
					src={image.src}
					alt={image.title}
					width={300}
					height={100}
				/>
			))}
		</Container>
	</>
);

export default CompanyHealth;
