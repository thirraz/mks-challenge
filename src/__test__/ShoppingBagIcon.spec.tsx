ShoppingBagIcon

import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import ShoppingBagIcon from "../components/ShoppingBagIcon"

describe("ShoppingBagIcon", () => {
	it("should render correctly", () => {
		const { debug } = render(<ShoppingBagIcon />)

		debug
	})
})
