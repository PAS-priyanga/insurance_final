import { useState } from 'react'
import { addPolicy } from '../../utilities/policy-api'
import './AddPolicyForm.css';

const AddPolicyForm = ({show, setShow}) => {
  
    
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [term, setTerm] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(null)
  const [success, setSucess] = useState(null)

    // quick and dirty solution best look for alternatives later
  // const reload=()=>window.location.reload();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPolicy = {name, price, term, type}
    const response = await addPolicy(newPolicy)
    

    if (!response) {
      setError('Failed Update Please check values!')
    }
    if (response) {
      setError(null)
      setSucess(true)
      setName(response.name)
      setPrice(response.price)
      setTerm(response.term)
      setShow(false);
      console.log('policy added:', response)
    }

  }

  
    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add Policy</h3>
  
        <div className="form-group">
          <label>Policy Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
  
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
  
        <div className="form-group">
          <label>Term :</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
  
        <div className="form-group">
          <label>Type :</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value=""></option>
            <option value="VEHICLE">Vehicle</option>
            <option value="HOUSE">Housing</option>
            <option value="TRAVEL">Travel</option>
          </select>
        </div>
      {/* TODO  FIND A PLACE TO HOOK THIS FORM IN AND WHAT TO DO ONCE ITS SUCESSFULL */}

      <button>ADD</button>
      {error && <div className="error">{error}</div>}
      {success && <div className="sucess"><h1>Updated Data</h1></div>}
    </form>
  )
}

export default AddPolicyForm