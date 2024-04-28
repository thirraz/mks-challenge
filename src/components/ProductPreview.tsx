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

export default function ProductPreview({
	brand,
	name,
	photo,
	price
}: ProductResponse) {
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
					<PreviewBtn>-</PreviewBtn>
					<p>1</p>
					<PreviewBtn>+</PreviewBtn>
				</QuantityManager>
			</Quantity>
			<PreviewPrice>R${price}</PreviewPrice>
		</StyledProductPreview>
	)
}
