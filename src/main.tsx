import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import GlobalStyles from "./styled-components/GlobalStyles.tsx"
import { CartContextProvider } from "./components/contexts/CartContext/CartContext.tsx"

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<CartContextProvider>
				<GlobalStyles />
				<App />
			</CartContextProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
