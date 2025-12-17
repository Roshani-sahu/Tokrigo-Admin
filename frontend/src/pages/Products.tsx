import React, { useState } from 'react'
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
  },
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
  }
]

const statusStyles: Record<string, string> = {
  Disabled: 'bg-[#D4D7D8] text-[#424141]',
  'In-Stock': 'bg-[#E1FFEC] text-[#039E2D]',
  'Re-Order': 'bg-[#FFECC6] text-[#FF6E00]'
}

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const displayProducts = currentPage === 1 ? products : [...products].reverse()

  return (
    <DashboardLayout>
      <div className='font-poppins'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-xl font-semibold text-[#111]'>
            Products Management
          </h1>
          <p className='text-sm text-gray-500'>
            Manage your product inventory
          </p>
        </div>

        {/* Card */}
        <div className='bg-white rounded-2xl shadow-sm p-5'>
          {/* Top Actionsss */}
          <div className='flex items-center justify-between mb-4'>
            <button className='bg-[#546CFC] text-white text-[18px] font-semibold px-5 py-2 rounded-lg'>
              Add Products
            </button>

            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <button className='border px-3 py-1 rounded-md'>Filter</button>
              <button
                onClick={() => setCurrentPage(1)}
                className='border px-2 py-1 rounded-md hover:bg-gray-50'
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className='border px-2 py-1 rounded-md hover:bg-gray-50'
              >
                ›
              </button>
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
                {displayProducts.map((item, index) => (
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

      {/* CSS Media Queries for Mobile Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .font-poppins {
            padding: 0 16px;
          }

          /* Header Alignment */
          .mb-6 {
            margin-left: -12px;
            margin-top: -6px;
          }

          .bg-white {
            padding: 16px !important;
          }

          /* Top Actions Styling */
          .flex.items-center.justify-between.mb-4 {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }

          .bg-\\[#546CFC\\] {
            width: 100%;
            font-size: 16px !important;
            padding: 12px 16px !important;
          }

          .flex.items-center.gap-2 {
            width: 100%;
            justify-content: space-between;
          }

          .border.px-3 {
            flex: 1;
            text-align: center;
          }

          /* Hide Table on Mobile */
          table {
            display: none;
          }

          /* Mobile Cards */
          .mobile-products-container {
            display: block;
          }
        }

        @media (min-width: 769px) {
          /* Hide Mobile Cards on Desktop */
          .mobile-products-container {
            display: none;
          }

          /* Show Table on Desktop */
          table {
            display: table;
          }
        }
      `}</style>

      {/* Mobile Products Cards - Hidden on Desktop */}
      <div className='mobile-products-container'>
        {products.map((item, index) => (
          <div
            key={index}
            className='mobile-product-card'
            style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Top Row: Checkbox, Product Info, and Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flex: 1
                }}
              >
                <input
                  type='checkbox'
                  style={{
                    marginTop: '4px'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '6px'
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        color: '#3B5BDB',
                        fontWeight: '500',
                        fontSize: '14px',
                        marginBottom: '4px'
                      }}
                    >
                      {item.name}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src={item.brandImg}
                        alt={item.brand}
                        style={{
                          width: '20px',
                          height: '20px'
                        }}
                      />
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#6b7280'
                        }}
                      >
                        {item.brand}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <img
                  src={
                    item.status === 'Disabled'
                      ? '/icons/Edit-disabled.png'
                      : '/icons/Edit.png'
                  }
                  alt='edit'
                  style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                />
                <img
                  src='/icons/Delete.png'
                  alt='delete'
                  style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: Stats in Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                borderTop: '1px solid #e5e7eb',
                paddingTop: '12px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}
                  >
                    Stock
                  </span>
                  <span
                    style={{
                      fontWeight: '500'
                    }}
                  >
                    {item.stock}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}
                  >
                    Sold
                  </span>
                  <span
                    style={{
                      fontWeight: '500'
                    }}
                  >
                    {item.sold}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}
                  >
                    Price
                  </span>
                  <span
                    style={{
                      fontWeight: '500'
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}
                  >
                    Status
                  </span>
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '500',
                      backgroundColor: statusStyles[item.status].split(' ')[0],
                      color: statusStyles[item.status].split(' ')[1]
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Pagination */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '24px'
          }}
        >
          <button
            style={{
              border: '1px solid #d1d5db',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          >
            ‹ Previous
          </button>
          <span
            style={{
              fontSize: '14px',
              color: '#6b7280'
            }}
          >
            Page 1 of 2
          </span>
          <button
            style={{
              border: '1px solid #d1d5db',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          >
            Next ›
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Products
