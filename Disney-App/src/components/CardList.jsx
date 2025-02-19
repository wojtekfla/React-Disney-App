import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { createPortal } from 'react-dom'

import { CardItem } from "./CardItem";
import { Flex } from "./styled/Flex";
import { PaginationOutlined } from "./Pagination";


const URL = "https://api.disneyapi.dev/character";

export function CardList() {
	const [ page, setPage ] = useState(1)
	const { moviesData, error, isLoading = true } = useFetch(`${URL}?page=${page}`);


	const handlePageChange = (p) => {
		setPage(p)
	};

	const totalPages = moviesData.info ? moviesData.info.totalPages : 0

	return (
		<>
		{error && <p>{error.message}</p>}
			<Flex justify={"center"}>
				{isLoading ? (<p>Loading, please wait</p>) :
				 moviesData.data &&
					moviesData.data.map((item) => {
						return <CardItem item={item} key={item._id} />;
					})}
			</Flex>
			{!isLoading && <Flex justify={'center'}>
				<PaginationOutlined onPageChange={handlePageChange} count={totalPages} page={page} />
			</Flex>}
		</>
	);
}

