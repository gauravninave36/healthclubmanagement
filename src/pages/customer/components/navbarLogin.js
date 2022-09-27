import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <nav
      style={{ backgroundColor: '#db0f62' }}
      className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Club
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
            
            
            <li className='nav-item' >
              <Link
                className='nav-link active '
                aria-current='page'
                to='/cSignup'>
                Signup
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarLogin
