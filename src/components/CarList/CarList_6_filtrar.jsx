import dataList from "../../data/cars.json"
import { toLower } from "../../helpers/toLower"
import { useList } from "../../hooks/useList"

const makers = ["BMW", "GMC", "Volvo"]

const Container = ({ children }) => (
	<div style={{ width: 1170, margin: "30px auto" }}>{children}</div>
)

export const CarList = () => {
	const { cars, selectValue, changeSelect } = useList(dataList)

	return (
		<Container>
			<h1>Cars</h1>
			<select value={selectValue} onChange={changeSelect}>
				<option value="all">TODOS</option>
				{makers.map(maker => (
					<option value={maker}>{maker}</option>
				))}
			</select>
			{!cars.length ? (
				<div>Loading...</div>
			) : (
				cars.map(car => (
					<div key={car.id}>
						{toLower(car.model)} - {car.maker}
					</div>
				))
			)}
		</Container>
	)
}
