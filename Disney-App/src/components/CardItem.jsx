import { Button } from "./Button";
import { StyledCard, Image } from "./styled/StyledCard";
import { createPortal } from "react-dom";

import { useContext, useState } from "react";
import { Modal } from "./modal/Modal";
import { ThemeContext } from "../context/ThemeContext";

export function CardItem({ item }) {
	const { currentTheme } = useContext(ThemeContext);
	const { name, imageUrl, _id:id } = item;
	const [isModalShown, setIsModalShown] = useState(false)

	const modal = createPortal(
		<Modal onClose={() => setIsModalShown(false)} item={item} $theme={currentTheme}/>,
		document.body
	)

	const handleItemClick = () => {
		setIsModalShown(true)
	}

	return (
		<>
		<StyledCard $theme={currentTheme}>
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
