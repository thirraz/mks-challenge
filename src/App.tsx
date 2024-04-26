import StyledApp from "./styled-components/StyledApp"
import { useProductData } from "./features/products/useProductsData"
import ProductCard from "./components/ProductCard"
import ProductsGrid from "./components/ProductsGrid"
import Header from "./components/Header"
import CartSidebar from "./components/CartSidebar"

export default function App() {
	const { products, isFetchingProducts } = useProductData()

	if (isFetchingProducts) console.log("loading...")

	console.log(products)

	return (
		<StyledApp>
			<Header />
			<ProductsGrid>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</ProductsGrid>
			<CartSidebar />
		</StyledApp>
	)
}
