import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

const products = [
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/daawat.png',
    price: 'Rs.1,000',
    status: 'Disabled'
  },
  {
    name: 'Toor Dal',
    img: '/icons/toordalImg.png',
    stock: 80,
    sold: 6,
    brand: 'Tata Sampann',
    brandImg: '/icons/tata.png',
    price: 'Rs.1,000',
    status: 'In-Stock'
  },
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/daawat.png',
    price: 'Rs.1,000',
    status: 'Re-Order'
  },
  {
    name: 'Toor Dal',
    img: '/icons/toordalImg.png',
    stock: 80,
    sold: 6,
    brand: 'Tata Sampann',
    brandImg: '/icons/tata.png',
    price: 'Rs.1,000',
    status: 'In-Stock'
  }
]

const statusStyles: Record<string, string> = {
  Disabled: 'bg-[#D4D7D8] text-[#424141]',
  'In-Stock': 'bg-[#E1FFEC] text-[#039E2D]',
  'Re-Order': 'bg-[#FFECC6] text-[#FF6E00]'
}

const Products = () => {
  return (
    <DashboardLayout>
      <div className='font-poppins'>
      {/* Header */}
      <div className='mb-6'>
        <h1 className='text-[18px] font-semibold text-[#111]'>
          Products Management
        </h1>
        <p className='text-[11px] font-light text-gray-500'>
          Manage your product inventory
        </p>
      </div>

      {/* Card */}
      <div className='bg-white rounded-2xl shadow-sm p-5'>
        {/* Top Actions */}
        <div className='flex items-center justify-between mb-4'>
          <button className='bg-[#546CFC] text-white text-[18px] font-semibold px-5 py-2 rounded-lg'>
            Add Products
          </button>

          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <button className='border px-3 py-1 rounded-md'>Filter</button>
            <button className='border px-2 py-1 rounded-md'>‹</button>
            <button className='border px-2 py-1 rounded-md'>›</button>
          </div>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-[#E1FFEC] h-[52px]'>
                <th className='px-4 text-left w-[156px]'>
                  <input type='checkbox' />
                </th>
                <th className='text-left'>Products</th>
                <th>Stock ↑</th>
                <th>Sold ↑↓</th>
                <th>Brand</th>
                <th>Price ↑↓</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {[...products, ...products].map((item, index) => (
                <tr
                  key={index}
                  className='border-b last:border-none hover:bg-gray-50'
                >
                  <td className='px-4 py-3'>
                    <input type='checkbox' />
                  </td>

                  <td className='flex items-center gap-3 py-3'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='w-8 h-8 rounded'
                    />
                    <span className='text-[#3B5BDB]'>{item.name}</span>
                  </td>

                  <td className='text-center'>{item.stock}</td>
                  <td className='text-center'>{item.sold}</td>

                  <td className='flex items-center gap-2 justify-center py-3'>
                    <img
                      src={item.brandImg}
                      alt={item.brand}
                      className='w-6 h-6'
                    />
                    <span className='text-[#3B5BDB]'>{item.brand}</span>
                  </td>

                  <td className='text-center'>{item.price}</td>

                  <td className='text-center'>
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-medium ${
                        statusStyles[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className='flex items-center justify-center gap-3 py-3'>
                    <img
                      src={
                        item.status === 'Disabled'
                          ? '/icons/Edit-disabled.png'
                          : '/icons/Edit.png'
                      }
                      alt='edit'
                      className='w-4 h-4 cursor-pointer'
                    />
                    <img
                      src='/icons/Delete.png'
                      alt='delete'
                      className='w-4 h-4 cursor-pointer'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </DashboardLayout>
  )
}

export default Products
