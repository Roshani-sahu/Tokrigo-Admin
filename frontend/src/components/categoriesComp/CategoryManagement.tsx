import React, { useState } from 'react'
import { MoreVertical, X } from 'lucide-react'

type ListItemProps = {
  label: string
  active?: boolean
  showMenu?: boolean
  onClick?: () => void
}

const ListItem: React.FC<ListItemProps> = ({
  label,
  active = false,
  showMenu = true,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-all duration-200
        ${active ? 'text-[#039E2D] font-medium bg-[#F3FFEF]' : 'text-gray-800'}
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

type CardHeaderProps = {
  title: string
  onAddClick?: () => void
  showAdd?: boolean
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, onAddClick, showAdd = true }) => (
  <div className='flex items-center justify-between bg-[#5DB875] text-white px-4 py-3 rounded-t-xl'>
    <div className='flex items-center gap-2 text-sm font-medium'>
      <img src='/icons/GraphIcon.png' alt='icon' className='w-5 h-5' />
      {title}
    </div>
    {showAdd && (
      <button
        onClick={onAddClick}
        className='w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer'
      >
        <img src='/icons/plusIcon.png' alt='Add' className='w-4 h-4' />
      </button>
    )}
  </div>
)

type DialogProps = {
  isOpen: boolean
  title: string
  placeholder: string
  onClose: () => void
  onSubmit: (value: string) => void
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, placeholder, onClose, onSubmit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim())
      setValue('')
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={20} />
          </button>
        </div>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DB875] mb-6'
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <div className='flex gap-3 justify-end'>
          <button
            onClick={onClose}
            className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='px-4 py-2 bg-[#5DB875] text-white rounded-md hover:bg-[#4a9a64] transition-colors'
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

interface ProductItem {
  id: number
  name: string
  sku: string
  image: string
  enabled: boolean
  subCategory: string
}

interface CategoryData {
  general: string[]
  main: { [key: string]: string[] }
  sub: { [key: string]: string[] }
}

const INITIAL_CATEGORIES: CategoryData = {
  general: [
    'Grocery & kitchen',
    'Snacks & Drinks',
    'Beauty & Personal Care',
    'Household Essentials',
    'Shop by Store',
    'Beverages',
    'Frozen Foods',
    'Health & Wellness',
    'Baby Care',
    'Pet Care',
    'Stationery',
    'Home Decor',
    'Electronics',
    'Clothing & Apparel',
    'Sports & Outdoors'
  ],
  main: {
    'Grocery & kitchen': [
      'Vegetables & Fruits',
      'Atta, Rice & Dal',
      'Oil, Ghee & Masala',
      'Dairy, Bread & Eggs',
      'Bakery & Biscuits'
    ],
    'Snacks & Drinks': [
      'Snacks & Instant Food',
      'Beverages',
      'Cookies & Crackers'
    ],
    'Beauty & Personal Care': [
      'Personal Care',
      'Cosmetics',
      'Hair Care'
    ]
  },
  sub: {
    'Vegetables & Fruits': ['All', 'Fresh Vegetables', 'Fresh Fruits', 'Exotics', 'Organic Selection'],
    'Atta, Rice & Dal': ['All', 'Rice', 'Atta', 'Dal'],
    'Oil, Ghee & Masala': ['All', 'Oils', 'Ghee', 'Spices'],
    'Snacks & Instant Food': ['All', 'Chips', 'Namkeen', 'Noodles'],
    'Beverages': ['All', 'Tea', 'Coffee', 'Juices'],
    'Personal Care': ['All', 'Soaps', 'Shampoo', 'Deodorant']
  }
}

const PRODUCTS_BY_SUB_CATEGORY: { [key: string]: ProductItem[] } = {
  'Vegetables & Fruits': [
    {
      id: 1,
      name: 'Basmati Rice',
      sku: '113053',
      image: '/icons/basmatiImg.png',
      enabled: true,
      subCategory: 'Fresh Vegetables'
    },
    {
      id: 2,
      name: 'Brown Rice',
      sku: '113054',
      image: '/icons/basmatiImg.png',
      enabled: true,
      subCategory: 'Fresh Fruits'
    },
    {
      id: 3,
      name: 'Jasmine Rice',
      sku: '113055',
      image: '/icons/basmatiImg.png',
      enabled: false,
      subCategory: 'Fresh Vegetables'
    },
    {
      id: 4,
      name: 'Sushi Rice',
      sku: '113056',
      image: '/icons/basmatiImg.png',
      enabled: true,
      subCategory: 'Exotics'
    }
  ],
  'Atta, Rice & Dal': [
    {
      id: 5,
      name: 'Wild Rice',
      sku: '113057',
      image: '/icons/basmatiImg.png',
      enabled: false,
      subCategory: 'Rice'
    },
    {
      id: 6,
      name: 'Arborio Rice',
      sku: '113058',
      image: '/icons/basmatiImg.png',
      enabled: true,
      subCategory: 'Rice'
    }
  ]
}

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<CategoryData>(INITIAL_CATEGORIES)
  const [selectedGeneral, setSelectedGeneral] = useState('Grocery & kitchen')
  const [selectedMain, setSelectedMain] = useState('Vegetables & Fruits')
  const [selectedSub, setSelectedSub] = useState('All')
  
  const [products, setProducts] = useState<ProductItem[]>(PRODUCTS_BY_SUB_CATEGORY['Vegetables & Fruits'] || [])
  
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const mainCategories = categories.main[selectedGeneral] || []
  const subCategories = categories.sub[selectedMain] || []

  const handleGeneralSelect = (category: string) => {
    setSelectedGeneral(category)
    const newMainCats = categories.main[category] || []
    setSelectedMain(newMainCats[0] || '')
    const newSubCats = categories.sub[newMainCats[0] || ''] || []
    setSelectedSub(newSubCats[0] || '')
    setProducts(PRODUCTS_BY_SUB_CATEGORY[newMainCats[0] || ''] || [])
  }

  const handleMainSelect = (category: string) => {
    setSelectedMain(category)
    const newSubCats = categories.sub[category] || []
    setSelectedSub(newSubCats[0] || '')
    setProducts(PRODUCTS_BY_SUB_CATEGORY[category] || [])
  }

  const handleSubSelect = (category: string) => {
    setSelectedSub(category)
    setProducts(PRODUCTS_BY_SUB_CATEGORY[selectedMain] || [])
  }

  const toggleProduct = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id ? { ...product, enabled: !product.enabled } : product
      )
    )
  }

  const handleAddCategory = (type: 'general' | 'main' | 'sub', value: string) => {
    setCategories(prev => {
      if (type === 'general') {
        return {
          ...prev,
          general: [...prev.general, value]
        }
      } else if (type === 'main') {
        return {
          ...prev,
          main: {
            ...prev.main,
            [selectedGeneral]: [...(prev.main[selectedGeneral] || []), value]
          }
        }
      } else {
        return {
          ...prev,
          sub: {
            ...prev.sub,
            [selectedMain]: [...(prev.sub[selectedMain] || []), value]
          }
        }
      }
    })
    setOpenDialog(null)
  }

  return (
    <div className='bg-[#f7faff] h-screen  p-3 md:p-4 lg:p-6'>
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
          <CardHeader
            title='General Category'
            onAddClick={() => setOpenDialog('general')}
          />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            {categories.general.map(category => (
              <ListItem
                key={category}
                label={category}
                active={selectedGeneral === category}
                showMenu={category !== 'Shop by Store'}
                onClick={() => handleGeneralSelect(category)}
              />
            ))}
          </div>
        </div>

        {/* MAIN CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader
            title='Main Category'
            onAddClick={() => setOpenDialog('main')}
          />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            {mainCategories.map(category => (
              <ListItem
                key={category}
                label={category}
                active={selectedMain === category}
                onClick={() => handleMainSelect(category)}
              />
            ))}
          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader
            title='Sub Category'
            onAddClick={() => setOpenDialog('sub')}
          />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            {subCategories.map(category => (
              <ListItem
                key={category}
                label={category}
                active={selectedSub === category}
                onClick={() => handleSubSelect(category)}
              />
            ))}
          </div>
        </div>

        {/* ALL PRODUCTS */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader title='All Products' showAdd={false} />
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
          </div>
        </div>
      </div>

      {/* DIALOGS */}
      <Dialog
        isOpen={openDialog === 'general'}
        title='Add General Category'
        placeholder='Enter general category name'
        onClose={() => setOpenDialog(null)}
        onSubmit={(value) => handleAddCategory('general', value)}
      />
      <Dialog
        isOpen={openDialog === 'main'}
        title='Add Main Category'
        placeholder='Enter main category name'
        onClose={() => setOpenDialog(null)}
        onSubmit={(value) => handleAddCategory('main', value)}
      />
      <Dialog
        isOpen={openDialog === 'sub'}
        title='Add Sub Category'
        placeholder='Enter sub category name'
        onClose={() => setOpenDialog(null)}
        onSubmit={(value) => handleAddCategory('sub', value)}
      />

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
