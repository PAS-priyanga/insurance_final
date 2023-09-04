import sendRequest from './send-request';
const BASE_URL = '/api/policy';

// Refactored code below
export function fetchPolicies(policyType) {
  const URI = BASE_URL+ '/all?type='+encodeURIComponent(policyType)
  return sendRequest(URI);
}

export function addPolicy(policy) {
  return sendRequest(BASE_URL,'POST',policy);
}

export function updatePolicy(policy,payload) {
    const URI = BASE_URL+ '?id='+encodeURIComponent(policy._id)
    return sendRequest(URI,'PATCH',payload);
}
export function deletePolicy(id) {
  const URI = BASE_URL+ '?id='+encodeURIComponent(id)
  return sendRequest(URI,'DELETE');
}

export function fetchPolicyById(id){
  const URI = BASE_URL + '?id='+id;
  return sendRequest(URI);
}
