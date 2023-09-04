import { createContext, useReducer } from 'react'

export const PolicyContext = createContext()

export const policyReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_POLICIES': // also used for edit
      return { 
        policies: action.payload 
      }
    case 'CREATE_POLICY':
      return { 
        policies: [action.payload, ...state.policies] 
      }
    case 'DELETE_POLICY':
      return { 
        policies: state.policies.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const PolicyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(policyReducer, { 
    policies: null
  })
  
  return (
    <PolicyContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PolicyContext.Provider>
  )
}