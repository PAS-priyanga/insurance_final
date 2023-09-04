const Policy = require('../../models/policyModel')
const mongoose = require('mongoose')
module.exports = {
    createPolicy,
    getAllPolicies,
    getPolicy,
    deletePolicy,
    updatePolicy
}

async function getAllPolicies(req,res) {
    try {
        const  type  = req.query.type;
        console.log('type',type)
        const policies = await Policy.find({type : type}).sort({createdAt: -1});
        console.log(policies);
        res.status(200).json(policies);
    }catch (err){
        res.status(400).json({err});
    }
}

async function createPolicy(req, res) {     
    try {
      // Add the policy to the db
      const policy = await Policy.create(req.body);
      res.status(200).json(policy);
    } catch (err) {
      res.status(400).json({error :err.message});
    }
  }

async function getPolicy(req,res) {
    try {
        const  id  = req.query.id;
        console.log(req.query)
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error : 'Invalid ID'});
        }
        const policy = await Policy.findById(id);
        if(!policy){
            return res.status(404).json({error : 'No such Policy'});
        }
        res.status(200).json(policy);
    }catch (err){
        res.status(400).json({error : err.message});
    }
}

async function deletePolicy(req,res) {
    try {
        var id  = req.query.id;
        const policy = await Policy.findByIdAndDelete(id.trim());
        if(!policy){
            return res.status(404).json({error : 'No such Policy'});
        }
        res.status(200).json(policy);
    }catch (err){
        res.status(400).json({error : err.message});
    }
}
async function updatePolicy(req,res) {
    try {
        var id  = req.query.id;
        console.log(req.query.id)
        console.log(req.body)
        const policy = await Policy.findByIdAndUpdate(id.trim(),
            req.body,
            {
                new: true
            }
            );
        if(!policy){
            return res.status(404).json({error : 'No such Policy'});
        }
        res.status(200).json(policy);
    }catch (err){
        res.status(400).json({error : err.message});
    }
}