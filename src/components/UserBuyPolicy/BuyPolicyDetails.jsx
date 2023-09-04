import { useEffect, useState } from 'react';
import { useOrderContext } from '../../hooks/useOrdersContext';
import './BuyPolicyDetails.css';
const BuyPolicyDetails = ({ policy }) => {
    const [showAdd, setShowAdd] = useState(true);
    const [showRemove, setShowRemove] = useState(false);
    const {orders,dispatch} = useOrderContext()

    useEffect(() =>{
        const items = orders.items;
        console.log('Orders Items::',items);
        console.log('Policy Id:',policy._id);
        for (let i = 0; i < items.length; i++){
            console.log('Current item id::',items[i]._id);
            if (items[i]._id === policy._id){
                setShowAdd(false);
                setShowRemove(true);
            } 
        }
    },[orders.items,policy._id])
    const handleAddToCartClick = async () => {
        console.log('Adding to Cart RECORD::',policy);    
          dispatch({type: 'ADD_TO_ORDER', payload: policy})
          setShowAdd(false);
          setShowRemove(true);
          console.log('Logging After Adding to Cart ::::',orders);

      }
      const handleRemoveFromCartClick = async () => {
        console.log('Adding to Cart RECORD::',policy);    
          dispatch({type: 'REMOVE_FROM_ORDER', payload: policy})
          setShowRemove(false);
          setShowAdd(true);
          console.log('Logging After Adding to Cart ::::',orders);
      }

    return (<>
            <div className="policy-details">
                <h4>{policy.name}</h4>
                <p><strong>Price ($): </strong>{policy.price}</p>
                <p><strong>Term: </strong>{policy.term}</p>
                {showAdd === true &&
                    <span className="material-symbols-outlined" onClick={handleAddToCartClick}>Add</span>
                }
                
                {showRemove === true && 
                    <span className="material-symbols-outlined" onClick={handleRemoveFromCartClick}>Remove</span>
                }
            </div>
        
    </>         
    )
}

export default BuyPolicyDetails;