import { styled } from "styled-components"

const StyledProductCard = styled.div`
	border: 3px solid black;
	max-width: 22rem;

	font-size: 1.6rem;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1.2rem 0;
`

const ProductCover = styled.img`
	max-width: 180px;
	width: 180px;
	height: 180px;
	background: red;
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
`

export default function ProductCard() {
	return (
		<StyledProductCard>
			<ProductCover src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp" />
			<NameAndPrice>
				<p>Apple Watch Series 4 GPS</p>
				<span>R$399</span>
			</NameAndPrice>
			<Description>
				Redesigned from scratch and completely revised
			</Description>
			<Button>
				<span>icon</span> Comprar
			</Button>
		</StyledProductCard>
	)
}
