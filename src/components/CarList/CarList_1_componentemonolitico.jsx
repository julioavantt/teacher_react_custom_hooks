import { useState, useEffect } from "react"

import dataList from "../../data/cars.json"
import { styles } from "../../styles"
import { ContainerList } from "../ContaineList"

export const CarList = () => {
	const [cars, setCars] = useState([])

	useEffect(() => {
		const carPromise = new Promise(resolve =>
			setTimeout(() => resolve(dataList), 10000)
		)
		carPromise.then(result => setCars(result))
	}, [])

	return (
		<div style={styles.container}>
			{!cars.length ? (
				<div id="loading">Loading . . .</div>
			) : (
				<ContainerList>
					<h2>COMPONENTE MONOLÍTICO</h2>
					{cars.map(car => (
						<div key={car.id}>
							{car.model.toUpperCase() +
								" - " +
								car.model.toUpperCase()}
						</div>
					))}
				</ContainerList>
			)}
		</div>
	)
}
