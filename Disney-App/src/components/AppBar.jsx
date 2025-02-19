import ControlledSwitch from "./ControlledSwitch";
import { Flex } from "./styled/Flex";

export function AppBar() {

	return (
		<Flex justify={"space-between"} width={'100%'}>
			<h2>Disney APP</h2>
			
			<ControlledSwitch title='theme'  />
		</Flex>
	);
}

// <div style={{height: "50px", width: "100vw", alignContent: "center"}}>AppBar</div>
