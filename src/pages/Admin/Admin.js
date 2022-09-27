import { useState } from 'react'
import Sidebar from './components/sidebar'
import Time from './components/time'
import styles from './AdminStyles/admin.css'
import TableMessage from './components/tablemessage'
import TableSummaryfranchise from './components/tablesummaryfrachise'
import TablePlanSummary from './components/planSummary'
import Poweroff from './components/poweroff'

const Admin = function () {
  const [bartrue, setbartrue] = useState(true)
  const barr = () => {
    setbartrue(false)
  }
  const [acttrue, setacttrue] = useState(true)

  return (
    <div class='container-{breakpoint}'>
      <div class='row align-items-start justify-content-end'>
        <div class='col-xl-2 col-lg-3 col-md-3 align-self-start'>
          <Sidebar vget={bartrue} vset={setbartrue} sidebarAdmin={acttrue} />
        </div>
        <div class='col-xl-8 col-lg-9 col-md-9 align-self-start  '>
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
                marginLeft: '8%',
                marginBottom: '10px',
                fontSize: '2.2rem',
              }}>
              Welcome Admin
            </h1>
          </div>
          <div style={{ marginLeft: '30px' }}>
            <h6
              className='headingsemi'
              style={{
                marginTop: '15px',
                marginLeft: '8%',
                marginBottom: '10px',
                fontSize: '1.7rem',
              }}>
              Club Report
            </h6>
          </div>
          <TableSummaryfranchise height='40vh' />
          <div style={{ marginLeft: '30px' }}>
            <h6
              className='headingsemi'
              style={{
                marginTop: '15px',
                marginLeft: '8%',
                marginBottom: '10px',
                fontSize: '1.7rem',
              }}>
              Plan Report
            </h6>
          </div>
          <TablePlanSummary height='30vh' />
        </div>
        <div class='col-xl-2 col-lg-9 col-md-9 '>
          <Poweroff></Poweroff>
          <Time />
          <TableMessage height='400' />
        </div>
      </div>
    </div>
  )
}

export default Admin
