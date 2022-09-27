import styles from './AdminStyles/admin.css'
import video from '../mainHome/videos/video2.mp4'
import { useState } from 'react'
import axios from 'axios'
import config from '../../config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = function () {
  //getnavigatefunction reference
  const navigate = useNavigate()

  // get user inputs
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const signin = async () => {
    await axios
      .post(config.serverURL + '/admin/signin', {
        email,
        password,
      })
      .then((Response) => {
        if (Response.data.message === 'NOT FOUND') {
          console.log(Response.data)
          toast.error('invalid email or password')
        } else {
          const result = Response.data
          console.log(Response)
          sessionStorage['token'] = '12345'
          sessionStorage['username'] = result.firstName
          navigate('/Admin')
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error('invalid email or password')
      })
  }

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
        <div class='modal-dialog modalg99' role='document'>
          <div
            class='modal-content '
            style={{
              backgroundColor: 'transparent',
              borderRadius: '0px',
              border: 'none',
              width: '300px',
            }}>
            <div
              class='modal-header p-5 pb-4 border-bottom-0 justify-content-center'
              style={{ borderRadius: '0px' }}>
              <h2 class='fw-bold mb-0' style={{ color: 'lightblue' }}>
                Signin
              </h2>
            </div>

            <main class='form-signin w-100 m-auto'>
              <div>
                {/* <Image
                  class='mb-4'
                  src='/docs/5.2/assets/brand/bootstrap-logo.svg'
                  alt=''
                  width='72'
                  height='57'></Image> */}

                <div class='form-floating'>
                  <input
                    type='email'
                    class='form-control'
                    id='floatingInput'
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value)
                    }}
                    placeholder='name@example.com'></input>
                  <label for='floatingInput'>Email address</label>
                </div>
                <div class='form-floating'>
                  <input
                    type='password'
                    class='form-control'
                    id='floatingPassword'
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value)
                    }}
                    placeholder='Password'></input>
                  <label for='floatingPassword'>Password</label>
                </div>

                <div class='checkbox mb-3'></div>
                <button class='w-100 btn btn-lg btn-primary' onClick={signin}>
                  Sign in
                </button>
              </div>
              {/* <button
          class='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3'
          type='submit'>
          <svg class='bi me-1' width='16' height='16'></svg>
          Sign up with GitHub
        </button> */}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
