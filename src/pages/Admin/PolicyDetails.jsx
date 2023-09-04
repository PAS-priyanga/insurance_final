import { useEffect } from 'react';
import PolicyForm from './PolicyForm'
import { useState } from 'react';
import { usePolicyContext } from '../../hooks/usePoliciesContext';
import { deletePolicy } from '../../utilities/policy-api';

const PolicyDetails = ({ policy }) => {
    const [show, setShow] = useState(false);
    const {dispatch} = usePolicyContext()

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleDeleteClick = async () => {
        console.log('DEleting RECORD::',policy)
        const response = await deletePolicy(policy._id)
    
        if (response) {
          dispatch({type: 'DELETE_POLICY', payload: response})
        }
      }



    useEffect(() => {
        handleClose()
    }, [policy])

    return (   
    <div className="policy-details">
        <h4>{policy.name}</h4>
        <p><strong>Price ($): </strong>{policy.price}</p>
        <p><strong>Term: </strong>{policy.term}</p>
        <p className="" onClick={handleShow}>Edit</p>
        <span className="material-symbols-outlined" onClick={handleDeleteClick}>Delete</span>

        {show === true && 
            <div className='modal' >
                <div className='modal-header'>
                    <div className='modal-title'>
                        Edit Policy
                    </div>
                </div>
                    <div className='modal-body'>
                        <PolicyForm policy={policy} />
                    </div>
                <div className='modal-footer'>
                        <button className='modal-close-btn' onClick={handleClose}>
                            Close Button
                        </button>
                </div>
    </div> }
  </div>        
    )
}

export default PolicyDetails;