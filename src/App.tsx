import StyledApp from "./styled-components/StyledApp"
import { useProductData } from "./features/products/useProductsData"
import ProductCard from "./components/ProductCard"

export default function App() {
	const { products, isFetchingProducts } = useProductData()

	if (isFetchingProducts) console.log("loading...")

	console.log(products)

	return (
		<StyledApp>
			<ProductCard />
		</StyledApp>
	)
}
