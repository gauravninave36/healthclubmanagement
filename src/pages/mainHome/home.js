import { Link } from 'react-router-dom'
import '../mainHome/home.css'
import video from './videos/video2.mp4'


const Home = () => {
  

  
  return (
    <div className='container-{breakpoint}'>
      <div
        class='modal modal-signin d-flex homeBackground align-items-center justify-content-center'
        tabindex='-1'
        role='dialog'
        id='modalSignin'
        style={{
          height: '100vh',
          overflow: 'clip',
          backgroundColor: 'black',
          zIndex: '1',
        }}>
        <video
          src={video}
          className='position-absolute homevideo'
          style={{
            zIndex: '-23',
            opacity: '0.74',
          }}
          autoPlay
          muted
          loop></video>
        <div class='modal-dialog' role='document'>
          <div
            class='modal-content '
            style={{
              backgroundColor: 'transparent',
              borderRadius: '0px',
              border: 'none',
            }}>
            <div
              class='modal-header p-5 pb-4 border-bottom-0 justify-content-center'
              style={{ borderRadius: '0px' }}>
              <h2 class='fw-bold mb-0' style={{ color: 'lightblue' }}>
                Signin As
              </h2>
            </div>

            <div class='modal-body p-5 pt-0'>
              <Link
                to={'/AdminLogin'}
                style={{ textDecoration: 'none', color: 'white' }}>
                <button
                  class='w-100 py-2 mb-2 btn btn-outline-info rounded-3 ghomebutton ghomeAdmin'
                  type='submsit'>
                  <svg class='bi me-1' width='16' height='16'></svg>
                  Enter As Admin
                </button>
              </Link>
              <Link
                to={'/login'}
                style={{ textDecoration: 'none', color: 'white' }}>
                <button
                  class='w-100 py-2 mb-2 btn btn-outline-dark rounded-3 ghomebutton '
                  type='submit'>
                  <svg class='bi me-1' width='16' height='16'></svg>
                  Enter As Customer
                </button>
              </Link>

              {/* <button
                class='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3'
                type='submit'>
                <svg class='bi me-1' width='16' height='16'></svg>
                Sign up with GitHub
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
