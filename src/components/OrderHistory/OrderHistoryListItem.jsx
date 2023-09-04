import { useEffect, useState } from 'react';
import * as policyApi from "../../utilities/policy-api"
import { formatDistanceToNow } from 'date-fns';
import DetailOrderListItem from './DetailOrderListItem';


const OrderHistoryListItem = ({ order }) => {
    
    const [ viewDetails, setViewDetails] = useState(false)
    const [ orderPolicies, setOrderPolicies] = useState([])

    useEffect(() =>{
        
        const fetchPolicies = async() => {
           try{
            // for each listed policy in order list fetch it and save it to order items
            var policies = []
            for (let idx = 0; idx < order.items.length; idx++){
                var policy  = await policyApi.fetchPolicyById(order.items[idx]);
                policies.push(policy);
            }
               if(policies.length > 0){
                   console.log('Policies Under Order Fetch Success!!', policies);
                   setOrderPolicies(policies);
               }
           }catch (err){
               console.log(err.message);
           }         
        }
        fetchPolicies();
        
   },[])

    const handleViewOrderDetails = async () => {
        console.log('Viewing Order Details',order)
        console.log('Order')
        setViewDetails(!viewDetails);
      }

    return (   
    <>
            <div className="order-details">
                <p><strong>Order Id: </strong>{order._id}</p>
                <p><strong>Order Price ($): </strong>{order.order_total}</p>
                <p><strong>Purchased: </strong>{formatDistanceToNow(new Date(order.createdAt),{addSuffix: true})}</p>
                { orderPolicies.length > 0 &&
                    <button onClick={handleViewOrderDetails}>View Details</button>
                }
                {
                    orderPolicies.length === 0 &&
                    <button>Policy no Longer Exists</button>
                }
            </div>
            <div>
            {viewDetails === true && orderPolicies.length > 0 &&  
                orderPolicies.map((orderPolicy) => (
                            <DetailOrderListItem key = {orderPolicy._id} orderPolicy={orderPolicy}/>
                         ))  
            }
            </div>
    </>       
    )
}

export default OrderHistoryListItem;