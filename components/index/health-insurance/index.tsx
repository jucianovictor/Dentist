import { IImage } from '../../shared/interface/image';
import { Company, Container, Title } from './style';

interface Props {
	companyImages: IImage[];
}

const CompanyHealth: React.FC<Props> = ({ companyImages }: Props) => (
	<>
		<Title>Convênios</Title>
		<Container id="health-insurance">
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
