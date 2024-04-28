import { StyledProductsGrid } from "../styled-components/products-grid/ProductsGridStyles"

type Props = {
	children: React.ReactNode
}

export default function ProductsGrid({ children }: Props) {
	return <StyledProductsGrid>{children}</StyledProductsGrid>
}
