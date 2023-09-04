import { useEffect, useState } from "react"
import * as policyApi from '../../utilities/policy-api';
import { } from "react-router-dom";
import { usePolicyContext } from "../../hooks/usePoliciesContext";
import BuyPolicyDetails from "../../components/UserBuyPolicy/BuyPolicyDetails";
import CheckOutPage from "../Checkout/CheckOutPage";
const UserInsuranceCatalog = ({category}) => {

    const [showCheckOut,setShowCheckOut] = useState(false)
    const [showList, setShowList] = useState(true)

    const {policies, dispatch} = usePolicyContext()

    useEffect(() =>{
        
         const fetchPolicies = async() => {
            try{
                const response = await policyApi.fetchPolicies(category);

                if(response){
                    dispatch({type: 'LOAD_POLICIES', payload: response})
                    console.log('FETCH SUCESS!!');
                    // console.log(policies)
        
                }
            }catch (err){
                console.log(err.message);
            }         
         }
         fetchPolicies();
         
    },[])

    const handleCheckOut = () => {
        setShowList(false);
        setShowCheckOut(true);
    }

    return (
        <>
       
        {(showList === true &&  policies) &&
            <div className="policies">
            <h3> Add Policies to Cart and CheckOut!</h3>
            {policies.map((policy) => (
                            <BuyPolicyDetails key = {policy._id} policy={policy}/>
                         ))  
            }
            <div className="checkout-btn">
                <button onClick={handleCheckOut}>Checkout</button>
            </div>

            </div>
                             
      
        }                      
            {showCheckOut === true && 
                <CheckOutPage/>
            }
        </>
    )}

export default UserInsuranceCatalog
