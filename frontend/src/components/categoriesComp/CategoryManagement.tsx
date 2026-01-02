import React, { useState, useRef, useEffect } from 'react'
import { MoreVertical, X, Edit, Trash2, Upload, Image as ImageIcon } from 'lucide-react'

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
  image?: string
  hideImage?: boolean
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
  onCancelEdit,
  image,
  hideImage = false
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
          <div className='flex items-center gap-3 flex-1'>
            {/* Circular Image */}
            {!hideImage && (
              <div className='w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0'>
                {image ? (
                  <img 
                    src={image} 
                    alt={label} 
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                    <ImageIcon size={14} className='text-gray-400' />
                  </div>
                )}
              </div>
            )}
            <span className='text-sm'>{label}</span>
          </div>
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
  <div className='flex items-center justify-between bg-green-grad text-white px-4 py-3 rounded-t-xl'>
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
  onSubmit: (value: string, image?: string) => void
  hideImage?: boolean
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, placeholder, onClose, onSubmit, hideImage = false }) => {
  const [value, setValue] = useState('')
  const [image, setImage] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim(), image)
      setValue('')
      setImage('')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a preview URL for the image
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setImage('')
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-96 max-h-[90vh] overflow-y-auto'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Upload Section */}
        {!hideImage && (
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Category Image (Optional)
            </label>
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 rounded-full overflow-hidden bg-gray-100 border border-gray-300 flex-shrink-0'>
                {image ? (
                  <div className='relative w-full h-full'>
                    <img 
                      src={image} 
                      alt="Preview" 
                      className='w-full h-full object-cover'
                    />
                    <button
                      onClick={removeImage}
                      className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 transform translate-x-1/2 -translate-y-1/2'
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <div className='w-full h-full flex items-center justify-center'>
                    <ImageIcon size={24} className='text-gray-400' />
                  </div>
                )}
              </div>
              <div className='flex-1'>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className='w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors flex items-center justify-center gap-2'
                >
                  <Upload size={16} />
                  Upload Image
                </button>
                <p className='text-xs text-gray-500 mt-1'>
                  Recommended: 400x400px, JPG, PNG or GIF
                </p>
              </div>
            </div>
          </div>
        )}


        {/* Name Input */}
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Category Name *
          </label>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DB875]'
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
        </div>
        
        <div className='flex gap-3 justify-end'>
          <button
            onClick={onClose}
            className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='px-4 py-2 bg-green-grad text-white rounded-md hover:bg-[#4a9a64] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!value.trim()}
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

interface CategoryItem {
  name: string
  image?: string
}

interface CategoryData {
  general: CategoryItem[]
  main: { [key: string]: CategoryItem[] }
  sub: { [key: string]: CategoryItem[] }
}

const INITIAL_CATEGORIES: CategoryData = {
  general: [
    { name: 'Grocery & kitchen',  },
    { name: 'Snacks & Drinks',  },
    { name: 'Beauty & Personal Care',  },
    { name: 'Household Essentials',  },
    { name: 'Shop by Store',  },
  ],
  main: {
    'Grocery & kitchen': [
      { name: 'Vegetables & Fruits', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' },
      { name: 'Atta, Rice & Dal', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Oil, Ghee & Masala', image: 'https://images.unsplash.com/photo-1548940740-204726a19be3?w=100&h=100&fit=crop&crop=center' },
      { name: 'Dairy, Bread & Eggs', image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=100&h=100&fit=crop&crop=center' },
      { name: 'Bakery & Biscuits', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&crop=center' },
      { name: 'Meat, Fish & Poultry', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Frozen Foods', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=100&h=100&fit=crop&crop=center' },
      { name: 'Canned & Jarred Goods', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' }
    ],
    'Snacks & Drinks': [
      { name: 'Snacks & Instant Food', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' },
      { name: 'Beverages', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cookies & Crackers', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=100&h=100&fit=crop&crop=center' },
      { name: 'Chocolates & Candies', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=100&h=100&fit=crop&crop=center' },
      { name: 'Nuts & Dry Fruits', image: 'https://images.unsplash.com/photo-1625652681030-5d5a61e59a20?w=100&h=100&fit=crop&crop=center' },
      { name: 'Energy & Protein Bars', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' }
    ],
    'Beauty & Personal Care': [
      { name: 'Personal Care', image: 'https://images.unsplash.com/photo-1522338242990-cbfc03d9c5a4?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cosmetics', image: 'https://images.unsplash.com/photo-1522338242990-cbfc03d9c5a4?w=100&h=100&fit=crop&crop=center' },
      { name: 'Hair Care', image: 'https://images.unsplash.com/photo-1629198720835-952f8970c6b8?w=100&h=100&fit=crop&crop=center' },
      { name: 'Skin Care', image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop&crop=center' },
      { name: 'Fragrances', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&h=100&fit=crop&crop=center' },
      { name: 'Oral Care', image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=100&h=100&fit=crop&crop=center' }
    ],
    'Household Essentials': [
      { name: 'Cleaning Supplies', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Laundry', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Kitchen Essentials', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center' },
      { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=100&h=100&fit=crop&crop=center' },
      { name: 'Stationery', image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Lighting', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center' }
    ],
    'Shop by Store': [
      { name: 'Premium Selection', image: 'https://images.unsplash.com/photo-1604719312566-8912e6597da6?w=100&h=100&fit=crop&crop=center' },
      { name: 'Organic Store', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' },
      { name: 'Local Favorites', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'International Foods', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=100&h=100&fit=crop&crop=center' }
    ],
  },
  sub: {
    'Vegetables & Fruits': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' },
      { name: 'Fresh Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' },
      { name: 'Fresh Fruits', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=100&h=100&fit=crop&crop=center' },
      { name: 'Exotics', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=100&h=100&fit=crop&crop=center' },
      { name: 'Organic Selection', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' },
      { name: 'Leafy Greens', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop&crop=center' },
      { name: 'Root Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop&crop=center' },
      { name: 'Tropical Fruits', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=100&h=100&fit=crop&crop=center' }
    ],
    'Atta, Rice & Dal': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Rice', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Atta', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Dal', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Pulses', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Flours', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Grains', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' },
      { name: 'Millets', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center' }
    ],
    'Oil, Ghee & Masala': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Oils', image: 'https://images.unsplash.com/photo-1548940740-204726a19be3?w=100&h=100&fit=crop&crop=center' },
      { name: 'Ghee', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop&crop=center' },
      { name: 'Spices', image: 'https://images.unsplash.com/photo-1596040033221-a1f4f8a8c9a0?w=100&h=100&fit=crop&crop=center' },
      { name: 'Masala Mixes', image: 'https://images.unsplash.com/photo-1596040033221-a1f4f8a8c9a0?w=100&h=100&fit=crop&crop=center' },
      { name: 'Herbs', image: 'https://images.unsplash.com/photo-1596040033221-a1f4f8a8c9a0?w=100&h=100&fit=crop&crop=center' },
      { name: 'Condiments', image: 'https://images.unsplash.com/photo-1530026405189-21e1d6c9e0b7?w=100&h=100&fit=crop&crop=center' },
      { name: 'Sauces', image: 'https://images.unsplash.com/photo-1530026405189-21e1d6c9e0b7?w=100&h=100&fit=crop&crop=center' }
    ],
    'Dairy, Bread & Eggs': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cheese', image: 'https://images.unsplash.com/photo-1561635741-6a3c6ce6d0f5?w=100&h=100&fit=crop&crop=center' },
      { name: 'Butter', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb1351d8d?w=100&h=100&fit=crop&crop=center' },
      { name: 'Yogurt', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop&crop=center' },
      { name: 'Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&crop=center' },
      { name: 'Eggs', image: 'https://images.unsplash.com/photo-1521701658425-07c5b45b9e48?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cream', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop&crop=center' }
    ],
    'Bakery & Biscuits': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=100&h=100&fit=crop&crop=center' },
      { name: 'Biscuits', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop&crop=center' },
      { name: 'Pastries', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop&crop=center' },
      { name: 'Rusk', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&crop=center' },
      { name: 'Breadsticks', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&crop=center' },
      { name: 'Crackers', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=100&h=100&fit=crop&crop=center' }
    ],
    'Meat, Fish & Poultry': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Chicken', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Mutton', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Fish', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=100&h=100&fit=crop&crop=center' },
      { name: 'Seafood', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=100&h=100&fit=crop&crop=center' },
      { name: 'Processed Meat', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100&h=100&fit=crop&crop=center' },
      { name: 'Cold Cuts', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=100&h=100&fit=crop&crop=center' }
    ],
    'Snacks & Instant Food': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Chips', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' },
      { name: 'Namkeen', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' },
      { name: 'Noodles', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' },
      { name: 'Pasta', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop&crop=center' },
      { name: 'Soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=100&h=100&fit=crop&crop=center' },
      { name: 'Ready to Eat', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' },
      { name: 'Popcorn', image: 'https://images.unsplash.com/photo-1611250503334-9332b4211021?w=100&h=100&fit=crop&crop=center' }
    ],
    'Beverages': [
      { name: 'All', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop&crop=center' },
      { name: 'Tea', image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=100&h=100&fit=crop&crop=center' },
      { name: 'Coffee', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop&crop=center' },
      { name: 'Juices', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&h=100&fit=crop&crop=center' },
      { name: 'Soft Drinks', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&h=100&fit=crop&crop=center' },
      { name: 'Energy Drinks', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&h=100&fit=crop&crop=center' },
      { name: 'Health Drinks', image: 'https://images.unsplash.com/photo-1620277875365-58d2d4c5a5f6?w=100&h=100&fit=crop&crop=center' },
      { name: 'Water', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=100&h=100&fit=crop&crop=center' }
    ],
  }
}

const PRODUCTS_BY_SUB_CATEGORY: { [key: string]: ProductItem[] } = {
  'Vegetables & Fruits': [
    { id: 1, name: 'Basmati Rice', sku: '113053', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Fresh Vegetables' },
    { id: 2, name: 'Brown Rice', sku: '113054', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Fresh Fruits' },
    { id: 3, name: 'Jasmine Rice', sku: '113055', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: false, subCategory: 'Fresh Vegetables' },
    { id: 4, name: 'Sushi Rice', sku: '113056', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Exotics' },
    { id: 5, name: 'Organic Potatoes', sku: '113057', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Organic Selection' },
  ],
  'Atta, Rice & Dal': [
    { id: 11, name: 'Whole Wheat Atta', sku: '113063', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Atta' },
    { id: 12, name: 'Toor Dal', sku: '113064', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Dal' },
    { id: 13, name: 'Moong Dal', sku: '113065', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=100&h=100&fit=crop&crop=center', enabled: false, subCategory: 'Dal' },
  ],
  'Oil, Ghee & Masala': [
    { id: 19, name: 'Sunflower Oil', sku: '113071', image: 'https://images.unsplash.com/photo-1548940740-204726a19be3?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Oils' },
    { id: 20, name: 'Desi Ghee', sku: '113072', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Ghee' },
  ],
  'Dairy, Bread & Eggs': [
    { id: 26, name: 'Fresh Milk', sku: '113078', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Milk' },
    { id: 27, name: 'White Bread', sku: '113079', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&crop=center', enabled: true, subCategory: 'Bread' },
  ],
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

  const handleGeneralSelect = (categoryName: string) => {
    setSelectedGeneral(categoryName)
    const newMainCats = categories.main[categoryName] || []
    setSelectedMain(newMainCats[0]?.name || '')
    const newSubCats = categories.sub[newMainCats[0]?.name || ''] || []
    setSelectedSub(newSubCats[0]?.name || 'All')
    setProducts(PRODUCTS_BY_SUB_CATEGORY[newMainCats[0]?.name || ''] || [])
  }

  const handleMainSelect = (categoryName: string) => {
    setSelectedMain(categoryName)
    const newSubCats = categories.sub[categoryName] || []
    setSelectedSub(newSubCats[0]?.name || 'All')
    setProducts(PRODUCTS_BY_SUB_CATEGORY[categoryName] || [])
  }

  const handleSubSelect = (categoryName: string) => {
    setSelectedSub(categoryName)
    const allProducts = PRODUCTS_BY_SUB_CATEGORY[selectedMain] || []
    if (categoryName === 'All') {
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter(product => product.subCategory === categoryName))
    }
  }

  const toggleProduct = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id ? { ...product, enabled: !product.enabled } : product
      )
    )
  }

  const handleAddCategory = (type: 'general' | 'main' | 'sub', value: string, image?: string) => {
    setCategories(prev => {
      if (type === 'general') {
        return {
          ...prev,
          general: [...prev.general, { name: value, image }],
          main: { ...prev.main, [value]: [] }
        }
      } else if (type === 'main') {
        return {
          ...prev,
          main: {
            ...prev.main,
            [selectedGeneral]: [...(prev.main[selectedGeneral] || []), { name: value, image }]
          },
          sub: { ...prev.sub, [value]: [{ name: 'All', image: '/icons/all.png' }] }
        }
      } else {
        return {
          ...prev,
          sub: {
            ...prev.sub,
            [selectedMain]: [...(prev.sub[selectedMain] || []), { name: value, image }]
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
        newGeneral[index] = { ...newGeneral[index], name: newName }
        
        const newMain = { ...prev.main }
        if (newMain[originalName]) {
          newMain[newName] = newMain[originalName]
          delete newMain[originalName]
        }
        
        return { ...prev, general: newGeneral, main: newMain }
      } else if (type === 'main') {
        const newMain = { ...prev.main }
        const categoryList = [...newMain[selectedGeneral]]
        categoryList[index] = { ...categoryList[index], name: newName }
        
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
        categoryList[index] = { ...categoryList[index], name: newName }
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
        const categoryName = prev.general[index].name
        const newGeneral = prev.general.filter((_, i) => i !== index)
        const newMain = { ...prev.main }
        delete newMain[categoryName]
        
        if (categoryName === selectedGeneral) {
          setSelectedGeneral(newGeneral[0]?.name || '')
          setSelectedMain('')
          setSelectedSub('All')
          setProducts([])
        }
        
        return { ...prev, general: newGeneral, main: newMain }
      } else if (type === 'main') {
        const categoryName = prev.main[selectedGeneral][index].name
        const newMain = { ...prev.main }
        newMain[selectedGeneral] = newMain[selectedGeneral].filter((_, i) => i !== index)
        
        const newSub = { ...prev.sub }
        delete newSub[categoryName]
        
        if (categoryName === selectedMain) {
          const newMainCats = newMain[selectedGeneral]
          setSelectedMain(newMainCats[0]?.name || '')
          setSelectedSub('All')
          setProducts(newMainCats[0]?.name ? PRODUCTS_BY_SUB_CATEGORY[newMainCats[0].name] || [] : [])
        }
        
        return { ...prev, main: newMain, sub: newSub }
      } else {
        const categoryName = prev.sub[selectedMain][index].name
        const newSub = { ...prev.sub }
        newSub[selectedMain] = newSub[selectedMain].filter((_, i) => i !== index)
        
        if (categoryName === selectedSub) {
          setSelectedSub(newSub[selectedMain][0]?.name || 'All')
        }
        
        return { ...prev, sub: newSub }
      }
    })
    
    setDeleteConfirm(null)
  }

  const getCategoryName = (type: 'general' | 'main' | 'sub', index: number): string => {
    if (type === 'general') return categories.general[index].name
    if (type === 'main') return categories.main[selectedGeneral][index].name
    return categories.sub[selectedMain][index].name
  }

  const getCategoryImage = (type: 'general' | 'main' | 'sub', index: number): string | undefined => {
    if (type === 'general') return categories.general[index].image
    if (type === 'main') return categories.main[selectedGeneral][index].image
    return categories.sub[selectedMain][index].image
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
                label={category.name}
                active={selectedGeneral === category.name}
                onClick={() => handleGeneralSelect(category.name)}
                onEdit={() => handleEditCategory('general', index)}
                onDelete={() => handleDeleteCategory('general', index)}
                isEditing={isEditing('general', index)}
                onSaveEdit={(newName) => handleSaveEdit(newName)}
                onCancelEdit={() => setEditingCategory(null)}
                hideImage={true}
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
                label={category.name}
                active={selectedMain === category.name}
                onClick={() => handleMainSelect(category.name)}
                onEdit={() => handleEditCategory('main', index)}
                onDelete={() => handleDeleteCategory('main', index)}
                isEditing={isEditing('main', index)}
                onSaveEdit={(newName) => handleSaveEdit(newName)}
                onCancelEdit={() => setEditingCategory(null)}
                image={category.image}
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
                label={category.name}
                active={selectedSub === category.name}
                onClick={() => handleSubSelect(category.name)}
                onEdit={() => handleEditCategory('sub', index)}
                onDelete={() => handleDeleteCategory('sub', index)}
                isEditing={isEditing('sub', index)}
                onSaveEdit={(newName) => handleSaveEdit(newName)}
                onCancelEdit={() => setEditingCategory(null)}
                image={category.image}
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
        onSubmit={(value, image) => handleAddCategory('general', value, image)}
        hideImage={true}
      />
      <Dialog
        isOpen={openDialog === 'main'}
        title='Add Main Category'
        placeholder='Enter main category name'
        onClose={() => setOpenDialog(null)}
        onSubmit={(value, image) => handleAddCategory('main', value, image)}
      />
      <Dialog
        isOpen={openDialog === 'sub'}
        title='Add Sub Category'
        placeholder='Enter sub category name'
        onClose={() => setOpenDialog(null)}
        onSubmit={(value, image) => handleAddCategory('sub', value, image)}
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