// import { useState, useEffect } from "react"

import dataList from "../../data/cars.json"
import { toLower } from "../../helpers/toLower"
import { useList } from "../../hooks/useList"
import { styles } from "../../styles"
import { ContainerList } from "../ContaineList"

export const CarList = () => {
	const { cars } = useList(dataList)
	/* const [cars, setCars] = useState([])

	useEffect(() => {
		const carPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dataList)
			}, 2000)
		})
		carPromise.then(result => setCars(result))
	}, []) */

	return (
		<div style={styles.container}>
			{!cars.length ? (
				<div id="loading">Loading...</div>
			) : (
				<ContainerList>
					<h2>CUSTOM HOOKS</h2>
					{cars.map(car => (
						<div key={car.id}>{toLower(car.model)}</div>
					))}
				</ContainerList>
			)}
		</div>
	)
}
