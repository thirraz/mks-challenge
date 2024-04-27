import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import CheckIcon from "../components/CheckIcon"

describe("CheckIcon", () => {
	it("should render correctly", () => {
		const { debug } = render(<CheckIcon />)

		debug
	})
})
