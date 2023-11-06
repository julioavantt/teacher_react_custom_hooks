import { useList } from "../../hooks/useList"
import { Loading, List } from "../index"
import { styles } from "../../styles"

const makers = ["BMW", "GMC", "Volvo"]

export const CarList = () => {
	const { renderCars, selectValue, changeSelect } = useList()

	return (
		<div style={styles.container}>
			{!renderCars.length ? (
				<Loading />
			) : (
				<>
					<select value={selectValue} onChange={changeSelect}>
						<option value="all">TODOS</option>
						{makers.map(maker => (
							<option value={maker}>{maker}</option>
						))}
					</select>
					<List cars={renderCars} />
				</>
			)}
		</div>
	)
}
