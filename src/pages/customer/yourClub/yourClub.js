import Navbar from "../components/navbarForAccAndClub"
import { useState,useEffect } from "react"
import { Link, useHistory, useParams,useNavigate } from "react-router-dom";
import customerService from "../../../services/customer.service";
import "./yourClub.css"


const YourClub=()=>{
    const[clubName,setClubName]=useState('');
    const[clubLocation,setClubLocation]=useState('');
    const[clubId,setClubId]=useState('');
    const[trainer,setTrainer]=useState('');
    const[trainerContact,setTrainerContact]=useState('');
    const[clubContact,setClubContact]=useState('');
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
                setClubName(customer.data.clubId.clubName);
                setClubLocation(customer.data.clubId.location);
                setClubContact(customer.data.clubId.clubContact);
                setClubId(customer.data.clubId.id);
                
                switch (clubId) {
                    case 2:
                        setTrainer('Hemant Sharma')
                        setTrainerContact('9988223333')
                        break;
                    case 3:
                        setTrainer('Vickey Singh')
                        setTrainerContact('9188983313')
                        break;
                    case 4:
                        setTrainer('Neha Kale')
                        setTrainerContact('9543983117')
                        break;
                    default:
                        break;
                }
            })
        }
    })


    return(
        <div className="bgYourClub">
            <Navbar/>
            <button style={{margin:2}} type="button" class="btn btn-success" onClick={BackLink}>Back Home</button>

            <div className="container clubDetailsDiv" style={{display:'flex'}}>
                <div className="clubDetailsInnerDiv">
                    <div style={{marginLeft:30,marginTop:20}}>
                <h3>Club Name : {clubName}</h3>
                <h3>Club Address:{clubLocation}  </h3>
                <h3>Trainer Name:{trainer}  </h3>
                <h3>Trainer Contact No:{trainerContact}  </h3>
                     </div>
                </div>
                <div  className="someDetails">
                    <h3 style={{marginLeft:30,marginTop:20}}>Club Contact No: {clubContact}  </h3>
                </div>
            </div>
            <div style={{marginTop:30,marginLeft:30}}>
                <h1>Todays Special</h1>
            </div>
        </div>
    )
}

export default YourClub