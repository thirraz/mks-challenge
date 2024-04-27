ShoppingCartIcon

import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import ShoppingCartIcon from "../components/ShoppingCartIcon"

describe("ShoppingCartIcon", () => {
	it("should render correctly", () => {
		const { debug } = render(<ShoppingCartIcon />)

		debug
	})
})
