import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardItem } from "./CardItem";
import { Flex } from "./styled/Flex";

const URL = "https://api.disneyapi.dev/character";
// const URL = 'https://api.disneyapi.dev/character?name=Mickey Mouse'

export function CardList() {
	// const [ loadingData, setLoadingData ] = useState(false)
	const { moviesData, error, isLoading } = useFetch(URL);

	console.log("printData", moviesData);
	let moviesData2;

	if (moviesData.length === 0) {
		return;
	} else {
		moviesData2 = [...moviesData.data];
		console.log("moviesData", moviesData2);
	}

	return (
		<Flex>
			{moviesData2 &&
				moviesData2.map((item) => {
					return <CardItem item={item} key={item.id} />;
				})}
		</Flex>
	);
}

{
	/* <div style={{ minHeight: "60vh", width: "100vw" }}></div> */
}
