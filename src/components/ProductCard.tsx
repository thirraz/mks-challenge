import { styled } from "styled-components"
import ShoppingBagIcon from "./ShoppingBagIcon"
import { useState } from "react"
import CheckIcon from "./CheckIcon"
import { ProductData } from "../types/ProductData"

const StyledProductCard = styled.div`
	max-width: var(--card-width);
	width: var(--card-width);

	font-size: 1.6rem;
	border-radius: 15px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 2px 8px hsla(0, 0%, 0%, 13.52%);

	gap: 1.2rem 0;
`

const ProductCover = styled.img`
	max-width: 180px;
	width: 180px;
	height: 180px;
	background: var(--color-gray);
	margin-block: 1rem;

	object-fit: cover;
`

const NameAndPrice = styled.div`
	padding-inline: 1.3rem;
	display: flex;
	gap: 1rem;

	& span {
		background: var(--color-gray);
		color: var(--color-white);
		padding: 0.3rem 0.8rem;
		border-radius: 5px;
		align-self: self-start;
	}

	& p {
		font-weight: 500;
	}
	//
`

const Description = styled.div`
	padding-inline: 1.3rem;
	font-size: 1.4rem;
`

const Button = styled.button`
	width: 100%;
	border-radius: 0;
	border: none;
	background: var(--color-brand);
	padding-block: 1rem;
	text-transform: uppercase;
	font-family: inherit;
	font-weight: 600;
	color: var(--color-white);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 1rem;
	cursor: pointer;

	& svg {
		width: 16px;
	}
`

export default function ProductCard({
	brand,
	description,
	name,
	photo,
	price
}: ProductData) {
	const [pickedProduct, setPickedProduct] = useState(false)

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
			<Button onClick={() => setPickedProduct(true)}>
				{!pickedProduct ? (
					<>
						<ShoppingBagIcon /> <span>Comprar</span>
					</>
				) : (
					<CheckIcon />
				)}
			</Button>
		</StyledProductCard>
	)
}
