import { createContext, useState } from "react"
import { ProductResponse } from "../../../types/ProductResponse"

type ContextProperties = {
	products: any[]
	add: (newProduct: any) => void
	remove: (name: string) => void
}

type ProviderProps = {
	children: React.ReactNode | React.ReactNode[]
}

export const CartContext = createContext<ContextProperties>(
	{} as ContextProperties
)

export function CartContextProvider({ children }: ProviderProps) {
	const [products, setProducts] = useState<ProductResponse[]>([])

	function add(newProduct: ProductResponse) {
		setProducts((prevProducts: ProductResponse[]) => [
			...prevProducts,
			newProduct
		])
	}

	function remove(productToRemove: string) {
		setProducts(
			products.filter(
				(product: ProductResponse) => product.name !== productToRemove
			)
		)
	}

	return (
		<CartContext.Provider value={{ products, add, remove }}>
			{children}
		</CartContext.Provider>
	)
}
