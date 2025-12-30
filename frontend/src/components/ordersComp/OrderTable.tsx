import React from 'react'
import { TrendingUp , Search, SlidersHorizontal, ChevronLeft, ChevronRight} from "lucide-react";


const OrdersTable: React.FC = () => {
  const rows = [
    { name: 'Amisha Dubey', payment: 'UPI', status: 'Shipped' },
    { name: 'Abhishek Dubey', payment: 'COD', status: 'Processing' },
    { name: 'Umashree Joshi', payment: 'UPI', status: 'Returned' },
    { name: 'Ajeet Singh Bhadoriya', payment: 'COD', status: 'Cancelled' },
    { name: 'Pooja Jain', payment: 'UPI', status: 'Shipped' },
    { name: 'Yukti Jain', payment: 'COD', status: 'Processing' },
    { name: 'Aabha Dubey', payment: 'UPI', status: 'Returned' },
    { name: 'Ajay Dubey', payment: 'COD', status: 'Shipped' },
    { name: 'G.R. Dubey', payment: 'UPI', status: 'Cancelled' },
    { name: 'R.G. Dubey', payment: 'COD', status: 'Shipped' }
  ]

  return (
    <div className='bg-white rounded-xl p-3 md:p-4 w-full'>
      {/* Header */}
      <div className='flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4'>
        <div className='flex items-center gap-2'>
          <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center">
  <TrendingUp size={24} />
</div>
          <h2 className='text-[16px] md:text-[18px] font-semibold text-[#2D2D2D] whitespace-nowrap'>
            Complete Order Overview
          </h2>
        </div>
       <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative ">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products in stocks..."
              className="pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          <div className="flex gap-1">
            <button className="border rounded-lg p-2">
              <ChevronLeft size={16} />
            </button>
            <button className="border rounded-lg p-2">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Cards View - Visible on small screens */}
      <div className='block md:hidden space-y-3'>
        {rows.map((row, index) => (
          <div key={index} className='border rounded-lg p-3 space-y-2'>
            <div className='flex justify-between items-start'>
              <div>
                <div className='text-[#47449F] font-medium'>[#c5b94]</div>
                <div className='font-medium text-[#2D2D2D]'>{row.name}</div>
              </div>
              <div className='text-right'>
                <div className='text-[14px]'>8 items</div>
                <div className='font-medium'>Rs.6000</div>
              </div>
            </div>

            <div className='flex items-center justify-between pt-2 border-t'>
              <div className='flex flex-col gap-1'>
                <div className='text-sm text-gray-600'>Payment</div>
                {row.payment === 'UPI' ? (
                  <span className='px-3 py-1 rounded-md text-[12px] bg-[#FFEFCE] text-[#FF6600]'>
                    UPI
                  </span>
                ) : (
                  <span className='px-3 py-1 rounded-md text-[12px] bg-[#ECFAFF] text-[#007F70]'>
                    COD
                  </span>
                )}
              </div>

              <div className='flex flex-col gap-1 items-end'>
                <div className='text-sm text-gray-600'>Status</div>
                {row.status === 'Shipped' && (
                  <span className='px-3 py-1 rounded-md text-[12px] bg-[#E8FFE8] text-[#16A34A]'>
                    Shipped
                  </span>
                )}
                {row.status === 'Processing' && (
                  <span className='px-3 py-1 rounded-md text-[12px] bg-[#FFF9DD78] text-[#FDA900]'>
                    Processing
                  </span>
                )}
                {row.status === 'Returned' && (
                  <span className='px-3 py-1 rounded-md text-[12px] bg-[#F8DDFF78] text-[#9634AD]'>
                    Returned
                  </span>
                )}
                {row.status === 'Cancelled' && (
                  <span className='px-3 py-1 rounded-md text-[12px] bg-[#FFE1E1] text-[#FF4343]'>
                    Cancelled
                  </span>
                )}
              </div>
            </div>

            <div className='flex items-center justify-between pt-2 border-t'>
              <div className='text-sm text-gray-600'>
                Date: <span className='text-[#2D2D2D]'>02-08-25</span>
              </div>
              <button className='border border-[#0033FF] text-[#0033FF] rounded-md px-3 py-1 text-[12px]'>
                See Receipt
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Table View - Visible on medium and larger screens */}
      <div className='hidden md:block overflow-hidden  rounded-lg'>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse text-[16px] text-[#2D2D2D] min-w-[1024px]'>
            <thead className='bg-green-grad'>
              <tr className='text-white'>
                <th className='text-center px-4 py-5'>Order IDs</th>
                <th className='text-center px-4 py-5'>Customer</th>
                <th className='text-center px-4 py-5'>Items</th>
                <th className='text-center px-4 py-5'>Amount</th>
                <th className='text-center px-4 py-5'>Payment Mode</th>
                <th className='text-center px-4 py-5'>Status</th>
                <th className='text-center px-4 py-5'>Date</th>
                <th className='text-center px-4 py-5'>Action</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className='border-b last:border-b-0 hover:bg-gray-50'
                >
                  <td className='px-4 py-5 text-center text-[#47449F]'>
                    [#c5b94]
                  </td>
                  <td className='px-4 py-3 text-center'>{row.name}</td>
                  <td className='px-4 py-3 text-center'>8</td>
                  <td className='px-4 py-3 text-center'>Rs.6000</td>

                  {/* Payment */}
                  <td className='px-4 py-3 text-center'>
                    {row.payment === 'UPI' ? (
                      <span className='px-2 py-1 rounded-md text-[14px] bg-[#FFEFCE] text-[#FF6600] inline-block'>
                        UPI
                      </span>
                    ) : (
                      <span className='px-2 py-1 rounded-md text-[14px] bg-[#ECFAFF] text-[#007F70] inline-block'>
                        COD
                      </span>
                    )}
                  </td>

                  {/* Status */}
                  <td className='px-4 py-3 text-center'>
                    {row.status === 'Shipped' && (
                      <span className='px-3 py-1 rounded-md text-[14px] bg-[#E8FFE8] text-[#16A34A] inline-block'>
                        Shipped
                      </span>
                    )}
                    {row.status === 'Processing' && (
                      <span className='px-1 py-2 rounded-md text-[14px] bg-[#FFF9DD78] text-[#FDA900] inline-block'>
                        Processing
                      </span>
                    )}
                    {row.status === 'Returned' && (
                      <span className='px-1 py-2 rounded-md text-[14px] bg-[#F8DDFF78] text-[#9634AD] inline-block'>
                        Returned
                      </span>
                    )}
                    {row.status === 'Cancelled' && (
                      <span className='px-1 py-1 rounded-md text-[14px] bg-[#FFE1E1] text-[#FF4343] inline-block'>
                        Cancelled
                      </span>
                    )}
                  </td>

                  <td className='px-4 py-3 text-center'>02-08-25</td>

                  <td className='px-4 py-3 text-center'>
                    <button className='border border-[#0033FF] text-[#0033FF] rounded-md px-3 py-1 text-[14px] hover:bg-[#0033FF] hover:text-white transition-colors'>
                      See Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrdersTable
