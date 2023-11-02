import { useList } from "../../hooks/useList"
import dataList from "../../data/cars.json"
import { ContainerList, List, Loading } from "../index"

export const CarList = () => {
	const { cars } = useList(dataList)

	return (
		<ContainerList>
			{!cars.length ? <Loading /> : <List cars={cars} />}
		</ContainerList>
	)
}
