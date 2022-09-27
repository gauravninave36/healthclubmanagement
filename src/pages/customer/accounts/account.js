import { useState ,useEffect} from "react"
import { Link, useHistory, useParams,useNavigate } from "react-router-dom";
import Navbar from "../components/navbarForAccAndClub"
import "./account.css"
import customerService from "../../../services/customer.service";


const Accounts=()=>{
    const[customerId,setCustomerId]=useState('1234');
    const[lastName,setLastName] = useState('');
    const[firstName,setFirstName] = useState('');
    const[custContact,setCustContact] = useState('');
    const[email, setEmail] = useState('');
    const[address,setAddress]= useState('');
    const[dateOfExpiry,setDateOfExpiry] = useState('');
    const[dateOfPurchase,setDateOfpurchase] = useState('');
    const[activePlanId,setActivePlanId] = useState('');
    const[activePlanName,setActivePlanName] = useState('');
    const[acticePlanPrice,setActivePlanPrice] = useState('');
    const {id} = useParams();
    const navigate=useNavigate();
    

    const BackLink=()=>{
        
        if(window.localStorage.getItem("PlanId")==1){
            console.log("in plan 1")
           navigate('/Plan1')
          }
          if(window.localStorage.getItem("PlanId")==2){
            console.log("in plan 2")
            navigate('/Plan2')
          }
          if(window.localStorage.getItem("PlanId")==3){
            console.log("in plan 3")
            navigate('/Plan3')
          }
        console.log("in backlink method") 
    }

    useEffect(()=>{
        if(id){
            customerService.get(id)
            .then(customer=>{
                setCustomerId(customer.data.id);
                setLastName(customer.data.lastName);
                setFirstName(customer.data.firstName);
                setCustContact(customer.data.custContact);
                setEmail(customer.data.email);
                setAddress(customer.data.address);

                setDateOfExpiry(customer.data.dateOfExpiry);
                setDateOfpurchase(customer.data.dateOfPurchase);
                setActivePlanId(customer.data.planId.id);
                setActivePlanName(customer.data.planId.planName);
                setActivePlanPrice(customer.data.planId.planPrice);

                
            })  
        }
    
    },[])
    return(
        <div className="bgAccount">
            <Navbar/>
            <button style={{margin:2}} type="button" class="btn btn-success" onClick={BackLink}>Back Home</button>
            <div className="container accountContainer">
                <div className="flexing">
                    <div className="profilePhoto">
                      
                    </div>
                    
                    <div className="accountDetails">
                        <div style={{marginLeft:30}}>
                    <h3 style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}>Cusomer Id:{customerId}</h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >First Name:{firstName}</h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Last Name:{lastName}</h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Phone:{custContact} </h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Email:{email} </h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Address:{address} </h3>

                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >MemberShip Type:{activePlanName} </h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Plan Id:{activePlanId} </h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Purchase Date:{dateOfPurchase} </h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Expire Date:{dateOfExpiry} </h3>
                    <h3
                    style={{
                        textAlign: 'left',
                        fontFamily: 'BrandonTextWeb-Regular',
                        marginTop: 10,
                        }}
                    >Plan Price:{acticePlanPrice} </h3>
                    
                  <Link style={{marginLeft:100}} className="btn btn-success" to={`/update/${customerId}`}>Update Profile</Link>
                     </div>                         
                    </div>
                </div>
            </div>
            <div className="container planContainer">
                <div className="flexing">
                    <div className="currPlanDiv">
                    <h1 style={{textAlign:'center',marginBottom:50}}>Your Plan</h1>
                    <div style={{width:'90%'}} className="updPlanOne">
                                <h3>{activePlanName}</h3>
                            </div>
                        
                    </div>
                    <div className="updPlanDIv">
                        <div style={{display:'flex'}}>
                            <div>
                               <h1 style={{textAlign:'center',marginBottom:50,marginLeft:30}}>Update Plan</h1>
                            </div>
                            <div >
                                <Link className="btn btn-info" to={`/cHome`} style={{marginLeft:40,marginTop:5}}>Update Plan</Link>
                            </div>
                        </div>
                       <div className="updPlanInnerDiv">
                            <div className="updPlanOne">
                                <h3>Basic</h3>
                                <h4>Features:</h4>
                                <h5 style={{marginLeft:100}}>Gym</h5>
                            </div>
                            <div className="updPlanTwo">
                            <h3>Elite</h3>
                                <h4>Features:</h4>
                                <h5 style={{marginLeft:100}}>Gym</h5>
                                <h5 style={{marginLeft:100}}>Nutrition</h5>
                            </div>
                            <div className="updPlanTwo">
                            <h3>Super Elite</h3>
                            <h4>Features:</h4>
                                <h5 style={{marginLeft:100}}>Gym</h5>
                                <h5 style={{marginLeft:100}}>Nutrition</h5>
                                <h5 style={{marginLeft:100}}>Yoga</h5>
                            </div>
                       </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts