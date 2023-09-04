import { createContext, useReducer } from 'react'

export const OrderContext = createContext()

export const orderReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_ORDERS':
      return {  
        orders: action.payload 
      }
    case 'INIT_ORDER': // also used for init
      return { 
        orders: action.payload 
      }
    case 'UPDATE_PRICE':      
      return { 
        orders: {
                    user_id : state.orders.user_id,
                    order_total : state.orders.items.reduce((total, entry) => entry.price + total, 0),
                    items : state.orders.items

        }
      } 
    case 'ADD_TO_ORDER':
      return { 
        orders: {
                    user_id : state.orders.user_id,
                    order_total : state.orders.order_total,
                    items : [action.payload, ...state.orders.items]

        }
      }
    case 'REMOVE_FROM_ORDER':
      return { 
        orders: {
                    user_id : state.orders.user_id,
                    order_total : state.orders.order_total,
                    items : state.orders.items.filter(w => w._id !== action.payload._id)

        }
      }
    case 'DELETE_ORDER':
      return { 
        orders: state.orders.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, { 
    orders: null
  })
  
  return (
    <OrderContext.Provider value={{ ...state, dispatch }}>
      { children }
    </OrderContext.Provider>
  )
}