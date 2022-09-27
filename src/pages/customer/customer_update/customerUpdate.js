// import './customerSignup.css'
// import img from '../images/c2.jpg'
import NavbarBar from "../components/navbar";
import {useState,useEffect} from "react";
import { Link, useHistory, useParams,useNavigate } from "react-router-dom";
import customerService from "../../../services/customer.service"
import "./customerUpdate.css"


//  active_plan | club_id
const Update=()=>{
    const[lastName,setLastName] = useState('');
    const[firstName,setFirstName] = useState('');
    const[custContact,setCustContact] = useState('');
    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[address,setAddress]= useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    

    const saveCustomer = (e) => {
        e.preventDefault();
        
        const customer = {firstName,lastName,address,custContact,email,password}
        if(id){
            customerService.update(customer,id)
            .then(response => {
                console.log('Customer data updated successfully', response.data);
                navigate('/accounts/'+id);
                
            })
            .catch(error => {
                console.log('Something went wrong', error);
            }) 
        }
    }
    useEffect(()=>{

        if(id){
            customerService.get(id)
            .then(customer=>{
                setFirstName(customer.data.firstName);
                setLastName(customer.data.lastName);
                setCustContact(customer.data.custContact);
                setEmail(customer.data.email);
                setPassword(customer.data.password);
                setAddress(customer.data.address);
                 
            })
            .catch(error => {
                console.log('Something went wrong', error);
                
            })
        }
    },[])
       
    return(
        <div className="updateDiv">
           <NavbarBar/>
            <div className="container">
                <h3>Update Profile</h3>
                <hr/>
                    <form>
                        <div style={{marginBottom:5}} className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter first name"
                            />
                        </div>
                        <div style={{marginBottom:5}} className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter last name"
                            />
                        </div>
                        <div style={{marginBottom:5}} className="form-group">
                            <input 
                                type="number" 
                                className="form-control col-4"
                                id="custContact"
                                value={custContact}
                                onChange={(e) => setCustContact(e.target.value)}
                                placeholder="Enter Contact Number"
                            />
                        </div>
                        <div style={{marginBottom:5}} className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                            />
                        </div>
                        <div style={{marginBottom:5}} className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                            />
                        </div>
                        <div style={{marginBottom:5}} className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter Address"
                            />
                        </div>
                       
                       
                        
                        <div >
                            <button onClick={(e) => saveCustomer(e)} className="btn btn-primary">Save</button>
                        </div>
                    </form>
            </div>
        </div>
    )

}

export default Update