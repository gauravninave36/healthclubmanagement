import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import config from '../../../config'

const UpdateClub = () => {
  const navigate = useNavigate()
  const [id, setid] = useState(0)
  const [clubName, setclubName] = useState('')
  const [location, setlocation] = useState('')
  const [clubContact, setclubContact] = useState('')
  const Location = useLocation()

  const body = {
    id,
    clubName,
    location,
    clubContact,
  }
  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      const { clubid } = Location.state
      setid(clubid)
      getSelectedClub(clubid)
    }
  }, [location.state])

  const getSelectedClub = (id) => {
    axios.get(config.serverURL + '/admin/club/' + id).then((Response) => {
      setclubName(Response.data.clubName)
      setclubContact(Response.data.clubContact)
      setlocation(Response.data.location)
    })
  }
  const updateclub = () => {
    axios.put(config.serverURL + '/admin/Updateclub', body).then((Response) => {
      console.log(Response)
    })
    navigate('/Adminfranchise')
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
      <div class='row g-3'>
        <div class='col-sm-6'>
          <label for='firstName' class='form-label'>
            Franchise Name
          </label>
          <input
            type='text'
            class='form-control'
            id='firstName'
            placeholder=''
            value={clubName}
            onChange={(e) => {
              setclubName(e.target.value)
            }}
            required=''></input>
          <div class='invalid-feedback'>Valid first name is required.</div>
        </div>

        {/* <div class='col-12'>
            <label for='email' class='form-label'>
              Email
            </label>
            <input
              type='email'
              class='form-control'
              id='email'
              placeholder='franchisemanger@example.com'></input>
            <div class='invalid-feedback'>
              Please enter a valid email address for shipping updates.
            </div>
          </div> */}

        <div class='col-12'>
          <label for='address' class='form-label'>
            Address
          </label>
          <input
            type='text'
            class='form-control'
            id='address'
            placeholder='st joerge'
            required=''
            value={location}
            onChange={(e) => {
              setlocation(e.target.value)
            }}></input>
          <div class='invalid-feedback'>
            Please enter your shipping address.
          </div>
        </div>

        <div class='col-6'>
          <label for='Phone' class='form-label'>
            Phone
          </label>
          <input
            type='text'
            class='form-control'
            id='phone'
            placeholder='8326484762'
            value={clubContact}
            onChange={(e) => {
              setclubContact(e.target.value)
            }}></input>
        </div>
      </div>

      <hr class='my-4'></hr>

      <button class='w-100 btn btn-primary btn-lg' onClick={updateclub}>
        Update club
      </button>
    </div>
  )
}

export default UpdateClub
