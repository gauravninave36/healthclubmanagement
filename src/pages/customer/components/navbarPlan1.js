import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav
      style={{ backgroundColor: '#db0f62' }}
      className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Your Club
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/Plan1'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/gym'>
                Gym
              </Link>
            </li>

           
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to={`/yourclub/`+window.localStorage.getItem("CustomerId")}>
                Your Club
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to={`/accounts/`+window.localStorage.getItem("CustomerId")}>
                Your Account
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link active '
                aria-current='page'
                to='/'>
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
