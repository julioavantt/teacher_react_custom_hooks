import dataList from "../../data/cars.json"
import { toLower } from "../../helpers/toLower"
import { useList } from "../../hooks/useList"
import { styles } from "../../styles"
import { ContainerList } from "../ContaineList"

const Container = ({ children }) => (
	<div style={styles.container}>{children}</div>
)

export const CarList = () => {
	const { cars } = useList(dataList)

	return (
		<Container>
			{!cars.length ? (
				<div id="loading">Loading...</div>
			) : (
				<ContainerList>
					<h2>CHILDREN</h2>
					{cars.map(car => (
						<div key={car.id}>{toLower(car.model)}</div>
					))}
				</ContainerList>
			)}
		</Container>
	)
}
