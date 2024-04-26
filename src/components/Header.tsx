import styled from "styled-components"
import Logo from "./Logo"

const StyledHeader = styled.header`
	max-width: 100dvw;
	width: 100dvw;

	display: flex;
	justify-content: space-between;
	padding: 2rem 4rem;
	background: var(--color-brand);
`

export default function Header() {
	return (
		<StyledHeader>
			<Logo />
			<div>Cart Icon</div>
		</StyledHeader>
	)
}
