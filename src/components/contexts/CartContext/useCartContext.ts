import { useContext } from "react"
import { CartContext } from "./CartContext"

export function useCartContext() {
	const context = useContext(CartContext)

	if (!context) throw Error("Cart Context used outside a Provider")

	return context
}
