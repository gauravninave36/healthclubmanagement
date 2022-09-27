import { useEffect, useInsertionEffect, useState } from 'react'
import self from '../images/GauravNinave.jpg'
const { Link } = require('react-router-dom')

const Sidebar = function (props) {
  const [clas, setclas] = useState(
    'd-flex flex-column flex-shrink-0 p-3 bg-light side close '
  )
  const {
    vget,
    vset,
    side,
    sideAdminfranchise,
    sidebarAdminemployee,
    sidebarAdmin,
  } = props

  useEffect(() => {
    if (vget === false) {
      setclas('d-flex flex-column flex-shrink-0 p-3 bg-light side sidebar ')
      vset(true)
    }
  }, [vget, vset])

  const toggle = () => {
    setclas('d-flex flex-column flex-shrink-0 p-3 bg-light side close ')
  }
  useEffect(() => {
    if (side === true) {
      activate4()
    }
  })
  useEffect(() => {
    if (sideAdminfranchise === true) {
      activate2()
    }
  })
  useEffect(() => {
    if (sidebarAdminemployee === true) {
      activate3()
    }
  })
  useEffect(() => {
    if (sidebarAdmin === true) {
      activate1()
    }
  })

  useEffect(() => {})
  const [act1, setact1] = useState('nav-link')
  const [act2, setact2] = useState('nav-link')
  const [act3, setact3] = useState('nav-link')
  const [act4, setact4] = useState('nav-link')
  const activate1 = () => {
    setact2('nav-link')
    setact1('nav-link active')
    setact3('nav-link')
    setact4('nav-link')
  }
  const activate2 = () => {
    setact2('nav-link active')
    setact1('nav-link')
    setact3('nav-link')
    setact4('nav-link')
  }
  const activate3 = () => {
    setact2('nav-link')
    setact1('nav-link')
    setact3('nav-link active')
    setact4('nav-link')
  }
  const activate4 = () => {
    setact2('nav-link')
    setact1('nav-link')
    setact3('nav-link')
    setact4('nav-link active')
  }
  return (
    <div className={clas} style={{ width: '100%', height: '100vh' }}>
      <div className='d-flex justify-content-between'>
        <Link
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
          <i
            class='fa-brands fa-app-store'
            style={{
              fontSize: '45px',
              textAlign: 'right',
              display: 'block',
              marginLeft: '8px',
              marginRight: '8px',
            }}></i>
          <h3 className='fs-5'>ADMIN</h3>
        </Link>
        <i
          onClick={toggle}
          class='fa-solid fa-xmark'
          style={{
            fontSize: '30px',
            textAlign: 'right',
            display: 'none',
          }}></i>
      </div>
      <hr></hr>
      <ul class='nav nav-pills flex-column mb-auto'>
        <li class='nav-item'>
          <Link
            to='/Admin'
            class={act1}
            onClick={activate1}
            aria-current='page'>
            <svg class='bi pe-none me-2' width='16' height='16'>
              <use to='#home'></use>
            </svg>
            Summary
          </Link>
        </li>
        <li>
          <Link to='/Adminfranchise' class={act2} onClick={activate2}>
            <svg class='bi pe-none me-2' width='16' height='16'>
              <use to='#speedometer2'></use>
            </svg>
            Franchise
          </Link>
        </li>
        <li>
          <Link to='/Adminemployee' class={act3} onClick={activate3}>
            <svg className='bi pe-none me-2' width='16' height='16'>
              <use to='#table'></use>
            </svg>
            Employee
          </Link>
        </li>
        <li>
          <Link to='/Admincustomer' class={act4} onClick={activate4}>
            <svg class='bi pe-none me-2' width='16' height='16'>
              <use to='#grid'></use>
            </svg>
            Customers
          </Link>
        </li>
        {/* <li>
          <Link to='#' class='nav-link link-dark'>
            <svg class='bi pe-none me-2' width='16' height='16'>
              <use to='#people-circle'></use>
            </svg>
            Customers
          </Link>
        </li> */}
      </ul>
      <hr></hr>
      <div class='dropdown'>
        <Link
          to='#'
          class='d-flex align-items-center link-dark text-decoration-none dropdown-toggle'
          id='dropdownUser2'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <img
            src={self}
            alt=''
            width='32'
            height='32'
            class='rounded-circle me-2'></img>
          Credit
          <strong style={{ overflow: 'hidden' }}>&nbsp;Gaurav Ninave</strong>
        </Link>
        <ul
          class='dropdown-menu text-small shadow'
          aria-labelledby='dropdownUser2'>
          <li>
            <Link class='dropdown-item' to='#'>
              New project...
            </Link>
          </li>
          <li>
            <Link class='dropdown-item' to='#'>
              Settings
            </Link>
          </li>
          <li>
            <Link class='dropdown-item' to='#'>
              Profile
            </Link>
          </li>
          <li>
            <hr class='dropdown-divider'></hr>
          </li>
          <li>
            <Link class='dropdown-item' to='#'>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
