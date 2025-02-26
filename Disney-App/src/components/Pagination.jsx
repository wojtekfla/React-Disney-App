import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { Flex } from "./styled/Flex";

export function PaginationOutlined({ onPageChange, count, page, isDarkTheme }) {
	const handleChange = (e, p) => {
		onPageChange(p);
	};

	const bgForDarkTheme = isDarkTheme ? "#e7eaeb" : ""

	return (
		<>
		<Flex justify='center' width='90vw'>
			<Stack spacing={2}>
				<Pagination
					count={count}
					variant="outlined"
					sx={{ backgroundColor: bgForDarkTheme }}
					onChange={handleChange}
					page={page}
				/>
			</Stack>
			</Flex>
		</>
	);
}
