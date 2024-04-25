import { useEffect, useState } from "react"
import { styled } from "styled-components"

const StyledApp = styled.div`
	min-height: 100dvh;
	max-width: 100dvw;
	width: 100dvw;
	background: #0f0f0f;
	color: #fff;
`

export default function App() {
	// const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true)
			const res = await fetch(
				"https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
			)

			const resJSON = await res.json()
			console.log(resJSON)
			setIsLoading(true)
		}
		fetchData()
	}, [])

	if (isLoading) console.log("carregando")

	return <StyledApp>App</StyledApp>
}
