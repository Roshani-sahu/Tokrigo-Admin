import React from 'react'
import { MoreVertical, Plus } from 'lucide-react'

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
      className={`group flex items-center justify-between px-4 py-2 rounded-md cursor-pointer
        ${active ? 'text-[#039E2D] bg-[#F3FFEF]' : 'text-gray-800'}
        hover:bg-[#F3FFEF]`}
    >
      <span className='text-sm'>{label}</span>

      {showMenu && (
        <MoreVertical
          size={16}
          className='opacity-0 group-hover:opacity-100 transition text-gray-500'
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
    <Plus size={16} className='cursor-pointer' />
  </div>
)

const CategoryManagement: React.FC = () => {
  return (
    <div className='bg-[#f7faff] min-h-screen p-6'>
      {/* PAGE TITLE */}
      <div className='mb-4'>
        <h2 className='text-lg font-semibold text-gray-800'>
          Categories Management
        </h2>
        <p className='text-sm text-gray-500'>
          Organize your products into categories
        </p>
      </div>

      {/* GRID */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {/* GENERAL CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm'>
          <CardHeader title='General Category' />
          <div className='p-2 space-y-1'>
            <ListItem label='Grocery & kitchen' active />
            <ListItem label='Snacks & Drinks' />
            <ListItem label='Beauty & Personal Care' />
            <ListItem label='Household Essentials' />
            <ListItem label='Shop by Store' showMenu={false} />
          </div>
        </div>

        {/* MAIN CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm'>
          <CardHeader title='Main Category' />
          <div className='p-2 space-y-1'>
            <ListItem label='Vegetables & Fruits' />
            <ListItem label='Atta, Rice & Dal' />
            <ListItem label='Oil, Ghee & Masala' active />
            <ListItem label='Dairy, Bread & Eggs.' />
            <ListItem label='Bakery & Biscuits' />
            <ListItem label='Dry Fruits & Cereals' />
            <ListItem label='Chicken, meat & Fish' />
            <ListItem label='Kitchenware & Appliances' />
          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className='bg-white rounded-xl shadow-sm'>
          <CardHeader title='Sub Category' />
          <div className='p-2 space-y-1'>
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
          </div>
        </div>

        {/* ALL PRODUCTS */}
        <div className='bg-white rounded-xl shadow-sm'>
          <CardHeader title='All Products' />
          <div className='p-3 space-y-3'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className='flex items-center justify-between border rounded-lg p-3'
              >
                <div className='flex items-center gap-3'>
                  <img
                    src='/icons/basmatiImg.png'
                    alt='Basmati Rice'
                    className='w-10 h-10 object-contain bg-gray-100 rounded'
                  />
                  <div>
                    <p className='text-sm font-medium'>Basmati Rice</p>
                    <p className='text-xs text-gray-400'>SKU: 113053</p>
                  </div>
                </div>

                {/* TOGGLE */}
                <div className='w-10 h-5 bg-[#039E2D] rounded-full relative'>
                  <span className='absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full'></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryManagement
