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
      className={`group flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-all duration-200
        ${active ? 'text-[#039E2D] font-medium' : 'text-gray-800'}
        hover:bg-[#F3FFEF] hover:text-[#039E2D]`}
    >
      <span className='text-sm'>{label}</span>

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
      <img src='/icons/GraphIcon.png' alt='icon' className='w-5 h-5' />
      {title}
    </div>
    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200'>
      <img src='/icons/plusIcon.png' alt='Add' className='w-4 h-4' />
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
    <div className='bg-[#f7faff] h-screen overflow-hidden p-3 md:p-4 lg:p-6'>
      {/* PAGE TITLE */}
      <div className='mb-4 md:mb-5 lg:mb-6'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-800'>
          Categories Management
        </h1>
        <p className='text-xs md:text-sm text-gray-500 mt-1'>
          Organize your products into categories
        </p>
      </div>

      {/* GRID CONTAINER - Takes remaining height and is scrollable */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] lg:h-[calc(100vh-130px)]'>
        {/* GENERAL CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader title='General Category' />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <ListItem label='Grocery & kitchen' />
            <ListItem label='Snacks & Drinks' />
            <ListItem label='Beauty & Personal Care' />
            <ListItem label='Household Essentials' />
            <ListItem label='Shop by Store' showMenu={false} />
            <ListItem label='Beverages' />
            <ListItem label='Frozen Foods' />
            <ListItem label='Health & Wellness' />
            <ListItem label='Baby Care' />
            <ListItem label='Pet Care' />
            <ListItem label='Stationery' />
            <ListItem label='Home Decor' />
            <ListItem label='Electronics' />
            <ListItem label='Clothing & Apparel' />
            <ListItem label='Sports & Outdoors' />
          </div>
        </div>

        {/* MAIN CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader title='Main Category' />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <ListItem label='Vegetables & Fruits' />
            <ListItem label='Atta, Rice & Dal' />
            <ListItem label='Oil, Ghee & Masala' />
            <ListItem label='Dairy, Bread & Eggs.' />
            <ListItem label='Bakery & Biscuits' />
            <ListItem label='Dry Fruits & Cereals' />
            <ListItem label='Chicken, meat & Fish' />
            <ListItem label='Kitchenware & Appliances' />
            <ListItem label='Personal Care' />
            <ListItem label='Home Care' />
            <ListItem label='Beverages' />
            <ListItem label='Snacks & Instant Food' />
            <ListItem label='Baby Care' />
            <ListItem label='Pet Care' />
            <ListItem label='Pharmacy' />
            <ListItem label='Garden & Outdoor' />
            <ListItem label='Books & Media' />
            <ListItem label='Office Supplies' />
          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader title='Sub Category' />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <ListItem label='All' />
            <ListItem label='Fresh Vegetables' />
            <ListItem label='Fresh Fruits' />
            <ListItem label='Exotics' />
            <ListItem label='Coriander & Others' />
            <ListItem label='Flowers & Leaves' />
            <ListItem label='Trusted Organics' />
            <ListItem label='Seasonal' />
            <ListItem label='Freshly Cut & Sproutes' />
            <ListItem label='Hydroponic' />
            <ListItem label='Root Vegetables' />
            <ListItem label='Leafy Greens' />
            <ListItem label='Berries' />
            <ListItem label='Citrus Fruits' />
            <ListItem label='Tropical Fruits' />
            <ListItem label='Organic Selection' />
            <ListItem label='Herbs' />
            <ListItem label='Mushrooms' />
            <ListItem label='Peppers' />
            <ListItem label='Potatoes & Onions' />
          </div>
        </div>

        {/* ALL PRODUCTS */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader title='All Products' />
          <div className='p-3 space-y-3 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            {products.map(product => (
              <div
                key={product.id}
                className='flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-sm'
              >
                <div className='flex items-center gap-3 min-w-0 flex-1'>
                  <div className='w-10 h-10 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-8 h-8 object-contain'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-medium text-gray-800 truncate'>
                      {product.name}
                    </p>
                    <p className='text-xs text-gray-500 truncate'>
                      SKU: {product.sku}
                    </p>
                  </div>
                </div>

                {/* TOGGLE SWITCH */}
                <button
                  onClick={() => toggleProduct(product.id)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex-shrink-0 ml-2 ${
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
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i + 7}
                className='flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-sm opacity-80'
              >
                <div className='flex items-center gap-3 min-w-0 flex-1'>
                  <div className='w-10 h-10 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0'>
                    <img
                      src='/icons/basmatiImg.png'
                      alt='Product'
                      className='w-8 h-8 object-contain'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-medium text-gray-800 truncate'>
                      Additional Product {i + 1}
                    </p>
                    <p className='text-xs text-gray-500 truncate'>
                      SKU: 11{3000 + i}
                    </p>
                  </div>
                </div>

                {/* Disabled Toggle */}
                <div className='relative w-12 h-6 bg-gray-200 rounded-full flex-shrink-0 ml-2'>
                  <span className='absolute top-1 left-1 w-4 h-4 bg-white rounded-full' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Indicator (only visible on mobile) */}
      <div className='sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-1 border border-gray-200'>
        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
        <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
        <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
        <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* For Firefox */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
      `}</style>
    </div>
  )
}

export default CategoryManagement
