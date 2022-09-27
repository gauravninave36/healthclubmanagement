import Home from './pages/mainHome/home'
import Signup from './pages/customer/customer_signup/customerSignup'
import Login from './pages/customer/customerLogin/customerLogin'
import Update from './pages/customer/customer_update/customerUpdate'
import CustomerHome from './pages/customer/customer_home/customer_home'
import Gym from './pages/customer/HealthPlan/gym/gym'
import Nutri from './pages/customer/HealthPlan/nutrition/nutrition'
import Yoga from './pages/customer/HealthPlan/yoga/yoga'
import YourClub from './pages/customer/yourClub/yourClub'
import Accounts from './pages/customer/accounts/account'
import Carasol from './pages/customer/components/carasol'
import Admin from './pages/Admin/Admin'
import GymTutorial from './pages/customer/components/gymTutorials'
import Test from './Test'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Admincustomer from './pages/Admin/Admincustomer'
import Adminfranchise from './pages/Admin/Adminfranchise'
import Adminemployee from './pages/Admin/Adminemployee'
import Addfranchise from './pages/Admin/Addfranchise'
import Addadminemployee from './pages/Admin/Addemployee'
import UpdateEmployee from './pages/Admin/updateEmployee'
import DeleteEmployee from './pages/Admin/deleteEmployee'
import AdminLogin from './pages/Admin/AdminLogin'
import Plan1 from './pages/customer/customer_home/plan1'
import Plan2 from './pages/customer/customer_home/plan2'
import Plan3 from './pages/customer/customer_home/plan3'
import UpdateClub from './pages/Admin/components/Updateformfranchise '
import Updatefranchise from './pages/Admin/updatefranchise'
import Deletefrachise from './pages/Admin/deletefranchise'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cSignup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/cHome' element={<CustomerHome />} />
        <Route path='/gym' element={<Gym />} />
        <Route path='/nutri' element={<Nutri />} />
        <Route path='/yoga' element={<Yoga />} />
        <Route path='/yourclub/:id' element={<YourClub />} />
        <Route path='/accounts/:id' element={<Accounts />} />
        <Route path='/c' element={<Carasol />} />
        <Route path='/plan1' element={<Plan1 />} />
        <Route path='/plan2' element={<Plan2 />} />
        <Route path='/plan3' element={<Plan3 />} />
        <Route path='/gymTutorial' element={<GymTutorial />} />
        <Route path='/test' element={<Test />} />

        <Route path='/Admin' element={<Admin />} />
        <Route path='/Admincustomer' element={<Admincustomer />} />
        <Route path='/Adminfranchise' element={<Adminfranchise />} />
        <Route path='/Adminemployee' element={<Adminemployee />} />
        <Route path='/Addfranchise' element={<Addfranchise />} />
        <Route path='/Addemployee' element={<Addadminemployee />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/updateEmployee' element={<UpdateEmployee />} />
        <Route path='/deleteEmployee' element={<DeleteEmployee />} />
        <Route path='/updatefrachise' element={<Updatefranchise />} />
        <Route path='/deletefrachise' element={<Deletefrachise />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={1000} />
    </BrowserRouter>
  )
}

export default App
