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
					{/* @ts-expect-error  'No overload matches this call' */}
					<PreviewBtn onClick={handleQtdDecrease}>-</PreviewBtn>
					<p>{quantity}</p>
					{/* @ts-expect-error  'No overload matches this call' */}
					<PreviewBtn onClick={handleQtdIncrease}>+</PreviewBtn>
				</QuantityManager>
			</Quantity>
			<PreviewPrice>R${price}</PreviewPrice>
		</StyledProductPreview>
	)
}
