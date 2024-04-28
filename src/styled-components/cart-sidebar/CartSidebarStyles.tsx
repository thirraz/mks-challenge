import styled from "styled-components"

const StyledCartSidebar = styled.div`
	max-height: 100dvh;
	max-width: 100dvw;
	min-width: 20dvw;
	height: 100dvh;
	background: var(--color-brand);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	box-shadow: -5px 0 6px hsla(0, 0%, 0%, 13%);
	padding: 4.7rem 3.6rem;

	display: flex;
	flex-direction: column;
	gap: 4rem;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	&::-moz-scrollbar {
		display: none;
	}

	@media only screen and (max-width: 860px) {
		align-items: center;
		inset: 0;
	}
`

const CloseMenuButton = styled.button`
	border-radius: 50%;
	place-items: center;
	background: var(--color-black);
	color: var(--color-white);
	width: 30px;
	height: 30px;
	border: none;
	cursor: pointer;

	&:hover {
		background: #2c2c2c;
	}
`

const ProductList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 2.2rem;
	font-size: 1.6rem;
	font-weight: 500;
	color: var(--color-white);
`
const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2rem;
	font-weight: 700;
`

export { CloseMenuButton, ProductList, SidebarHeader, StyledCartSidebar }
