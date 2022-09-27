import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('');
};

const getData = () =>{
  return httpClient.get('/test');
};

const getAllClub = () =>{
  return httpClient.get('/clubs');
}

const loginCustomer = (data) =>{
  return httpClient.post('/login/', data);
};

const create = (data) => {
  return httpClient.post('', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data,id) => {
  return httpClient.put(`/${id}`, data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};

const addPlan = (data,id)=>{
  return httpClient.post(`purchase/${id}`, data);
}
export default { getAll, create, get, update, remove,getData,loginCustomer,getAllClub,addPlan };
