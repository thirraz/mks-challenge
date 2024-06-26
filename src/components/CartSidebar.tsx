import { AnimatePresence, motion } from "framer-motion"

import ProductPreview from "./ProductPreview"
import { useCartContext } from "./contexts/CartContext/useCartContext"
import { ProductResponse } from "../types/ProductResponse"
import {
	CloseMenuButton,
	ProductList,
	SidebarHeader,
	StyledCartSidebar
} from "../styled-components/cart-sidebar/CartSidebarStyles"
import CheckIn from "./CheckIn"

type Props = {
	setShowMenu: (showMenu: boolean) => void
}

export default function CartSidebar({ setShowMenu }: Props) {
	const { products } = useCartContext()

	return (
		<StyledCartSidebar>
			<div>
				<SidebarHeader>
					Carrinho
					<br />
					de compras
					<CloseMenuButton onClick={() => setShowMenu(false)}>
						X
					</CloseMenuButton>
				</SidebarHeader>

				<ProductList>
					{!products.length && <p>Por favor selectione algum produto</p>}
					<AnimatePresence>
						{products.map((product: ProductResponse, index) => (
							<motion.li
								key={product.id}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -30 }}
								transition={{ duration: 0.2 }}
							>
								<ProductPreview {...product} key={index} />
							</motion.li>
						))}
					</AnimatePresence>
				</ProductList>
			</div>

			<CheckIn />
		</StyledCartSidebar>
	)
}
