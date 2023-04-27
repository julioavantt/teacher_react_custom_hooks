// import { useState, useEffect } from "react"

import dataList from "../../data/cars.json"
import { toLower } from "../../helpers/toLower"
import { useList } from "../../hooks/useList"

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
		<div>
			{!cars.length ? (
				<div>Loading...</div>
			) : (
				cars.map(car => <div key={car.id}>{toLower(car.model)}</div>)
			)}
		</div>
	)
}
