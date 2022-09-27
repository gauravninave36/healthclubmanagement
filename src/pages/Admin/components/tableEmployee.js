import { useEffect } from 'react'
import { useState } from 'react'
import config from '../../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const TableEmployee = (props) => {
  const navigate = useNavigate()
  const height = props.height
  const width = props.width
  const [employeedetails, setemployeedetails] = useState([])
  let count = 0

  const getEmployeeDetails = () => {
    axios.get(config.serverURL + '/admin/getAllEmployee').then((Response) => {
      setemployeedetails(Response.data)
    })
  }
  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      getEmployeeDetails()
    }
  })
  const delemployee = (id) => {
    navigate('/deleteEmployee', { state: { employeeid: id } })
  }
  const updateEmployee = (id) => {
    navigate('/updateEmployee', { state: { employeeid: id } })
  }
  return (
    <div
      className='table1'
      style={{
        marginLeft: '11%',
        marginRight: '11%',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      <div
        className='tableg99 table-responsive'
        style={{
          border: '10px solid #cff4fc',
          borderRadius: '20px',
          width: width,
          height: height,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}>
        <table className='table table-hover'>
          <thead>
            <tr className='table-info'>
              <th scope='col' style={{ borderTopLeftRadius: '10px' }}>
                #
              </th>
              <th scope='col'>FirstName</th>
              <th scope='col'>LastName</th>
              <th scope='col'>Club</th>
              <th scope='col'>Role</th>
              <th scope='col'>Contactno</th>

              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employeedetails.map((emp) => {
              count++
              return (
                <tr>
                  <th scope='row'>{count}</th>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.clubdetails.clubName}</td>
                  <td>{emp.role}</td>
                  <td>{emp.empContact}</td>
                  <td>
                    <button
                      type='button'
                      class='btn btn-outline-info addbutton'
                      onClick={() => updateEmployee(emp.id)}>
                      Update
                    </button>
                    <button
                      type='button'
                      class='btn btn-outline-danger addbutton'
                      onClick={() => delemployee(emp.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableEmployee
// address
// :
// "jaipur"
// clubdetails
// :
// clubContact
// :
// 832597
// id
// :
// 2
// location
// :
// "India"
// [[Prototype]]
// :
// Object
// email
// :
// "gauravninave361@gmail.com"
// empContact
// :
// 8329478948
// firstName
// :
// "Gaurav"
// id
// :
// 2
// lastName
// :
// "Ninave"
// password
// :
// "123456"
// role
// :
// "EMPLOYEE"
