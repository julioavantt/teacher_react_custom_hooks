import { useList } from "../../hooks/useList"
import dataList from "../../data/cars.json"
import { Loading, List } from "../index"
import { styles } from "../../styles"

const makers = ["BMW", "GMC", "Volvo"]

export const CarList = () => {
	const { cars, selectValue, changeSelect } = useList(dataList)

	return (
		<div style={styles.container}>
			{!cars.length ? (
				<Loading />
			) : (
				<>
					<select value={selectValue} onChange={changeSelect}>
						<option value="all">TODOS</option>
						{makers.map(maker => (
							<option value={maker}>{maker}</option>
						))}
					</select>
					<List cars={cars} />
				</>
			)}
		</div>
	)
}
