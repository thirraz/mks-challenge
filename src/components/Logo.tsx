import styled from "styled-components"

const StyledLogo = styled.p`
	font-family: inherit;
	font-size: 4rem;
	font-weight: 600;

	& span {
		font-size: 1.6rem;
		font-weight: 200;
	}
`

export default function Logo() {
	return (
		<StyledLogo>
			MKS <span>Sistemas</span>
		</StyledLogo>
	)
}
