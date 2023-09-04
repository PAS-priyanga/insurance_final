
import { useContext } from "react"
import { PolicyContext } from "../context/PolicyContext"

export const usePolicyContext = () => {
  const context = useContext(PolicyContext)

  if(!context) {
    throw Error('usePolicyContext must be used inside a PolicyContextProvider')
  }

  return context
}