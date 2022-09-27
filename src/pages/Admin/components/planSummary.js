import axios from 'axios'
import config from '../../../config'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const TablePlanSummary = (props) => {
  const navigate = useNavigate()
  const height = props.height
  const width = props.width
  const [getsummaryDetails, setgetsummaryDetails] = useState([])
  let count = 0

  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      getPlanSummary()
    }
  }, [])

  const getPlanSummary = () => {
    axios.get(config.serverURL + '/admin/getplanSummary').then((Response) => {
      setgetsummaryDetails(Response.data)
    })
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
              <th scope='col'>Plan Name</th>

              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Customer count
              </th>
            </tr>
          </thead>

          <tbody>
            {getsummaryDetails.map((plandetails) => {
              count++
              return (
                <tr>
                  <th scope='row'>{count}</th>
                  <td>{plandetails.planName}</td>
                  <td>{plandetails.numberofCust}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePlanSummary
