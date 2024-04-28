import styled from "styled-components"
import { useCartContext } from "./contexts/CartContext/useCartContext"

const Button = styled.button`
	width: 100%;
	background: var(--color-black);
	color: var(--color-white);
	border: none;
	font-size: 2rem;
	padding-block: 2rem;
	cursor: pointer;

	&:hover {
		background: #2c2c2c;
	}
`

const TotalPrice = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem 2rem;
	max-width: 100%;
	font-size: 2rem;

	& span {
		font-weight: bold;
	}
`

export default function CheckIn() {
	const { quantity } = useCartContext()

	const totalPrice = quantity?.reduce((acc, cur) => acc + +cur, 0)
	console.log(totalPrice)

	return (
		<div>
			<TotalPrice>
				<h2>Total</h2>
				<p>
					<span>R${totalPrice}</span>
				</p>
			</TotalPrice>
			<Button>Finalizar</Button>
		</div>
	)
}
