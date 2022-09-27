import './customerLogin.css'
import videos from '../videos/video.mp4'
import NavbarLogin from './../components/navbarLogin'
import { useState } from 'react'
import customerService from '../../../services/customer.service'
import { useParams , useNavigate} from "react-router-dom";

const Login = () => {
  
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();

  const authenticateCustomer = (e)=>{
    e.preventDefault();
    const loginCustomer = {email,password}
    customerService.loginCustomer(loginCustomer)
    .then(response=>{
      console.log("login successfull",response.data)
      // setting session for successfully logged in customer
      window.localStorage.setItem("CustomerId",response.data.id);
      window.localStorage.setItem("isLoggedIn",true);
      // setting session for successfully logged in customer
      console.log(window.localStorage.getItem("CustomerId"))
      console.log(window.localStorage.getItem("isLoggedIn"))

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
      console.log('something went wroing', error);
  })
  }


  return (
    <div className='container-{breakpoint} bg'>
      <div>
        <NavbarLogin />
      </div>
      <div className='row'>
        <div
          className='container col-md-6 logincol'
          style={{ height: 400, width: 600, marginTop: 200 }}>
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'BrandonTextWeb-Regular',
              marginTop: 30,
            }}>
            Login
          </h1>
            <form>
              <div className="form-group">
                <input
                  className="form-control col-4 container"
                  type='text'
                  id="email"
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ height: 50, width: 400, marginTop: 50 }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control col-4 container"
                  type='text'
                  id="password"
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ height: 50, width: 400, marginTop: 20}}
                />
              </div>
                <div className='signup'> Dont have account <a href="http://localhost:3000/cSignup">Click here</a>  to SignUp</div>
                <button  onClick={(e)=>authenticateCustomer(e)} className=' btn btn-login btn-success'>Login</button>
                {/* 
                 <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                */}
            </form>
        </div>
        <video className='video11 col-md-6' src={videos} autoPlay loop muted />
      </div>
      <div className='row'></div>
    </div>
  )
}
export default Login
