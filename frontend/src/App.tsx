import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Referral from './pages/Referral'
import CustomerManagement from './pages/CustomerManagement'
import DeliveryPartnersPage from './pages/DeliveryPartnersPage'
import Categories from './pages/Categories'
import AddProduct from './pages/AddProduct'
import Settings  from './pages/Settings'
import EditProduct  from './pages/EditProduct'
import Inventory  from './pages/Inventory'
import OfferPage  from './pages/OfferPage'
import CustomerSupportTickets from './pages/CustomerSupportTickets'
import BrandsAndCollaboration from './pages/BrandsAndCollaboration'
import OffersAds from './pages/OffersAdsPage'
import ReportsAnalytics from './pages/ReportsAnalytics'
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
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/edit-product' element={<EditProduct />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/coupons' element={<OfferPage />} />
      <Route path='/support' element={<CustomerSupportTickets />} />
      <Route path='/brands' element={<BrandsAndCollaboration />} />
      <Route path='/offers' element={<OffersAds />} />
      <Route path='/reports' element={<ReportsAnalytics />} />
    </Routes>
  )
}

export default App
