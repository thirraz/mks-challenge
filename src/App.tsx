import StyledApp from "./styled-components/StyledApp"
import { useProductData } from "./features/products/useProductsData"

export default function App() {
	const { products, isFetchingProducts } = useProductData()

	if (isFetchingProducts) console.log("loading...")

	console.log(products)

	return <StyledApp>App</StyledApp>
}
