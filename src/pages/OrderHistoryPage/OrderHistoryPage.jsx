import { useEffect } from "react";
import * as userService from "../../utilities/users-service"
import * as orderApi from "../../utilities/orders-api"
import { useState } from "react";
import OrderHistoryListItem from "../../components/OrderHistory/OrderHistoryListItem"

export default function OrderHistoryPage() {
  const [user, setUser] = useState(userService.getUser());
  const [ orders, setOrders] = useState(null)

  useEffect(() =>{
    console.log('USE EFFECT INSIDE OF ORDER HISTORY PAGE!!')
    const fetchOrders = async() => {
       try{
           const response = await orderApi.fetchOrders(user.email);
           // response is a list of orders with their own order ids that need to be populated
           if(response){
            // process all records here only no need for context as this data will only be used by subsequent components
            // res == list of orders 
               // fetch and populate individual orders ? or show total cost
               console.log('FETCH SUCESS ORDER HISTORY!!',response);
               setOrders(response);
               // console.log(policies)
   
           }
       }catch (err){
           console.log(err.message);
       }         
    }
    fetchOrders();
    
},[])
  
  async function handleCheckToken(){
    const expDate= await userService.checkToken();
    console.log(expDate);
  }

  return (
    <>
    { orders &&
      orders.map((order) => (
                            <OrderHistoryListItem key = {order._id} order={order}/>
                         ))  
      
    
    }
    {orders === null &&
    <button> No Order History</button>

    }
    </>
  );
}