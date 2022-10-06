import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar'
import Table from './components/tableEmployee'
import Time from './components/time'
import styles from './AdminStyles/admin.css'
import TableCustomers from './components/tableCustomers'
import Poweroff from './components/poweroff'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import { useNavigate } from 'react-router-dom'

const Admincustomer = function () {
  const navigate = useNavigate()
  const [bartrue, setbartrue] = useState(true)
  const [frachisedetails, setfrachisedetails] = useState([])
  const [Plandetails, setPlandetails] = useState([])

  const barr = () => {
    setbartrue(false)
  }

  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      getFrachiseDetails()
      getPlanDetails()
    }
  }, [])
  const [planId, setplanId] = useState(0)
  const [clubId, setclubId] = useState(0)
  const [acttrue, setacttrue] = useState(true)

  const getPlanDetails = () => {
    axios.get(config.serverURL + '/admin/getAllPlan').then((Response) => {
      setPlandetails(Response.data)
    })
  }
  const getFrachiseDetails = () => {
    axios.get(config.serverURL + '/admin/getAllClub').then((Response) => {
      setfrachisedetails(Response.data)
    })
  }
  return (
    <div class='container-{breakpoint}'>
      <div class='row align-items-start justify-content-start'>
        <div class='col-xl-2 col-xxl-2 col-lg-3 col-md-3 align-self-start'>
          <Sidebar
            vget={bartrue}
            vset={setbartrue}
            side={acttrue}
            setside={setacttrue}
          />
        </div>
        <div class='col-xl-9 col-xxl-9 col-lg-9 col-md-9 align-self-start  '>
          <div className='d-flex' style={{ marginLeft: '30px' }}>
            <i
              class='fa-solid fa-bars bar'
              onClick={barr}
              style={{
                display: 'none',
                marginTop: '5px',
                paddingTop: '15px',
                marginBottom: '40px',
                marginLeft: '20px',
                fontSize: '1.4rem',
              }}></i>
            <h1
              className='heading99'
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '8%',
                fontSize: '2.2rem',
              }}>
              Customers
            </h1>
          </div>
          <div className='d-flex justify-content-end'>
            <div
              className='d-flex'
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '3%',
              }}>
              <select
                class=' form-select form-select-sm'
                aria-label='.form-select-sm example'
                style={{
                  marginRight: '3%',
                }}
                onChange={(e) => {
                  setplanId(e.target.value)
                }}>
                <option selected value={0}>
                  All Plan
                </option>
                {Plandetails.map((plan) => {
                  return <option value={plan.id}>{plan.planName}</option>
                })}
              </select>
              <select
                class=' form-select form-select-sm'
                aria-label='.form-select-sm example'
                onChange={(e) => {
                  setclubId(e.target.value)
                }}>
                <option selected value={0}>
                  All Club
                </option>
                {frachisedetails.map((club) => {
                  return <option value={club.id}>{club.clubName}</option>
                })}
              </select>
            </div>
          </div>
          <TableCustomers height='80vh' planId={planId} clubId={clubId} />
        </div>
        <div class=''>
          <Poweroff></Poweroff>
        </div>
      </div>
    </div>
  )
}

export default Admincustomer
