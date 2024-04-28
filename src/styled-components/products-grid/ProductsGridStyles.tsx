import styled from "styled-components"

const StyledProductsGrid = styled.div`
	padding-block: 3rem;
	display: grid;
	max-width: 100dvw;
	width: 100dvw;
	grid-template-columns: repeat(4, var(--card-width));

	justify-content: center;
	gap: 3.1rem 2.2rem;
`

export { StyledProductsGrid }
