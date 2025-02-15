import { Button } from "./Button";
import { StyledCard, Image } from "./styled/StyledCard";

export function CardItem({ item }) {
	const { name, imageUrl } = item;

	return (
		<StyledCard>
			<div>
				<Image src={imageUrl} />
			</div>
			<div>{name}</div>
			<Button>Show more</Button>
		</StyledCard>
	);
}
