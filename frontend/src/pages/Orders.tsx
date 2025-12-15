import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import OrderCards from '../components/ordersComp/OrderCards'
import OrderTable from '../components/ordersComp/OrderTable'
const Orders = () => {
  return (
    <DashboardLayout>
      <OrderCards />
      <div className='-mt-[520px] relative z-10'>
        <OrderTable />
      </div>
    </DashboardLayout>
  )
}

export default Orders
