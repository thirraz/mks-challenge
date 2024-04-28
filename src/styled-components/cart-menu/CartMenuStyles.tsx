import styled from "styled-components"

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
	cursor: pointer;

	&:hover {
		background: #e2e2e2;
	}
`
export { StyledCartMenu }
