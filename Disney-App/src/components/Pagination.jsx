import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

export function PaginationOutlined({ onPageChange, count, page }) {
	const handleChange = (e, p) => {
		onPageChange(p);
	};

	return (
		<>
			<Stack spacing={2}>
				<Pagination
					count={count}
					variant="outlined"
					color="primary"
					onChange={handleChange}
					page={page}
				/>
			</Stack>
		</>
	);
}

