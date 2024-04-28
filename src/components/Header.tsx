import Logo from "./Logo"
import CartMenu from "./CartMenu"
import { StyledHeader } from "../styled-components/header/HeaderStyles"

export default function Header() {
	return (
		<StyledHeader>
			<Logo />
			<CartMenu />
		</StyledHeader>
	)
}
