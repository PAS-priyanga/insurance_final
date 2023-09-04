import sendRequest from './send-request';
const BASE_URL = '/api/orders';



export function addOrder(order) {
  return sendRequest(BASE_URL,'POST',order);
}

export function fetchOrders(user_email){
  const URI = BASE_URL + '/all?id='+user_email;
  return sendRequest(URI)
}

