import StyledApp from "./styled-components/StyledApp"
import { useProductData } from "./features/products/useProductsData"
import ProductCard from "./components/ProductCard"
import ProductsGrid from "./components/ProductsGrid"
import Header from "./components/Header"
import { ProductData } from "./types/ProductData"

export default function App() {
	const { products, isFetchingProducts } = useProductData()

	if (isFetchingProducts) console.log("loading...")

	return (
		<StyledApp>
			<Header />
			<ProductsGrid>
				{products?.products?.map((product: ProductData) => (
					<ProductCard {...product} key={product.id} />
				))}
			</ProductsGrid>
		</StyledApp>
	)
}
