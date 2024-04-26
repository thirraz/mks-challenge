import styled from "styled-components"
import ShoppingCartIcon from "./ShoppingCartIcon"

const StyledCartMenu = styled.button`
	display: flex;
	font-size: 1.6rem;
	border: none;
	border-radius: 10px;
	align-self: center;
	background: var(--color-white);
	padding: 1rem 1.8rem;
	gap: 1.3rem;
	font-weight: bold;

	& svg {
	}
`

export default function CartMenu() {
	return (
		<StyledCartMenu>
			<ShoppingCartIcon />
			<span>0</span>
		</StyledCartMenu>
	)
}
