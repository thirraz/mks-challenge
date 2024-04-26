import styled from "styled-components"

const StyledCartSidebar = styled.div`
	max-height: 100dvh;
	height: 100dvh;
	min-width: 20dvw;
	background: var(--color-brand);
	position: absolute;
	top: 0;
	right: 0;
	box-shadow: -5px 0 6px hsla(0, 0%, 0%, 13%);
	padding: 4.7rem 3.6rem;
`

const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2rem;
	font-weight: 700;
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

type Props = {
	setShowMenu: (showMenu: boolean) => void
}

export default function CartSidebar({ setShowMenu }: Props) {
	return (
		<StyledCartSidebar>
			<SidebarHeader>
				Carrinho
				<br />
				de compras
				<CloseMenuButton onClick={() => setShowMenu(false)}>
					X
				</CloseMenuButton>
			</SidebarHeader>
		</StyledCartSidebar>
	)
}
