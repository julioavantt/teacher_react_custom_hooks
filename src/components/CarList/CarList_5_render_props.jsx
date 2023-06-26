import { useState, useEffect } from "react"

import dataList from "../../data/cars.json"
import { styles } from "../../styles"
import { ContainerList } from "../ContaineList"

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
					<div style={styles.container}>
						{!cars.length ? (
							<div id="loading">Loading render props...</div>
						) : (
							<ContainerList>
								<h2>RENDER PROPS</h2>
								{cars.map(car => (
									<div key={car.id}>
										{car.model.toUpperCase()}
									</div>
								))}
							</ContainerList>
						)}
					</div>
				)
			}}
		</List>
	)
}
