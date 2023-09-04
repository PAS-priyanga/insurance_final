import { useEffect, useState } from "react"
import { useOrderContext } from "../../hooks/useOrdersContext"
import CartListItem from "../../components/Cart/CartListItem"
import * as ordersApi from '../../utilities/orders-api'
import { useNavigate } from "react-router-dom"
const CheckOutPage = () => {

    const {orders, dispatch} = useOrderContext()

    const [thanks, setThanks] = useState(false)

    useEffect(() =>{
        dispatch({type: 'UPDATE_PRICE'})
        console.log(orders)
   },[])

    const handlePurchase = () => {
        const addOrder = async () =>{
            try{
                if(orders.items.length <= 0){
                    return;
                }
                // prepare orders for saving here
                var savePayload = {
                    user_id : orders.user_id,
                    order_total : orders.order_total,
                    items : orders.items.map((item) => item._id)
                }
                console.log('Saving Payload::',savePayload);
                const response = await ordersApi.addOrder(savePayload);
                if(response){
                    // sucessfully saved order so empty the current cart
                    //refresh order
                    savePayload = {
                        user_id : orders.user_id,
                        order_total : 0,
                        items :[]
                    }
                    dispatch({type: 'INIT_ORDER',payload: savePayload})
                    setThanks(true);
                }
            }catch(err){
                console.log(err.message)
            }
            
        }
        addOrder();
    }

    const handleFinishedOrder = () => {
         // quick and dirty solution best look for alternatives later
            window.location.reload();
    }

    return (
        <div className="home">
        <div className="policies">
        <h3> Review Cart and finalize Purchase!</h3>
        {orders.items.length > 0 &&
            
                    orders.items.map((policy) => (
                        <CartListItem key = {policy._id} policy={policy}/>
                    ))            
      
        }
        </div>
        {orders.items.length > 0 &&
            <div className="checkout-btn">
                <p>Total: {orders.order_total}$</p>
                <button onClick={handlePurchase}>Purchase</button>
            </div>
        }
        {thanks === true && 
            <div className="finished">
                <button onClick={handleFinishedOrder}>Thank you for your Order</button>
            </div>

        }
        

        
    </div>
    )}

export default CheckOutPage