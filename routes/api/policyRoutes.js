const express = require('express');
const policyRouter = express.Router();
const {
    createPolicy,
    getPolicy,
    updatePolicy,
    deletePolicy,
    getAllPolicies
} = require('../../controllers/api/policyController')

// Create a policy
policyRouter.post('/',createPolicy)
// Get specific policy
policyRouter.get('/', getPolicy)
// Get all policies
policyRouter.get('/all', getAllPolicies)
// Update a specific Policy
policyRouter.patch('/',updatePolicy)
// Delete a specific Policy
policyRouter.delete('/',deletePolicy)


module.exports  = policyRouter;