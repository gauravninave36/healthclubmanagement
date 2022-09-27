import NavbarPlan1 from "../components/navbarPlan1"
import Clock from "../components/clock"
import './plan1.css'
import { useState, useEffect } from "react"
import customerService from "../../../services/customer.service"
const Plan1 = () => {
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');

    useEffect(()=>{
        customerService.get(window.localStorage.getItem("CustomerId"))
        .then(response=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            window.localStorage.setItem("PlanId",response.data.planId.id);
        })
        .catch(error => {
                console.log('Something went wrong', error);
            })
    },[])


return(
    <div className="plan1MainDiv">
        <NavbarPlan1/>
        <div className="container" style={{display:'flex'}}>
            <div style={{width:'50%'}}>
                <Clock></Clock>
            </div>
            <div style={{width:'50%',marginTop:5}}>
            <div style={{marginLeft:300,marginTop:30}}>
                    <h3>Welcome {firstName} {lastName} </h3>
                </div>  
            </div>
        </div>
    </div>
    )
}
export default Plan1