import { useNavigate } from 'react-router-dom'

const Poweroff = () => {
  const navigate = useNavigate()
  const logoff = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    navigate('/')
  }
  return (
    <i
      className='fa-solid fa-power-off off'
      onClick={logoff}
      style={{
        textAlign: 'right',
        fontSize: '33px',
        position: 'fixed',
        right: '20px',
        top: '20px',
      }}></i>
  )
}

export default Poweroff
