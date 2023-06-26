import dataList from "../../data/cars.json"
import { toLower } from "../../helpers/toLower"
import { useList2 } from "../../hooks/useList2"
import { styles } from "../../styles"
import { ContainerList } from "../ContaineList"

const makers = ["BMW", "GMC", "Volvo"]

const Container = ({ children }) => (
	<div style={styles.container}>{children}</div>
)

export const CarList = () => {
	const { cars, selectValue, changeSelect } = useList2(dataList)

	return (
		<Container>
			<select value={selectValue} onChange={changeSelect}>
				<option value="all">TODOS</option>
				{makers.map(maker => (
					<option value={maker}>{maker}</option>
				))}
			</select>
			{!cars.length ? (
				<div id="loading">Loading...</div>
			) : (
				<ContainerList>
					<h2>FILTER</h2>
					{cars.map(car => (
						<div key={car.id}>
							{toLower(car.model)} - {car.maker}
						</div>
					))}
				</ContainerList>
			)}
		</Container>
	)
}
