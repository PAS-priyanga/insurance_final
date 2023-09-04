import { useEffect } from "react"
import * as policyApi from '../../utilities/policy-api';
import { } from "react-router-dom";
import PolicyDetailsForm from "../Admin/PolicyDetails";
import { usePolicyContext } from "../../hooks/usePoliciesContext";
const InsuranceCatalog = ({category}) => {


    const {policies, dispatch} = usePolicyContext()

    useEffect(() =>{
         const fetchPolicies = async() => {
            try{
                const response = await policyApi.fetchPolicies(category);

                if(response){
                    dispatch({type: 'LOAD_POLICIES', payload: response})
                    console.log('FETCH SUCESS!!');
                }
            }catch (err){
                console.log(err.message);
            }         
         }
         fetchPolicies();
         
    },[])

    return (
        <div className="home">
        <div className="policies">
        {policies &&
            
                    policies.map((policy) => (
                        <PolicyDetailsForm key = {policy._id} policy={policy}/>
                    ))            
      
        }
        </div>
    </div>
    )}

export default InsuranceCatalog