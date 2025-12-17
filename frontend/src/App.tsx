import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Products from './pages/Products'
import Orders from './pages/Orders'
import CustomerManagement from './pages/CustomerManagement'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/customers' element={<CustomerManagement />} />
    </Routes>
  )
}

export default App
