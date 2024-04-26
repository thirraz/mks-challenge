import styled from "styled-components"

const StyledCartSidebar = styled.div`
	max-height: 100dvh;
	height: 100dvh;
	width: 20dvw;
	background: var(--color-brand);
	position: absolute;
	top: 0;
	right: 0;
	box-shadow: -5px 0 6px hsla(0, 0%, 0%, 13%);
`

export default function CartSidebar() {
	return <StyledCartSidebar>CartSidebar</StyledCartSidebar>
}
