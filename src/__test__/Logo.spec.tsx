import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Logo from "../components/Logo"

describe("Logo", () => {
	it("should render correctly", () => {
		const { debug } = render(<Logo />)

		debug
	})
})
