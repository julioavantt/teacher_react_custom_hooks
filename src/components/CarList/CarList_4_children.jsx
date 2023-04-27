import dataList from "../../data/cars.json"
import { toLower } from "../../helpers/toLower"
import { useList } from "../../hooks/useList"

const Container = ({ children }) => (
	<div style={{ width: 1170, margin: "30px auto" }}>{children}</div>
)

export const CarList = () => {
	const { cars } = useList(dataList)

	return (
		<Container>
			<h1>Cars</h1>
			{!cars.length ? (
				<div>Loading...</div>
			) : (
				cars.map(car => (
					<div key={car.id}>{toLower(car.model)}</div>
				))
			)}
		</Container>
	)
}
