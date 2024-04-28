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

type QuantityState = {
	quantity: number
	handleQtdIncrease: (qtd: number) => void
	handleQtdDecrease: (qtd: number) => void
}

export default function ProductPreview({
	brand,
	name,
	photo,
	price,
	quantity,
	handleQtdIncrease,
	handleQtdDecrease
}: ProductResponse & QuantityState) {
	const { remove } = useCartContext()

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
					<PreviewBtn onClick={() => handleQtdDecrease}>-</PreviewBtn>
					<p>{quantity}</p>
					<PreviewBtn onClick={() => handleQtdIncrease}>+</PreviewBtn>
				</QuantityManager>
			</Quantity>
			<PreviewPrice>R${price}</PreviewPrice>
		</StyledProductPreview>
	)
}
