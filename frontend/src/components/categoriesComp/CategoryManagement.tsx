import React, { useState } from 'react'
import { MoreVertical } from 'lucide-react'

type ListItemProps = {
  label: string
  active?: boolean
  showMenu?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
  label,
  active = false,
  showMenu = true
}) => {
  return (
    <div
      className={`group flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-colors duration-200
        ${
          active
            ? 'text-[#039E2D] bg-[#F3FFEF]'
            : 'text-gray-800 hover:bg-[#F3FFEF] hover:text-[#039E2D]'
        }`}
    >
      <span className='text-sm font-medium'>{label}</span>

      {showMenu && (
        <MoreVertical
          size={16}
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-700'
        />
      )}
    </div>
  )
}

const CardHeader = ({ title }: { title: string }) => (
  <div className='flex items-center justify-between bg-[#5DB875] text-white px-4 py-3 rounded-t-xl'>
    <div className='flex items-center gap-2 text-sm font-medium'>
      <img src='/icons/GraphIcon.png' alt='icon' className='w-4 h-4' />
      {title}
    </div>
    <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
      <img src='/icons/plusIcon.png' alt='Add' className='w-3 h-3' />
    </div>
  </div>
)

interface ProductItem {
  id: number
  name: string
  sku: string
  image: string
  enabled: boolean
}

const CategoryManagement: React.FC = () => {
  // State for product toggles
  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: 1,
      name: 'Basmati Rice',
      sku: '113053',
      image: '/icons/basmatiImg.png',
      enabled: true
    },
    {
      id: 2,
      name: 'Brown Rice',
      sku: '113054',
      image: '/icons/basmatiImg.png',
      enabled: true
    },
    {
      id: 3,
      name: 'Jasmine Rice',
      sku: '113055',
      image: '/icons/basmatiImg.png',
      enabled: false
    },
    {
      id: 4,
      name: 'Sushi Rice',
      sku: '113056',
      image: '/icons/basmatiImg.png',
      enabled: true
    },
    {
      id: 5,
      name: 'Wild Rice',
      sku: '113057',
      image: '/icons/basmatiImg.png',
      enabled: false
    },
    {
      id: 6,
      name: 'Arborio Rice',
      sku: '113058',
      image: '/icons/basmatiImg.png',
      enabled: true
    }
  ])

  // Toggle product enabled state
  const toggleProduct = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id ? { ...product, enabled: !product.enabled } : product
      )
    )
  }

  return (
    <div className='bg-[#f7faff] h-screen overflow-hidden p-4 md:p-6'>
      {/* PAGE TITLE */}
      <div className='mb-4 md:mb-6'>
        <h2 className='text-lg md:text-xl font-semibold text-gray-800'>
          Categories Management
        </h2>
        <p className='text-xs md:text-sm text-gray-500'>
          Organize your products into categories
        </p>
      </div>

      {/* GRID CONTAINER - Takes remaining height and is scrollable */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 h-[calc(100vh-100px)] md:h-[calc(100vh-140px)]'>
        {/* GENERAL CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm flex flex-col h-full'>
          <CardHeader title='General Category' />
          <div className='p-2 space-y-1 overflow-y-auto flex-grow'>
            <ListItem label='Grocery & kitchen' active />
            <ListItem label='Snacks & Drinks' />
            <ListItem label='Beauty & Personal Care' />
            <ListItem label='Household Essentials' />
            <ListItem label='Shop by Store' showMenu={false} />
            {/* Additional items for scroll */}
            <ListItem label='Beverages' />
            <ListItem label='Frozen Foods' />
            <ListItem label='Health & Wellness' />
            <ListItem label='Baby Care' />
            <ListItem label='Pet Care' />
            <ListItem label='Stationery' />
          </div>
        </div>

        {/* MAIN CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm flex flex-col h-full'>
          <CardHeader title='Main Category' />
          <div className='p-2 space-y-1 overflow-y-auto flex-grow'>
            <ListItem label='Vegetables & Fruits' />
            <ListItem label='Atta, Rice & Dal' />
            <ListItem label='Oil, Ghee & Masala' active />
            <ListItem label='Dairy, Bread & Eggs.' />
            <ListItem label='Bakery & Biscuits' />
            <ListItem label='Dry Fruits & Cereals' />
            <ListItem label='Chicken, meat & Fish' />
            <ListItem label='Kitchenware & Appliances' />
            {/* Additional items for scroll */}
            <ListItem label='Personal Care' />
            <ListItem label='Home Care' />
            <ListItem label='Beverages' />
            <ListItem label='Snacks & Instant Food' />
            <ListItem label='Baby Care' />
            <ListItem label='Pet Care' />
          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm flex flex-col h-full'>
          <CardHeader title='Sub Category' />
          <div className='p-2 space-y-1 overflow-y-auto flex-grow'>
            <ListItem label='All' active />
            <ListItem label='Fresh Vegetables' />
            <ListItem label='Fresh Fruits' />
            <ListItem label='Exotics' />
            <ListItem label='Coriander & Others' />
            <ListItem label='Flowers & Leaves' />
            <ListItem label='Trusted Organics' />
            <ListItem label='Seasonal' />
            <ListItem label='Freshly Cut & Sproutes' />
            <ListItem label='Hydroponic' />
            {/* Additional items for scroll */}
            <ListItem label='Root Vegetables' />
            <ListItem label='Leafy Greens' />
            <ListItem label='Berries' />
            <ListItem label='Citrus Fruits' />
            <ListItem label='Tropical Fruits' />
            <ListItem label='Organic Selection' />
          </div>
        </div>

        {/* ALL PRODUCTS */}
        <div className='bg-white rounded-xl shadow-sm flex flex-col h-full'>
          <CardHeader title='All Products' />
          <div className='p-3 space-y-3 overflow-y-auto flex-grow'>
            {products.map(product => (
              <div
                key={product.id}
                className='flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center overflow-hidden'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-8 h-8 object-contain'
                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-800'>
                      {product.name}
                    </p>
                    <p className='text-xs text-gray-500'>SKU: {product.sku}</p>
                  </div>
                </div>

                {/* TOGGLE SWITCH */}
                <button
                  onClick={() => toggleProduct(product.id)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    product.enabled ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Toggle ${product.name}`}
                  aria-pressed={product.enabled}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      product.enabled ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            ))}

            {/* Additional product items for scroll */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i + 7}
                className='flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200 opacity-60'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center overflow-hidden'>
                    <img
                      src='/icons/basmatiImg.png'
                      alt='Product'
                      className='w-8 h-8 object-contain'
                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-800'>
                      Additional Product {i + 1}
                    </p>
                    <p className='text-xs text-gray-500'>SKU: 11{3000 + i}</p>
                  </div>
                </div>

                {/* Disabled Toggle */}
                <div className='relative w-12 h-6 bg-gray-200 rounded-full'>
                  <span className='absolute top-1 left-1 w-4 h-4 bg-white rounded-full' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Indicator (only visible on mobile) */}
      <div className='md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-1'>
        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
        <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
        <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
        <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
      </div>
    </div>
  )
}

export default CategoryManagement
