import { useState, useEffect } from "react"
import dataList from "../../data/cars.json"

export const CarList = () => {
	const [cars, setCars] = useState([])

	useEffect(() => {
		const carPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dataList)
			}, 2000)
		})
		carPromise.then(result => setCars(result))
	}, [])

	console.log(cars)

	return (
		<div style={{ width: 1170, margin: "30px auto" }}>
			{!cars.length ? (
				<div>Loading...</div>
			) : (
				cars.map(car => (
					<div key={car.id}>{car.model.toUpperCase()}</div>
				))
			)}
		</div>
	)
}
