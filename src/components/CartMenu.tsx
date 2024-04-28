import styled from "styled-components"
import ShoppingCartIcon from "./ShoppingCartIcon"
import CartSidebar from "./CartSidebar"
import { useCartContext } from "./contexts/CartContext/useCartContext"
import { useState } from "react"

const StyledCartMenu = styled.button`
	display: flex;
	font-size: 1.6rem;
	border: none;
	border-radius: 10px;
	align-self: center;
	background: var(--color-white);
	padding: 1rem 1.8rem;
	gap: 1.3rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background: #e2e2e2;
	}
`

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
