import { useEffect } from 'react';
import { useOrderContext } from '../../hooks/useOrdersContext';


const CartListItem = ({ policy }) => {
    const {dispatch} = useOrderContext();

    const handleDeleteClick = async () => {
        console.log('Removing From Cart',policy)
        dispatch({type:'REMOVE_FROM_ORDER',payload: policy})
        dispatch({type:'UPDATE_PRICE'})
        console.log('Order')
      }



    useEffect(() => {
        
    }, [policy])

    return (   
    <div className="policy-details">
        <h4>{policy.name}</h4>
        <p><strong>Price ($): </strong>{policy.price}</p>
        <p><strong>Term: </strong>{policy.term}</p>
        <span className="material-symbols-outlined" onClick={handleDeleteClick}>Remove</span>
    </div>        
    )
}

export default CartListItem;