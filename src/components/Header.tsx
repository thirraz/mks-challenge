import styled from "styled-components"
import Logo from "./Logo"
import CartMenu from "./CartMenu"

const StyledHeader = styled.header`
	max-width: 100dvw;
	width: 100dvw;

	display: flex;
	justify-content: space-between;
	padding: 2rem 4rem;
	background: var(--color-brand);
	color: #fff;
`

export default function Header() {
	return (
		<StyledHeader>
			<Logo />
			<CartMenu />
		</StyledHeader>
	)
}
