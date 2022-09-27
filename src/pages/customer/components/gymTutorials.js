import video1 from '../videos/gym.mp4'
import video2 from '../videos/gym2.mp4'
import video3 from '../videos/gym3.mp4'
import video4 from '../videos/gym4.mp4'
import video5 from '../videos/gym5.mp4'
import video6 from '../videos/gym6.mp4'
import video7 from '../videos/gym7.mp4'


import {useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'

let vlink='';
const GymVideo=(props)=>{
    
    const location=useLocation();
    const[videoLink,setVideoLink]= useState('');
    useEffect(() => {
         const { videoplay } = location.state
            //  set(videoplay)

        if(videoplay=='vid1'){
        setVideoLink('/static/media/gym.b1dc2991868b4e8bd878.mp4');
        }
        if(videoplay=='vid2'){
            setVideoLink('/static/media/gym2.e573bdad3f3b00c05b4b.mp4');
        }
        if(videoplay=='vid3'){
            setVideoLink('/static/media/gym3.832c6d854845a138e7dc.mp4');
        }
        if(videoplay=='vid4'){
            setVideoLink('/static/media/gym4.6427b6bdda475eed39ed.mp4');
        }
        if(videoplay=='vid5'){
            setVideoLink('/static/media/gym5.5813f5ea3fdc93da05d7.mp4');
        }
        if(videoplay=='vid6'){
            setVideoLink('/static/media/gym6.4bd4da3cf7c3b3eed1c6.mp4');
        }
        if(videoplay=='vid7'){
            setVideoLink('/static/media/gym7.16bab79fdeb622ea8dc0.mp4');
        }

        //video1
             // /static/media/gym.b1dc2991868b4e8bd878.mp4

        //video2
            ///static/media/gym2.e573bdad3f3b00c05b4b.mp4

        //video3
            ///static/media/gym3.832c6d854845a138e7dc.mp4

        //video4
            ///static/media/gym4.6427b6bdda475eed39ed.mp4

        //video5
            ///static/media/gym5.5813f5ea3fdc93da05d7.mp4

        //video6
            // /static/media/gym6.4bd4da3cf7c3b3eed1c6.mp4

        //video7
            ///static/media/gym7.16bab79fdeb622ea8dc0.mp4
    },[])

    // const set=(abc)=>{
    //    console.log("values passed through location : "+abc)
    //    console.log("video link value : "+videoLink)
    //    if (abc='vid1') {
    //        console.log(true)
    //        vlink=video7;
    //    }
    //    console.log(vlink)
       
    // }
   
    return(
        <div style={{backgroundColor:'tomato',height:'100vh'}}>
        <h1>Tutorials</h1>
        <div className="container" style={{height:500,width:500}}>
            <video src={videoLink} width="600" height="300" controls="controls" autoplay="true"/>
        </div>
        </div>
    )
}

export default GymVideo