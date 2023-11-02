import { useState, useEffect } from "react"

import dataList from "../../data/cars.json"
import { styles } from "../../styles"
import { ContainerList } from "../ContainerList"
import { toLower } from "../../helpers/toLower"

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

	return (
		<div style={styles.container}>
			{!cars.length ? (
				<div id="loading">Loading...</div>
			) : (
				<ContainerList>
					<h2>HELPER</h2>
					{cars.map(car => (
						<div key={car.id}>{toLower(car.model)}</div>
					))}
				</ContainerList>
			)}
		</div>
	)
}
