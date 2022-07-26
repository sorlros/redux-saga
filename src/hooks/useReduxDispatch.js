import { useContext } from "react"
import ReduxContext from "../contexts/ReduxContext"

export default function useReduxDispattch() {
	const store = useContext(ReduxContext)

	return store.dispatch
}
