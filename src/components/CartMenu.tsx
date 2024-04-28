import ShoppingCartIcon from "./ShoppingCartIcon"
import CartSidebar from "./CartSidebar"
import { useCartContext } from "./contexts/CartContext/useCartContext"
import { useState } from "react"
import { StyledCartMenu } from "../styled-components/cart-menu/CartMenuStyles"

export default function CartMenu() {
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const { products } = useCartContext()

	return (
		<>
			<StyledCartMenu onClick={() => setShowMenu(true)}>
				<ShoppingCartIcon />
				<span>{products.length}</span>
			</StyledCartMenu>

			{showMenu && <CartSidebar setShowMenu={setShowMenu} />}
		</>
	)
}
