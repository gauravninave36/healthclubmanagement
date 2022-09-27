import axios from 'axios'
import config from '../../../config'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Tablefranchise = (props) => {
  const height = props.height
  const width = props.width
  const [frachisedetails, setfrachisedetails] = useState([])
  let count = 0
  const navigate = useNavigate()

  useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/AdminLogin')
    } else {
      getFrachiseDetails()
    }
  })

  const getFrachiseDetails = () => {
    axios.get(config.serverURL + '/admin/getAllClub').then((Response) => {
      setfrachisedetails(Response.data)
    })
  }

  const updateClub = (id) => {
    navigate('/updatefrachise', { state: { clubid: id } })
  }
  // const delclub = (id) => {
  //   navigate('/deletefrachise', { state: { clubid: id } })
  // }
  console.log(frachisedetails)
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
              <th scope='col'>Name</th>
              <th>Contactno</th>
              <th>Location</th>
              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {frachisedetails.map((club) => {
              count++
              return (
                <tr>
                  <th scope='row'>{count}</th>
                  <th>{club.clubName}</th>
                  <td>{club.clubContact}</td>
                  <td>{club.location}</td>
                  <td>
                    <button
                      type='button'
                      class='btn btn-outline-info addbutton'
                      onClick={() => updateClub(club.id)}>
                      Update
                    </button>
                    {/* <button
                      type='button'
                      class='btn btn-outline-danger addbutton'
                      onClick={() => delclub(club.id)}>
                      Delete
                    </button> */}
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

export default Tablefranchise
