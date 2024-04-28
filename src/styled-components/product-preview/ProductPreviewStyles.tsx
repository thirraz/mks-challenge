import styled from "styled-components"

const StyledProductPreview = styled.div`
	width: 100%;
	padding: 1.2rem 1.5rem;
	background: var(--color-white);
	color: var(--color-black);
	font-family: inherit;
	border-radius: 12px;
	position: relative;

	display: grid;
	grid-template-columns: 50px 10rem 1fr min-content;
	align-items: center;
	gap: 1.4rem;
`

const PreviewCover = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
`

const PreviewName = styled.p`
	font-size: 1.3rem;
	font-weight: 500;
`

const Quantity = styled.div``

const QuantityManager = styled.div`
	border: 1px solid #bfbfbf;
	border-radius: 6px;
	font-size: 1.3rem;

	& p {
		border-left: 1px solid #bfbfbf;
		border-right: 1px solid #bfbfbf;
		padding-inline: 1rem;
		display: inline;
	}
`

const PreviewBtn = styled.button`
	border: none;
	padding: 0.3rem 0.8rem;
	background: transparent;

	&:hover {
		background: #ececec;
		cursor: pointer;
	}
`

const PreviewPrice = styled.p`
	font-weight: bolder;
	font-size: 1.4rem;
`

const ClosePreview = styled.button`
	border: none;
	border-radius: 50%;
	background: var(--color-black);
	width: 22px;
	height: 22px;
	display: grid;
	place-items: center;
	font-weight: 500;
	color: #fff;
	cursor: pointer;

	position: absolute;
	top: -10%;
	right: -3%;
`

export {
	StyledProductPreview,
	PreviewCover,
	PreviewName,
	Quantity,
	QuantityManager,
	PreviewBtn,
	PreviewPrice,
	ClosePreview
}
