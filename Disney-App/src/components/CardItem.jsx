import { Button } from "./Button";
import { StyledCard, Image } from "./styled/StyledCard";
import { createPortal } from "react-dom";

import { Modal } from "./modal/Modal";
import { useState } from "react";

export function CardItem({ item }) {
	const { name, imageUrl, _id:id } = item;
	const [isModalShown, setIsModalShown] = useState(false)

	const modal = createPortal(
		<Modal onClose={() => setIsModalShown(false)} item={item}/>,
		document.body
	)

	const handleItemClick = (id) => {
		console.log('item id', id)
		setIsModalShown(true)
		console.log(item)
	}

	// console.log('item', item)

	return (
		<>
		<StyledCard>
			<div>
				<Image src={imageUrl} />
			</div>
			<div>{name}</div>
			<Button onClick={() => handleItemClick(id)}>Show more</Button>
		</StyledCard>
		{isModalShown && modal}
		</>
	);
}
