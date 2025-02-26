import { useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { ThemeContext } from "../context/ThemeContext";

import { CardItem } from "./CardItem";
import { PaginationOutlined } from "./Pagination";
import { Flex } from "./styled/Flex";
import { Typography } from "@mui/material";

const URL = "https://api.disneyapi.dev/character";

export function CardList() {
	const { isDarkTheme, currentTheme } = useContext(ThemeContext);
	const [page, setPage] = useState(1);
	const {
		moviesData,
		error,
		isLoading = true,
	} = useFetch(`${URL}?page=${page}`);

	const handlePageChange = (p) => {
		setPage(p);
	};

	const totalPages = moviesData.info ? moviesData.info.totalPages : 0;

	if (isLoading) {
		return (
			<Typography variant="h4" align="center" color="warning">
				Loading data, please wait
			</Typography>
		);
	}

	if (error) {
		console.log('error', error)
		return (
			<Typography variant="h4" align="center" color="error" >
				Error: {error}
			</Typography>
		);
	}

	return (
		<>
			<Flex justify="center">
				{moviesData.data &&
					moviesData.data.map((item) => {
						return (
							<CardItem $theme={currentTheme} item={item} key={item._id} />
						);
					})}
			</Flex>

			<Flex justify='center'>
				<PaginationOutlined
					isDarkTheme={isDarkTheme}
					onPageChange={handlePageChange}
					count={totalPages}
					page={page}
				/>
			</Flex>
		</>
	);
}

