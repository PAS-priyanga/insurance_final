import { useState } from 'react'
import { updatePolicy } from '../../utilities/policy-api'

const PolicyForm = ({policy}) => {
  
    
  const [name, setName] = useState(policy.name)
  const [price, setPrice] = useState(policy.price)
  const [term, setTerm] = useState(policy.term)
  const [error, setError] = useState(null)
  const [success, setSucess] = useState(null)

    // quick and dirty solution best look for alternatives later
  const reload=()=>window.location.reload();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedPolicy = {name, price, term}
    const response = await updatePolicy(policy,updatedPolicy)
    

    if (!response) {
      setError('Failed Update Please check values!')
    }
    if (response) {
      setError(null)
      setSucess(true)
      setName(response.name)
      setPrice(response.price)
      setTerm(response.term)
      reload();
      console.log('policy updated:', response)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Edit</h3>

      <label>Policy Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

      <label>Price:</label>
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
      />

      <label>Term :</label>
      <input 
        type="text" 
        onChange={(e) => setTerm(e.target.value)} 
        value={term} 
      />

      <button>Done</button>
      {error && <div className="error">{error}</div>}
      {success && <div className="sucess"><h1>Updated Data</h1></div>}
    </form>
  )
}

export default PolicyForm