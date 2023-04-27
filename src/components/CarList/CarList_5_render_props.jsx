import { useState, useEffect } from "react"
import dataList from "../../data/cars.json"

const List = ({ children }) => {
	const [cars, setCars] = useState([])

	useEffect(() => {
		const carPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dataList)
			}, 2000)
		})
		carPromise.then(result => setCars(result))
	}, [])

	return children(cars)
}

export const CarList = () => {
	return (
		<List>
			{cars => {
				return (
					<div>
						{!cars.length ? (
							<div>Loading render props...</div>
						) : (
							cars.map(car => (
								<div key={car.id}>
									{car.model.toUpperCase()}
								</div>
							))
						)}
					</div>
				)
			}}
		</List>
	)
}
