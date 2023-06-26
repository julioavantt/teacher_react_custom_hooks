import { useState, useEffect } from "react"

export const useList = dataList => {
	const [cars, setCars] = useState([])

	useEffect(() => {
		const carPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dataList)
			}, 2000)
		})
		carPromise.then(result => {
			setCars(result)
		})
	}, [dataList])

	return { cars }
}
