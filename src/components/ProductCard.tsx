import { motion } from "framer-motion"
import { useState } from "react"

import { ProductData } from "../types/ProductData"
import { useCartContext } from "./contexts/CartContext/useCartContext"
import ShoppingBagIcon from "./ShoppingBagIcon"
import CheckIcon from "./CheckIcon"
import {
	Button,
	Description,
	NameAndPrice,
	ProductCover,
	StyledProductCard
} from "../styled-components/product-card/ProductCardStyles"

export default function ProductCard({
	brand,
	description,
	name,
	photo,
	price
}: ProductData) {
	const [pickedProduct, setPickedProduct] = useState(false)
	const { products, add } = useCartContext()

	const productHasBeenPicked = products.find(product => product.name === name)

	return (
		<StyledProductCard>
			<ProductCover src={photo} alt="Apple Watch Series 4 GPS" />
			<NameAndPrice>
				<p>
					{brand} {name}
				</p>
				<span>R${price}</span>
			</NameAndPrice>
			<Description>{description}</Description>
			<Button
				onClick={() => {
					add({ brand, description, name, photo, price })
					setPickedProduct(true)
				}}
			>
				{!pickedProduct || !productHasBeenPicked ? (
					<>
						<ShoppingBagIcon /> <span>Comprar</span>
					</>
				) : (
					<>
						<CheckIcon />{" "}
						<motion.span
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.2 }}
						>
							ADICIONADO
						</motion.span>
					</>
				)}
			</Button>
		</StyledProductCard>
	)
}
