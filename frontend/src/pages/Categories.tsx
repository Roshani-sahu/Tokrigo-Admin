import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import CategoryManagement from '../components/categoriesComp/CategoryManagement'

const CategoriesPage = () => {
  return (
    <DashboardLayout>
      <CategoryManagement />
    </DashboardLayout>
  )
}

export default CategoriesPage
