import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar'
import styles from './AdminStyles/admin.css'
import Table2 from './components/table2'
import Formfrachise from './components/formfranchise'
import Poweroff from './components/poweroff'
import DeleteClub from './components/Deleteformfranchise'

const Deletefrachise = function () {
  const [bartrue, setbartrue] = useState(true)
  const barr = () => {
    setbartrue(false)
  }
  const [acttrue, setacttrue] = useState(true)

  return (
    <div class='container-{breakpoint}'>
      <div class='row align-items-start justify-content-start'>
        <div class='col-xl-2 col-lg-3 col-md-3 align-self-start'>
          <Sidebar
            vget={bartrue}
            vset={setbartrue}
            sideAdminfranchise={acttrue}
            setsideAdminfranchise={setacttrue}
          />
        </div>
        <div class='col-xl-10 col-lg-9 col-md-9 align-self-start'>
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
              Add Franchise
            </h1>
          </div>

          <div>
            <DeleteClub></DeleteClub>
          </div>
        </div>
        <div class=''>
          <Poweroff />
        </div>
      </div>
    </div>
  )
}

export default Deletefrachise
