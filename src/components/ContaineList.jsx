import { styles } from "../styles"

export const ContainerList = ({ children }) => (
	<>
		<h1>CARS</h1>
		<div style={styles.list}>{children}</div>
	</>
)
