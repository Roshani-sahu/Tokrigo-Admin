import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Referral from './pages/Referral'
import CustomerManagement from './pages/CustomerManagement'
import DeliveryPartnersPage from './pages/DeliveryPartnersPage'
import Categories from './pages/Categories'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/customers' element={<CustomerManagement />} />
      <Route path='/referrals' element={<Referral />} />
      <Route path='/delivery-partners' element={<DeliveryPartnersPage />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  )
}

export default App
