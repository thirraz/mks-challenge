import { createContext, useState } from "react"
import { ProductResponse } from "../../../types/ProductResponse"

type ContextProperties = {
	products: any[]
	add: (newProduct: any) => void
	remove: (name: string) => void
	quantity: number[]
	incQtd: (prod: number) => void
	decQtd: (prod: number) => void
}

type ProviderProps = {
	children: React.ReactNode | React.ReactNode[]
}

export const CartContext = createContext<ContextProperties>(
	{} as ContextProperties
)

export function CartContextProvider({ children }: ProviderProps) {
	const [products, setProducts] = useState<ProductResponse[]>([])
	const [quantity, setQuantity] = useState<number[]>([])

	function incQtd(product: number) {
		setQuantity([...quantity, product])
	}

	function decQtd(product: number) {
		setQuantity(quantity.filter(qtd => qtd !== product))
	}

	function add(newProduct: ProductResponse) {
		// if products[] already have newProduct, ignore
		if (!products.find(product => product.name === newProduct.name))
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
		<CartContext.Provider
			value={{ products, add, remove, quantity, incQtd, decQtd }}
		>
			{children}
		</CartContext.Provider>
	)
}
