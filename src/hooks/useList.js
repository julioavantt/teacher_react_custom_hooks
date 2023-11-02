import { useState, useEffect } from "react"

export const useList = dataList => {
	const [cars, setCars] = useState([])

	useEffect(() => {
		const carPromise = new Promise(resolve =>
			setTimeout(() => resolve(dataList), 1000)
		)
		carPromise.then(result => setCars(result))
	}, [dataList])

	const handleClick = () => alert(3)

	return { cars, handleClick }
}
