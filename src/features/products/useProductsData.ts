import { useQuery } from "@tanstack/react-query"

async function fetchData() {
	const res = await fetch(
		"https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
	)

	const data = await res.json()

	return data
}

export function useProductData() {
	const { data: products, isPending: isFetchingProducts } = useQuery({
		queryKey: ["products-data"],
		queryFn: fetchData
	})

	return { products, isFetchingProducts }
}
