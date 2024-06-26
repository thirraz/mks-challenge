import ProductCard from "./components/ProductCard"
import ProductsGrid from "./components/ProductsGrid"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SpinnerIcon from "./components/SpinnerIcon"

import { ProductData } from "./types/ProductData"
import { useProductData } from "./features/products/useProductsData"
import { StyledApp } from "./styled-components/app/AppStyles"

export default function App() {
	const { products, isFetchingProducts } = useProductData()

	if (isFetchingProducts) return <SpinnerIcon />

	return (
		<StyledApp>
			<Header />
			<ProductsGrid>
				{products.products?.map((product: ProductData) => (
					<ProductCard {...product} key={product.id} />
				))}
			</ProductsGrid>
			<Footer />
		</StyledApp>
	)
}
