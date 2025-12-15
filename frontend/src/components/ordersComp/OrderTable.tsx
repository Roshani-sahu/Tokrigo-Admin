import React from 'react'

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
    { name: 'R.K. Dubey', payment: 'COD', status: 'Shipped' }
  ]

  return (
    <div className='bg-white rounded-xl p-4 font-[Poppins] w-[1136px] h-[738px]'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded bg-[#EAF0FF] flex items-center justify-center'>
            <img src='/icons/GraphIcon.png' alt='Graph' className='w-12 h-10' />
          </div>
          <h2 className='text-[18px] font-semibold text-[#2D2D2D]'>
            Complete Order Overview
          </h2>
        </div>
        <div className='flex items-center gap-3'>
          <input
            type='text'
            placeholder='Search Orders...'
            className='w-[297px] h-[35px] border border-gray-300 rounded-md px-3 text-[14px] outline-none'
          />
          <button className='border rounded-md px-3 py-1 text-[14px]'>
            Filter
          </button>
          <button className='border rounded-md px-2'>‹</button>
          <button className='border rounded-md px-2'>›</button>
        </div>
      </div>

      {/* Table */}
      <div className='overflow-hidden border rounded-lg'>
        <table className='w-full border-collapse text-[16px] text-[#2D2D2D]'>
          <thead className='bg-[#E1FFEC]'>
            <tr>
              <th className='text-center px-4 py-3'>Order IDs</th>
              <th className='text-center px-4 py-3'>Customer</th>
              <th className='text-center px-4 py-3'>Items</th>
              <th className='text-center px-4 py-3'>Amount</th>
              <th className='text-center px-4 py-3'>Payment Mode</th>
              <th className='text-center px-4 py-3'>Status</th>
              <th className='text-center px-4 py-3'>Date</th>
              <th className='text-center px-4 py-3'>Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className='border-b last:border-b-0'>
                <td className='px-4 py-3 text-center text-[#47449F]'>
                  [#c5b94]
                </td>
                <td className='px-4 py-3 text-center'>{row.name}</td>
                <td className='px-4 py-3 text-center'>8</td>
                <td className='px-4 py-3 text-center'>Rs.6000</td>

                {/* Payment */}
                <td className='px-4 py-3 text-center'>
                  {row.payment === 'UPI' ? (
                    <span className='px-3 py-1 rounded-md text-[14px] bg-[#FFEFCE] text-[#FF6600]'>
                      UPI
                    </span>
                  ) : (
                    <span className='px-3 py-1 rounded-md text-[14px] bg-[#ECFAFF] text-[#007F70]'>
                      COD
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className='px-4 py-3 text-center'>
                  {row.status === 'Shipped' && (
                    <span className='px-3 py-1 rounded-md text-[14px] bg-[#E8FFE8] text-[#16A34A]'>
                      Shipped
                    </span>
                  )}
                  {row.status === 'Processing' && (
                    <span className='px-3 py-1 rounded-md text-[14px] bg-[#FFF9DD78] text-[#FDA900]'>
                      Processing
                    </span>
                  )}
                  {row.status === 'Returned' && (
                    <span className='px-3 py-1 rounded-md text-[14px] bg-[#F8DDFF78] text-[#9634AD]'>
                      Returned
                    </span>
                  )}
                  {row.status === 'Cancelled' && (
                    <span className='px-3 py-1 rounded-md text-[14px] bg-[#FFE1E1] text-[#FF4343]'>
                      Cancelled
                    </span>
                  )}
                </td>

                <td className='px-4 py-3 text-center'>02-08-25</td>

                <td className='px-4 py-3 text-center'>
                  <button className='border border-[#0033FF] text-[#0033FF] rounded-md px-3 py-1 text-[14px]'>
                    See Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersTable
