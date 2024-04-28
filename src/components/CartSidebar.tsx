import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import ProductPreview from "./ProductPreview"
import { useCartContext } from "./contexts/CartContext/useCartContext"
import { ProductResponse } from "../types/ProductResponse"

const StyledCartSidebar = styled.div`
	max-height: 100dvh;
	height: 100dvh;
	min-width: 20dvw;
	background: var(--color-brand);
	position: fixed;
	top: 0;
	right: 0;
	box-shadow: -5px 0 6px hsla(0, 0%, 0%, 13%);
	padding: 4.7rem 3.6rem;

	display: flex;
	flex-direction: column;
	gap: 4rem;
`

const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2rem;
	font-weight: 700;
`

const CloseMenuButton = styled.button`
	border-radius: 50%;
	place-items: center;
	background: var(--color-black);
	color: var(--color-white);
	width: 30px;
	height: 30px;
	border: none;
	cursor: pointer;

	&:hover {
		background: #2c2c2c;
	}
`

const ProductList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 2.2rem;
`

type Props = {
	setShowMenu: (showMenu: boolean) => void
}

export default function CartSidebar({ setShowMenu }: Props) {
	const { products } = useCartContext()

	return (
		<StyledCartSidebar>
			<SidebarHeader>
				Carrinho
				<br />
				de compras
				<CloseMenuButton onClick={() => setShowMenu(false)}>
					X
				</CloseMenuButton>
			</SidebarHeader>

			<ProductList>
				<AnimatePresence>
					{products.map((product: ProductResponse) => (
						<motion.li
							key={product.id}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 15 }}
							transition={{ duration: 0.2 }}
						>
							<ProductPreview {...product} key={product.brand} />
						</motion.li>
					))}
				</AnimatePresence>
			</ProductList>
		</StyledCartSidebar>
	)
}
