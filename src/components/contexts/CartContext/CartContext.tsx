import { createContext, useState } from "react"

type ContextProperties = {
	products: any[] | undefined
	add: (newProduct: any) => void
	remove: (id: number) => void
}

type ProviderProps = {
	children: React.ReactNode | React.ReactNode[]
}

export const CartContext = createContext<ContextProperties>(
	{} as ContextProperties
)

export function CartContextProvider({ children }: ProviderProps) {
	const [products, setProducts] = useState<any>()

	function add(newProduct: any) {
		setProducts((prevProducts: any) => [...prevProducts, newProduct])
	}

	function remove(id: number) {
		setProducts(products.filter((prodId: number) => prodId !== id))
	}

	return (
		<CartContext.Provider value={{ products, add, remove }}>
			{children}
		</CartContext.Provider>
	)
}
