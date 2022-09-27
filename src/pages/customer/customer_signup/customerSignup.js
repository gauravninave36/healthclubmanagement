// import './customerSignup.css'
// import img from '../images/c2.jpg'
import NavbarMain from "../components/navbarMain";
import {useState,useEffect} from "react";
import { Link, useHistory, useParams , useNavigate} from "react-router-dom";
import customerService from "../../../services/customer.service"
import './customerSignup.css'


//  active_plan | club_id
const Signup=()=>{
    const[lastName,setLastName] = useState('');
    const[firstName,setFirstName] = useState('');
    const[custContact,setCustContact] = useState('');
    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[address,setAddress]= useState('');
   
    const navigate = useNavigate();
    const saveEmployee = (e) => {
        e.preventDefault();

        const customer = {firstName,lastName,custContact,email,password,address}
        if(firstName===''){
            alert("firstname is empty")
        }else if(lastName===''){
            alert("lastname is empty")
        }else if(custContact===''){
            alert("Contact Number is empty")
        }else if(email===''){
            alert("email is empty")
        }else if(password===''){
            alert("password is empty")
        }else if(address===''){
            alert("address is empty")
        }        
        else{
            customerService.create(customer)
            .then(response => {
                console.log("customer added successfully", response.data);
               navigate('/login');
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
        
    }
       
    return(
        <div className='container-{breakpoint} bgSignup'>
           <NavbarMain/>
          
            
            <div className="container signupdiv">
                <h3 style={{
                        textAlign: 'center',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 30,
                           }}> Sign Up</h3>

                <hr/>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter first name"
                                style={{ height: 50, width: 400, marginTop: 20 }}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter last name"
                                style={{ height: 50, width: 400, marginTop: 20 }}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="number" 
                                className="form-control col-4"
                                id="custContact"
                                value={custContact}
                                onChange={(e) => setCustContact(e.target.value)}
                                placeholder="Enter Contact Number"
                                style={{ height: 50, width: 400, marginTop: 20 }}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                style={{ height: 50, width: 400, marginTop: 20 }}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                style={{ height: 50, width: 400, marginTop: 20 }}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control col-4"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter Address"
                                style={{ height: 50, width: 400, marginTop: 20 }}
                            />
                        </div>
                        <div >
                            <button style={{ height: 45, width: 400, marginTop: 20}} 
                                    onClick={(e) => saveEmployee(e)} className="btn btn-dark">Save</button>
                        </div>
                    </form>
            </div>
            </div>
        
    )

}

export default Signup