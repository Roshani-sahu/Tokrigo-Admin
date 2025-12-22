import React, { useState, useRef, useEffect } from 'react'
import { MoreVertical, X, Edit, Trash2 } from 'lucide-react'

type ListItemProps = {
  label: string
  active?: boolean
  showMenu?: boolean
  onClick?: () => void
  onEdit?: () => void
  onDelete?: () => void
  isEditing?: boolean
  onSaveEdit?: (newLabel: string) => void
  onCancelEdit?: () => void
}

const ListItem: React.FC<ListItemProps> = ({
  label,
  active = false,
  showMenu = true,
  onClick,
  onEdit,
  onDelete,
  isEditing = false,
  onSaveEdit,
  onCancelEdit
}) => {
  const [editValue, setEditValue] = useState(label)
  const [showDropdown, setShowDropdown] = useState(false)
  const editInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus()
      editInputRef.current.select()
    }
  }, [isEditing])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSave = () => {
    if (editValue.trim() && editValue.trim() !== label) {
      onSaveEdit?.(editValue.trim())
    } else {
      onCancelEdit?.()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setEditValue(label)
      onCancelEdit?.()
    }
  }

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDropdown(!showDropdown)
  }

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDropdown(false)
    onEdit?.()
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDropdown(false)
    onDelete?.()
  }

  return (
    <div
      className={`relative group flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-all duration-200
        ${active ? 'text-[#039E2D] font-medium bg-[#F3FFEF]' : 'text-gray-800'}
        hover:bg-[#F3FFEF] hover:text-[#039E2D] ${isEditing ? 'bg-white border border-green-300' : ''}`}
      onClick={!isEditing ? onClick : undefined}
    >
      {isEditing ? (
        <div className='flex-1'>
          <input
            ref={editInputRef}
            type='text'
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className='w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500'
            onBlur={handleSave}
          />
        </div>
      ) : (
        <>
          <span className='text-sm flex-1'>{label}</span>
          {showMenu && (
            <div className='relative' ref={dropdownRef}>
              <button
                onClick={handleMoreClick}
                className='p-1 rounded transition-colors hover:bg-gray-100'
              >
                <MoreVertical
                  size={16}
                  className={`transition-opacity duration-200 text-gray-500 hover:text-gray-700 ${
                    showDropdown ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className='absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 min-w-[120px] overflow-hidden'>
                  <button
                    onClick={handleEditClick}
                    className='w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors'
                  >
                    <Edit size={14} />
                    Edit
                  </button>
                  <button
                    onClick={handleDeleteClick}
                    className='w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </>
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

type DeleteConfirmDialogProps = {
  isOpen: boolean
  categoryName: string
  onClose: () => void
  onConfirm: () => void
}

const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({ 
  isOpen, 
  categoryName, 
  onClose, 
  onConfirm 
}) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>Delete Category</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={20} />
          </button>
        </div>
        <p className='text-gray-600 mb-6'>
          Are you sure you want to delete "<span className='font-semibold'>{categoryName}</span>"? 
          This action cannot be undone.
        </p>
        <div className='flex gap-3 justify-end'>
          <button
            onClick={onClose}
            className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors'
          >
            Delete
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
    // 'Shop by Store',
  ],
 main: {
    'Grocery & kitchen': [
      'Vegetables & Fruits',
      'Atta, Rice & Dal',
      'Oil, Ghee & Masala',
      'Dairy, Bread & Eggs',
      'Bakery & Biscuits',
      'Meat, Fish & Poultry',
      'Frozen Foods',
      'Canned & Jarred Goods'
    ],
    'Snacks & Drinks': [
      'Snacks & Instant Food',
      'Beverages',
      'Cookies & Crackers',
      'Chocolates & Candies',
      'Nuts & Dry Fruits',
      'Energy & Protein Bars'
    ],
    'Beauty & Personal Care': [
      'Personal Care',
      'Cosmetics',
      'Hair Care',
      'Skin Care',
      'Fragrances',
      'Oral Care'
    ],
    'Household Essentials': [
      'Cleaning Supplies',
      'Laundry',
      'Kitchen Essentials',
      'Home Decor',
      'Stationery',
      'Lighting'
    ],
    'Shop by Store': [
      'Premium Selection',
      'Organic Store',
      'Local Favorites',
      'International Foods'
    ],
    // 'Baby & Kids': [
    //   'Baby Food',
    //   'Diapers & Wipes',
    //   'Baby Care',
    //   'Kids Snacks',
    //   'Toys & Games'
    // ],
    // 'Health & Wellness': [
    //   'Vitamins & Supplements',
    //   'Sports Nutrition',
    //   'Ayurvedic Products',
    //   'Medical Supplies'
    // ],
    // 'Pet Supplies': [
    //   'Pet Food',
    //   'Pet Care',
    //   'Pet Toys',
    //   'Pet Accessories'
    // ]
  },
  sub: {
    'Vegetables & Fruits': ['All', 'Fresh Vegetables', 'Fresh Fruits', 'Exotics', 'Organic Selection', 'Leafy Greens', 'Root Vegetables', 'Tropical Fruits'],
    'Atta, Rice & Dal': ['All', 'Rice', 'Atta', 'Dal', 'Pulses', 'Flours', 'Grains', 'Millets'],
    'Oil, Ghee & Masala': ['All', 'Oils', 'Ghee', 'Spices', 'Masala Mixes', 'Herbs', 'Condiments', 'Sauces'],
    'Dairy, Bread & Eggs': ['All', 'Milk', 'Cheese', 'Butter', 'Yogurt', 'Bread', 'Eggs', 'Cream'],
    'Bakery & Biscuits': ['All', 'Cookies', 'Biscuits', 'Cakes', 'Pastries', 'Rusk', 'Breadsticks', 'Crackers'],
    'Meat, Fish & Poultry': ['All', 'Chicken', 'Mutton', 'Fish', 'Seafood', 'Processed Meat', 'Cold Cuts'],
    'Snacks & Instant Food': ['All', 'Chips', 'Namkeen', 'Noodles', 'Pasta', 'Soup', 'Ready to Eat', 'Popcorn'],
    'Beverages': ['All', 'Tea', 'Coffee', 'Juices', 'Soft Drinks', 'Energy Drinks', 'Health Drinks', 'Water'],
    'Personal Care': ['All', 'Soaps', 'Shampoo', 'Deodorant', 'Body Wash', 'Face Wash', 'Hand Sanitizer', 'Shaving'],
    'Cosmetics': ['All', 'Makeup', 'Lipstick', 'Foundation', 'Mascara', 'Nail Polish', 'Makeup Remover'],
    'Hair Care': ['All', 'Hair Oil', 'Conditioner', 'Hair Color', 'Styling', 'Serums', 'Hair Mask'],
    'Cleaning Supplies': ['All', 'Floor Cleaner', 'Dishwash', 'Detergent', 'Disinfectant', 'Glass Cleaner', 'Toilet Cleaner'],
    'Laundry': ['All', 'Detergent Powder', 'Detergent Liquid', 'Fabric Softener', 'Stain Remover', 'Bleach'],
    'Baby Food': ['All', 'Cereal', 'Formula', 'Purees', 'Snacks', 'Drinks', 'Teething Biscuits'],
    'Pet Food': ['All', 'Dry Food', 'Wet Food', 'Treats', 'Supplements', 'Puppy Food', 'Senior Food']
  }
}

const PRODUCTS_BY_SUB_CATEGORY: { [key: string]: ProductItem[] } = {
  'Vegetables & Fruits': [
    { id: 1, name: 'Basmati Rice', sku: '113053', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Fresh Vegetables' },
    { id: 2, name: 'Brown Rice', sku: '113054', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Fresh Fruits' },
    { id: 3, name: 'Jasmine Rice', sku: '113055', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Fresh Vegetables' },
    { id: 4, name: 'Sushi Rice', sku: '113056', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Exotics' },
    { id: 5, name: 'Organic Potatoes', sku: '113057', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Organic Selection' },
    { id: 6, name: 'Fresh Tomatoes', sku: '113058', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Fresh Vegetables' },
    { id: 7, name: 'Bananas', sku: '113059', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Fresh Fruits' },
    { id: 8, name: 'Spinach', sku: '113060', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Leafy Greens' },
    { id: 9, name: 'Avocado', sku: '113061', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Exotics' },
    { id: 10, name: 'Carrots', sku: '113062', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Root Vegetables' }
  ],
  'Atta, Rice & Dal': [
    { id: 11, name: 'Whole Wheat Atta', sku: '113063', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Atta' },
    { id: 12, name: 'Toor Dal', sku: '113064', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Dal' },
    { id: 13, name: 'Moong Dal', sku: '113065', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Dal' },
    { id: 14, name: 'Basmati Rice 5kg', sku: '113066', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Rice' },
    { id: 15, name: 'Brown Rice 2kg', sku: '113067', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Rice' },
    { id: 16, name: 'Ragi Flour', sku: '113068', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Flours' },
    { id: 17, name: 'Quinoa', sku: '113069', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Grains' },
    { id: 18, name: 'Chana Dal', sku: '113070', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Pulses' }
  ],
  'Oil, Ghee & Masala': [
    { id: 19, name: 'Sunflower Oil', sku: '113071', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Oils' },
    { id: 20, name: 'Desi Ghee', sku: '113072', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Ghee' },
    { id: 21, name: 'Garam Masala', sku: '113073', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Spices' },
    { id: 22, name: 'Turmeric Powder', sku: '113074', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Spices' },
    { id: 23, name: 'Olive Oil', sku: '113075', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Oils' },
    { id: 24, name: 'Chicken Masala', sku: '113076', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Masala Mixes' },
    { id: 25, name: 'Soy Sauce', sku: '113077', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Sauces' }
  ],
  'Dairy, Bread & Eggs': [
    { id: 26, name: 'Fresh Milk', sku: '113078', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Milk' },
    { id: 27, name: 'White Bread', sku: '113079', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Bread' },
    { id: 28, name: 'Farm Eggs', sku: '113080', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Eggs' },
    { id: 29, name: 'Cheddar Cheese', sku: '113081', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Cheese' },
    { id: 30, name: 'Butter 500g', sku: '113082', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Butter' },
    { id: 31, name: 'Greek Yogurt', sku: '113083', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Yogurt' }
  ],
  'Snacks & Instant Food': [
    { id: 32, name: 'Potato Chips', sku: '113084', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Chips' },
    { id: 33, name: 'Instant Noodles', sku: '113085', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Noodles' },
    { id: 34, name: 'Tomato Soup', sku: '113086', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Soup' },
    { id: 35, name: 'Mixed Namkeen', sku: '113087', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Namkeen' },
    { id: 36, name: 'Pasta Pack', sku: '113088', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Pasta' },
    { id: 37, name: 'Ready Biryani', sku: '113089', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Ready to Eat' }
  ],
  'Beverages': [
    { id: 38, name: 'Green Tea', sku: '113090', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Tea' },
    { id: 39, name: 'Coffee Beans', sku: '113091', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Coffee' },
    { id: 40, name: 'Orange Juice', sku: '113092', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Juices' },
    { id: 41, name: 'Energy Drink', sku: '113093', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Energy Drinks' },
    { id: 42, name: 'Mineral Water', sku: '113094', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Water' }
  ],
  'Personal Care': [
    { id: 43, name: 'Body Soap', sku: '113095', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Soaps' },
    { id: 44, name: 'Anti-dandruff Shampoo', sku: '113096', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Shampoo' },
    { id: 45, name: 'Deodorant Spray', sku: '113097', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Deodorant' },
    { id: 46, name: 'Face Wash', sku: '113098', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Face Wash' },
    { id: 47, name: 'Hand Sanitizer', sku: '113099', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Hand Sanitizer' }
  ],
  'Cleaning Supplies': [
    { id: 48, name: 'Floor Cleaner', sku: '113100', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Floor Cleaner' },
    { id: 49, name: 'Dishwashing Liquid', sku: '113101', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Dishwash' },
    { id: 50, name: 'Detergent Powder', sku: '113102', image: '/icons/basmatiImg.png', enabled: false, subCategory: 'Detergent' },
    { id: 51, name: 'Glass Cleaner', sku: '113103', image: '/icons/basmatiImg.png', enabled: true, subCategory: 'Glass Cleaner' }
  ]
}

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<CategoryData>(INITIAL_CATEGORIES)
  const [selectedGeneral, setSelectedGeneral] = useState('Grocery & kitchen')
  const [selectedMain, setSelectedMain] = useState('Vegetables & Fruits')
  const [selectedSub, setSelectedSub] = useState('All')
  
  const [products, setProducts] = useState<ProductItem[]>(PRODUCTS_BY_SUB_CATEGORY['Vegetables & Fruits'] || [])
  
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [editingCategory, setEditingCategory] = useState<{
    type: 'general' | 'main' | 'sub'
    index: number
    originalName: string
  } | null>(null)
  
  const [deleteConfirm, setDeleteConfirm] = useState<{
    type: 'general' | 'main' | 'sub'
    index: number
    name: string
  } | null>(null)

  const mainCategories = categories.main[selectedGeneral] || []
  const subCategories = categories.sub[selectedMain] || []

  const handleGeneralSelect = (category: string) => {
    setSelectedGeneral(category)
    const newMainCats = categories.main[category] || []
    setSelectedMain(newMainCats[0] || '')
    const newSubCats = categories.sub[newMainCats[0] || ''] || []
    setSelectedSub(newSubCats[0] || 'All')
    setProducts(PRODUCTS_BY_SUB_CATEGORY[newMainCats[0] || ''] || [])
  }

  const handleMainSelect = (category: string) => {
    setSelectedMain(category)
    const newSubCats = categories.sub[category] || []
    setSelectedSub(newSubCats[0] || 'All')
    setProducts(PRODUCTS_BY_SUB_CATEGORY[category] || [])
  }

  const handleSubSelect = (category: string) => {
    setSelectedSub(category)
    const allProducts = PRODUCTS_BY_SUB_CATEGORY[selectedMain] || []
    if (category === 'All') {
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter(product => product.subCategory === category))
    }
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
          general: [...prev.general, value],
          main: { ...prev.main, [value]: [] }
        }
      } else if (type === 'main') {
        return {
          ...prev,
          main: {
            ...prev.main,
            [selectedGeneral]: [...(prev.main[selectedGeneral] || []), value]
          },
          sub: { ...prev.sub, [value]: ['All'] }
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

  const handleEditCategory = (type: 'general' | 'main' | 'sub', index: number) => {
    setEditingCategory({ type, index, originalName: getCategoryName(type, index) })
  }

  const handleSaveEdit = (newName: string) => {
    if (!editingCategory) return

    const { type, index, originalName } = editingCategory

    setCategories(prev => {
      if (type === 'general') {
        const newGeneral = [...prev.general]
        newGeneral[index] = newName
        
        const newMain = { ...prev.main }
        if (newMain[originalName]) {
          newMain[newName] = newMain[originalName]
          delete newMain[originalName]
        }
        
        return { ...prev, general: newGeneral, main: newMain }
      } else if (type === 'main') {
        const newMain = { ...prev.main }
        const categoryList = [...newMain[selectedGeneral]]
        categoryList[index] = newName
        
        const newSub = { ...prev.sub }
        if (newSub[originalName]) {
          newSub[newName] = newSub[originalName]
          delete newSub[originalName]
        }
        
        newMain[selectedGeneral] = categoryList
        
        if (selectedMain === originalName) {
          setSelectedMain(newName)
        }
        
        return { ...prev, main: newMain, sub: newSub }
      } else {
        const newSub = { ...prev.sub }
        const categoryList = [...newSub[selectedMain]]
        categoryList[index] = newName
        newSub[selectedMain] = categoryList
        
        if (selectedSub === originalName) {
          setSelectedSub(newName)
        }
        
        return { ...prev, sub: newSub }
      }
    })
    
    setEditingCategory(null)
  }

  const handleDeleteCategory = (type: 'general' | 'main' | 'sub', index: number) => {
    const categoryName = getCategoryName(type, index)
    setDeleteConfirm({ type, index, name: categoryName })
  }

  const confirmDelete = () => {
    if (!deleteConfirm) return

    const { type, index } = deleteConfirm

    setCategories(prev => {
      if (type === 'general') {
        const categoryName = prev.general[index]
        const newGeneral = prev.general.filter((_, i) => i !== index)
        const newMain = { ...prev.main }
        delete newMain[categoryName]
        
        if (categoryName === selectedGeneral) {
          setSelectedGeneral(newGeneral[0] || '')
          setSelectedMain('')
          setSelectedSub('All')
          setProducts([])
        }
        
        return { ...prev, general: newGeneral, main: newMain }
      } else if (type === 'main') {
        const categoryName = prev.main[selectedGeneral][index]
        const newMain = { ...prev.main }
        newMain[selectedGeneral] = newMain[selectedGeneral].filter((_, i) => i !== index)
        
        const newSub = { ...prev.sub }
        delete newSub[categoryName]
        
        if (categoryName === selectedMain) {
          const newMainCats = newMain[selectedGeneral]
          setSelectedMain(newMainCats[0] || '')
          setSelectedSub('All')
          setProducts(newMainCats[0] ? PRODUCTS_BY_SUB_CATEGORY[newMainCats[0]] || [] : [])
        }
        
        return { ...prev, main: newMain, sub: newSub }
      } else {
        const categoryName = prev.sub[selectedMain][index]
        const newSub = { ...prev.sub }
        newSub[selectedMain] = newSub[selectedMain].filter((_, i) => i !== index)
        
        if (categoryName === selectedSub) {
          setSelectedSub(newSub[selectedMain][0] || 'All')
        }
        
        return { ...prev, sub: newSub }
      }
    })
    
    setDeleteConfirm(null)
  }

  const getCategoryName = (type: 'general' | 'main' | 'sub', index: number): string => {
    if (type === 'general') return categories.general[index]
    if (type === 'main') return categories.main[selectedGeneral][index]
    return categories.sub[selectedMain][index]
  }

  const isEditing = (type: 'general' | 'main' | 'sub', index: number) => {
    return editingCategory?.type === type && editingCategory.index === index
  }

  return (
    <div className='bg-[#f7faff] h-screen '>
      {/* PAGE TITLE */}
      <div className='mb-4 md:mb-5 lg:mb-6'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-800'>
          Categories Management
        </h1>
        <p className='text-xs md:text-sm text-gray-500 mt-1'>
          Organize your products into categories
        </p>
      </div>

      {/* GRID CONTAINER */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] lg:h-[calc(100vh-130px)]'>
        {/* GENERAL CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader
            title='General Category'
            onAddClick={() => setOpenDialog('general')}
          />
          <div className='p-2 space-y-[1px] overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            {categories.general.map((category, index) => (
              <ListItem
                key={`general-${index}`}
                label={category}
                active={selectedGeneral === category}
                // showMenu={category !== 'Shop by Store'}
                onClick={() => handleGeneralSelect(category)}
                onEdit={() => handleEditCategory('general', index)}
                onDelete={() => handleDeleteCategory('general', index)}
                isEditing={isEditing('general', index)}
                onSaveEdit={(newName) => handleSaveEdit(newName)}
                onCancelEdit={() => setEditingCategory(null)}
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
            {mainCategories.map((category, index) => (
              <ListItem
                key={`main-${index}`}
                label={category}
                active={selectedMain === category}
                onClick={() => handleMainSelect(category)}
                onEdit={() => handleEditCategory('main', index)}
                onDelete={() => handleDeleteCategory('main', index)}
                isEditing={isEditing('main', index)}
                onSaveEdit={(newName) => handleSaveEdit(newName)}
                onCancelEdit={() => setEditingCategory(null)}
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
            {subCategories.map((category, index) => (
              <ListItem
                key={`sub-${index}`}
                label={category}
                active={selectedSub === category}
                onClick={() => handleSubSelect(category)}
                onEdit={() => handleEditCategory('sub', index)}
                onDelete={() => handleDeleteCategory('sub', index)}
                isEditing={isEditing('sub', index)}
                onSaveEdit={(newName) => handleSaveEdit(newName)}
                onCancelEdit={() => setEditingCategory(null)}
              />
            ))}
          </div>
        </div>

        {/* ALL PRODUCTS */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full'>
          <CardHeader title='All Products' showAdd={false} />
          <div className='p-3 space-y-3 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            {products.length > 0 ? (
              products.map(product => (
                <div
                  key={product.id}
                  className='flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-sm'
                >
                  <div className='flex items-center gap-3 min-w-0 flex-1'>
                    <div className='w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0 border border-gray-200'>
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
                      <div className='flex items-center gap-2'>
                        <p className='text-xs text-gray-500 truncate'>
                          SKU: {product.sku}
                        </p>
                      </div>
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
              ))
            ) : (
              <div className='text-center py-8 text-gray-500'>
                <p className='text-sm'>No products found</p>
                <p className='text-xs mt-1'>Select a category to view products</p>
              </div>
            )}
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

      {/* DELETE CONFIRM DIALOG */}
      <DeleteConfirmDialog
        isOpen={deleteConfirm !== null}
        categoryName={deleteConfirm?.name || ''}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={confirmDelete}
      />

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