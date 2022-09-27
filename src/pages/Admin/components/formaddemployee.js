import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../../config'

const Formaddemployee = () => {
  //hook used to navigate
  const navigate = useNavigate()

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [address, setaddress] = useState('')
  const [empContact, setempContact] = useState()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState()
  const [club_id, setclub_id] = useState(1)
  const [role, setrole] = useState('EMPLOYEE')

  // fetching
  const [frachisedetails, setfrachisedetails] = useState([])

  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      getFrachiseDetails()
    }
  }, [])

  const getFrachiseDetails = () => {
    axios.get(config.serverURL + '/admin/getAllClub').then((Response) => {
      setfrachisedetails(Response.data)
    })
  }

  const body = {
    firstName,
    lastName,
    address,
    empContact,
    email,
    password,
    club_id,
    role,
  }

  const AddEmployee = () => {
    axios.post(config.serverURL + '/admin/addEmployee', body).then(() => {})
    navigate('/Adminemployee')
  }

  return (
    <div
      class='col-md-7 col-lg-8 table1'
      style={{
        marginLeft: '11%',
        marginRight: '11%',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      <form class='needs-validation' novalidate=''>
        <div class='row g-3'>
          <div class='col-sm-6'>
            <label for='firstName' class='form-label'>
              First name
            </label>
            <input
              type='text'
              class='form-control'
              id='firstName'
              placeholder=''
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value)
              }}
              required=''></input>
            <div class='invalid-feedback'>Valid first name is required.</div>
          </div>

          <div class='col-sm-6'>
            <label for='lastName' class='form-label'>
              Last name
            </label>
            <input
              type='text'
              class='form-control'
              id='lastName'
              placeholder=''
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value)
              }}
              required=''></input>
            <div class='invalid-feedback'>Valid last name is required.</div>
          </div>
          <div class='col-12'>
            <label for='email' class='form-label'>
              Email
            </label>
            <input
              type='email'
              class='form-control'
              id='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }}></input>
            <div class='invalid-feedback'>
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class='col-6'>
            <label for='address' class='form-label'>
              Address
            </label>
            <input
              type='text'
              class='form-control'
              id='address'
              placeholder='J-10 Karsima building near kash city Nagpur'
              required=''
              value={address}
              onChange={(e) => {
                setaddress(e.target.value)
              }}></input>
            <div class='invalid-feedback'>
              Please enter your shipping address.
            </div>
          </div>
          <div class='col-6'>
            <label for='Role' class='form-label'>
              Role
            </label>
            <select
              class='form-select'
              id='Role'
              required=''
              onChange={(e) => {
                setrole(e.target.value)
              }}>
              <option value='EMPLOYEE'>EMPLOYEE</option>
              <option value='ADMIN'>ADMIN</option>
            </select>
            <div class='invalid-feedback'>Please provide a valid state.</div>
          </div>
          <div class='col-6'>
            <label for='password' class='form-label'>
              Password <span class='text-muted'>(Important)</span>
            </label>
            <input
              type='password'
              class='form-control'
              id='address2'
              placeholder='@123456'
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }}></input>
          </div>
          <div class='col-6'>
            <label for='Phone' class='form-label'>
              Phone no.
            </label>
            <input
              type='text'
              class='form-control'
              id='phone'
              placeholder='8326484762'
              value={empContact}
              onChange={(e) => {
                setempContact(e.target.value)
              }}></input>
          </div>

          <div class='col-md-5'>
            <label for='Club' class='form-label'>
              Club Name
            </label>
            <select
              class='form-select'
              id='country'
              required=''
              onChange={(e) => {
                setclub_id(e.target.value)
              }}>
              {frachisedetails.map((club) => {
                return <option value={club.id}>{club.clubName}</option>
              })}
            </select>
            <div class='invalid-feedback'>Please select a valid country.</div>
          </div>

          {/* <div class='col-md-4'>
            <label for='state' class='form-label'>
              State
            </label>
            <select class='form-select' id='state' required=''>
              <option value=''>Choose...</option>
              <option>California</option>
            </select>
            <div class='invalid-feedback'>Please provide a valid state.</div>
          </div>

          <div class='col-md-3'>
            <label for='zip' class='form-label'>
              Zip
            </label>
            <input
              type='text'
              class='form-control'
              id='zip'
              placeholder=''
              required=''></input>
            <div class='invalid-feedback'>Zip code required.</div>
          </div>
          <div class='col-mb-6'>
            <label for='photo' class='form-label'>
              Photo
            </label>
            <input
              type='file'
              class='form-control'
              id='inputGroupFile02'></input>
          </div> */}
        </div>

        <hr class='my-4'></hr>

        <button class='w-100 btn btn-primary btn-lg' onClick={AddEmployee}>
          Add employee
        </button>
      </form>
    </div>
  )
}

export default Formaddemployee
