import { Typography } from "@mui/material";
import { Flex } from "./styled/Flex";
import ControlledSwitch from "./ControlledSwitch";

export function AppBar() {

	return (
		<Flex justify="space-between" width='100%'>
			<Typography variant="button" sx={{ fontSize: '30px'}} >
        Disney App
      </Typography>
			<ControlledSwitch title='theme'  />
		</Flex>
	);
}


