import { useState, useEffect } from "react"

export const useList2 = dataList => {
	const [cars, setCars] = useState([])
	const [renderCars, setRenderCars] = useState([])
	const [selectValue, setSelectValue] = useState("")

	useEffect(() => {
		const carPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dataList)
			}, 2000)
		})
		carPromise.then(result => {
			setCars(result) // 100 - fuente total
			setRenderCars(result) // 100 - filtrados
		})
	}, [dataList])

	const changeSelect = event => {
		setSelectValue(event.target.value)
		if (event.target.value === "all") {
			setRenderCars(cars) // 100
		} else {
			const newCarList = cars.filter(
				cars => cars.maker === event.target.value
			)
			setRenderCars(newCarList) // 5
		}
	}

	return { cars: renderCars, selectValue, changeSelect }
}
