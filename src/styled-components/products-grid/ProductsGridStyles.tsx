import styled from "styled-components"

const StyledProductsGrid = styled.div`
	padding-block: 3rem;
	display: grid;
	max-width: 100dvw;
	width: 100dvw;
	grid-template-columns: repeat(4, var(--card-width));
	justify-content: center;

	gap: 3.1rem 2.2rem;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: repeat(auto-fit, minmax(var(--card-width), 1fr));
		gap: 3rem 0.3rem;
		place-items: center;
		padding-inline: 2rem;
	}
`

export { StyledProductsGrid }
