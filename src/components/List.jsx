import { toLower } from "../../helpers/toLower"
import { ContainerList } from "../ContaineList"

export const List = ({ cars }) => (
	<ContainerList>
		<h2>CUSTOM HOOKS</h2>
		{cars.map(car => (
			<div key={car.id}>{toLower(car.model)}</div>
		))}
	</ContainerList>
)
