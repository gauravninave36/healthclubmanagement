import video from "./pages/customer/videos/gym.mp4"
import "./Test.css"
const Test=()=>{

    // const btn=document.querySelector('.btn11')
    // const videoContainer=document.querySelector('.video-containerrrr')
    // const close=document.querySelector('.close11')

    // btn.addEventListener('click',()=>{
    //     video-containerrrr.classList.add('show');
    // })

    // close.addEventListener('click',()=>{
    //     video-containerrrr.classList.remove('show');
    // })

    
    return(
        <>
        <div className="modallx">
            <a href="#" className="btn btn11">Play</a>

            <div className="video-containerrrr">
                <span className="close11">&#10006;</span>
                {/* <video src={video} controls></video> */}
            </div>
        </div>
        </>
        
    )
}

export default Test