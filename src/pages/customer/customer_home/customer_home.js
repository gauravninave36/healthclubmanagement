import Navbar from "../components/navbar";
import "./customer_home.css";
// import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import { useState, useEffect } from "react";
import customerService from "../../../services/customer.service"
import { useParams , useNavigate} from "react-router-dom";


const CustomerHome = () => {
    const[planId,setPlanId] = useState('');
    const[clubId,setClubId] = useState('');
    const navigate = useNavigate();

    const[allClubData,setAllClubData] = useState([]);
    useEffect(()=>{
      customerService.getAllClub()
      .then(response=>{
        setAllClubData(response.data);
      })
      .catch(error => {
        console.log('something went wrong', error);
      })
    },[])

    const AddPlan=()=>{
      const PlanDetails={planId,clubId};
      customerService.addPlan(PlanDetails,window.localStorage.getItem("CustomerId"))
      .then(response => {
        console.log("Plan added successfully", response.data);
        
        if (response.data.planId.id===1) {
          console.log("plan 1")
          console.log(response.data);
          navigate('/Plan1')
        }else if (response.data.planId.id===2) {
          console.log("plan 2")
          console.log(response.data);
          navigate('/Plan2')
        }else if (response.data.planId.id===3){
          console.log("plan 3")
          console.log(response.data);
          navigate('/Plan3')
        }else{
          navigate('/cHome')
        }

      })
      .catch(error => {
          console.log('something went wrong', error);
      })

      console.log("Plan Id selected "+planId);
      console.log("Club Id Selected "+clubId);
    }


  return (
    <div className="container-fluid root">
        <div className="row">
        {/* <Navbar /> */}
        </div>
        <div className="row">
            <div className="col-md-12">
            <img className="img-responsive home-img" src={c2}/>

            </div>
        
        </div>
        <div className="container-{Breakpoint} planDiv">
            <div className="planDetailsDiv">
               <center> <h4>Available Plans</h4></center>
                <div className="basicPlan">
                  <div style={{marginLeft:30,marginTop:30}}>
                <h3>Basic : </h3>
                                <h4>Features:</h4>
                                <h5 style={{marginLeft:100}}>Gym</h5>
                  </div>
                </div>
                <div className="elitePlan">
                <div style={{marginLeft:30,marginTop:30}}>
                <h3>Elite : </h3>
                                <h4>Features:</h4>
                                <h5 style={{marginLeft:100}}>Gym</h5>
                                <h5 style={{marginLeft:100}}>Nutrition</h5>
                </div>
                </div>
                <div className="superElitePlan">
                <div style={{marginLeft:30,marginTop:30}}>
                <h3>Super Elite ; </h3>
                            <h4>Features:</h4>
                                <h5 style={{marginLeft:100}}>Gym</h5>
                                <h5 style={{marginLeft:100}}>Nutrition</h5>
                                <h5 style={{marginLeft:100}}>Yoga</h5>
                </div>
                </div>
            </div>
            <div className="selectPlanDiv">
              <div style={{marginLeft:30,marginTop:30,marginRight:30}}>
                <label for='Role' class='form-label'>
                  <h3>Choose Plan</h3>
                </label>
                <select style={{marginBottom:5}} class='form-select' id='Role' required=''
                        onChange={(e) => {
                            setPlanId(e.target.value)
                        }}>
                  <option value='0'>No Plan Selected</option>
                  <option value='1'>Basic</option>
                  <option value='2'>Elite</option>
                  <option value='3'>SuperElite</option>
                </select>
                <select style={{marginBottom:5}} class='form-select' id='Role' required=''
                        onChange={(e) => {
                          setClubId(e.target.value)
                        }}>
                {allClubData.map((club)=>{
                  return <option value={club.id}>{club.location}</option>
                })}
                </select>
                <button style={{marginLeft:140}} class='w-50 btn btn-primary btn-lg' onClick={AddPlan}>
                  Add Club
                </button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default CustomerHome;
