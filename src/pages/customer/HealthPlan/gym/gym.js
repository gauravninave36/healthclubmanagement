import Navbar from "../../components/navbarForAccAndClub"
import {useNavigate } from "react-router-dom";
import GymTutorial from "../../components/gymTutorials"
import './gym.css'

const Gym=()=>{
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

    const video=(videoname)=>{
        console.log("video name is "+videoname)
        navigate('/gymTutorial',{state : {videoplay : videoname}})
        
    }

    return(
        <div className="container-{breakpoint} gymBackground">
            <Navbar/>
            <button style={{margin:2}} type="button" class="btn btn-success" onClick={BackLink}>Back Home</button>
            <h1>Gym Tutorial</h1>
            <div className="container">
                <div className="row">
                <div className="video1" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                   
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid1")}>Play</button>

                    </div>

                    <div className="video2" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid2")}>Play</button>

                    </div>

                    <div className="video3" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid3")}>Play</button>

                    </div>

                    <div className="video4" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid4")}>Play</button>

                    </div>

                    <div className="video5" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid5")}>Play</button>

                    </div>

                    <div className="video6" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                         <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid6")}>Play</button>

                    </div>

                    <div className="video7" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid7")}>Play</button>

                    </div>

                    <div className="video8" style={{height:300,width:300,
                                border:2, borderStyle:"solid",borderColor:"red",
                                margin:5}}>
                        <button style={{margin:2}} type="button" class="btn btn-success" onClick={()=>video("vid1")}>Play</button>

                    </div>
                </div>

            </div>
        </div>
    )
}



export default Gym