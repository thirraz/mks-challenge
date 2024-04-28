import { ProductResponse } from "../types/ProductResponse"
import { useCartContext } from "./contexts/CartContext/useCartContext"
import {
	ClosePreview,
	PreviewBtn,
	PreviewCover,
	PreviewName,
	PreviewPrice,
	Quantity,
	QuantityManager,
	StyledProductPreview
} from "../styled-components/product-preview/ProductPreviewStyles"
import { useState } from "react"

export default function ProductPreview({
	brand,
	name,
	photo,
	price
}: ProductResponse) {
	const { remove, incQtd, decQtd } = useCartContext()

	const [quantity, setQuantity] = useState(1)

	const handleQtdIncrease = () => setQuantity(qtd => qtd + 1)
	const handleQtdDecrease = () => setQuantity(qtd => qtd - 1)

	return (
		<StyledProductPreview>
			<ClosePreview onClick={() => remove(name)}>X</ClosePreview>
			<PreviewCover src={photo} alt={`${brand} ${name}`} />
			<PreviewName>
				{brand} {name}
			</PreviewName>
			<Quantity>
				<span>Qtd.</span>
				<QuantityManager>
					<PreviewBtn
						onClick={() => {
							handleQtdDecrease()
							decQtd(Number(price))
						}}
					>
						-
					</PreviewBtn>
					<p>{quantity}</p>
					<PreviewBtn
						onClick={() => {
							handleQtdIncrease()
							incQtd(Number(price))
						}}
					>
						+
					</PreviewBtn>
				</QuantityManager>
			</Quantity>
			<PreviewPrice>R${price}</PreviewPrice>
		</StyledProductPreview>
	)
}
