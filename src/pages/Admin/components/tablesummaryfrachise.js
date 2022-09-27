import axios from 'axios'
import config from '../../../config'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const TableSummaryfranchise = (props) => {
  const navigate = useNavigate()
  const height = props.height
  const width = props.width
  const [getsummaryDetails, setgetsummaryDetails] = useState([])
  let count = 0

  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      getFrachiseSummary()
    }
  }, [])

  const getFrachiseSummary = () => {
    axios.get(config.serverURL + '/admin/getAdminSummary').then((Response) => {
      setgetsummaryDetails(Response.data)
    })
  }
  console.log(getFrachiseSummary)
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
              <th scope='col'>Club Name</th>
              <th scope='col'>location</th>
              <th>YearEarning</th>

              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Customer count
              </th>
            </tr>
          </thead>

          <tbody>
            {getsummaryDetails.map((club) => {
              count++
              return (
                <tr>
                  <th scope='row'>{count}</th>
                  <td>{club.clubName}</td>
                  <td>{club.location}</td>
                  <td>{club.sum} Rs</td>
                  <td>{club.numberofCustomerInfranchise}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableSummaryfranchise
