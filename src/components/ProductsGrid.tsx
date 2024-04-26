import { styled } from "styled-components"

const StyledProductsGrid = styled.div`
	padding-block: 3rem;
	display: grid;
	border: 2px solid red;
	max-width: 100dvw;
	width: 100dvw;
	grid-template-columns: repeat(4, var(--card-width));

	justify-content: center;
	gap: 3rem;
`

type Props = {
	children: React.ReactNode[]
}

export default function ProductsGrid({ children }: Props) {
	return <StyledProductsGrid>{children}</StyledProductsGrid>
}
