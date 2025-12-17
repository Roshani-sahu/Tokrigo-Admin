import React from 'react'
import OrderTable from './OrderTable'

const OrderCards: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#F6F9FF] p-6 font-[Poppins]'>
      {/* Heading */}
      <div className='mb-6 -mt-6 -ml-6'>
        <h1 className='text-[20px] font-semibold text-[#000000de]'>
          Orders Management
        </h1>
        <p className='text-sm text-gray-500'>
          Manage and track all customer orders
        </p>
      </div>
      {/* Cards Wrapper */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 -ml-6'>
        {/* Card */}
        {[
          {
            title: 'Order Completed',
            value: '5,000',
            bg: '#91FAAD',
            trend: '-2.08%'
          },
          {
            title: 'Out of Delivery',
            value: '1,250',
            bg: '#FFDD98',
            trend: '-1.24%'
          },
          {
            title: 'Order Processing',
            value: '8,430',
            bg: '#FCFF60',
            trend: '+3.12%'
          },
          {
            title: 'Order Cancelled',
            value: '320',
            bg: '#FF9990',
            trend: '-0.82%'
          }
        ].map((card, index) => (
          <div
            key={index}
            className='w-full sm:w-[95%] lg:w-[315px] h-[117px] rounded-[12px] bg-white px-5 py-4 shadow-sm flex flex-col justify-between mobile-order-card'
          >
            {/* Top section */}
            <div className='flex items-start justify-between -mt-1'>
              <p className='text-[16px] font-medium text-[#5A5A5A]'>
                {card.title}
              </p>
              <div
                className='w-[44px] h-[44px] rounded-full flex items-center justify-center'
                style={{ backgroundColor: card.bg }}
              >
                <img
                  src='/icons/OrderIcon.png'
                  alt='Order'
                  className='w-6 h-6'
                />
              </div>
            </div>

            {/* Amount */}
            <p className='text-[30px] font-semibold text-black leading-none'>
              {card.value}
            </p>

            {/* Trend */}
            <div className='flex items-center gap-2 mt-1'>
              <img
                src='/icons/RedTrianglesIcon.png'
                alt='trend'
                className='w-6 h-6'
              />
              <p className='text-[14px] text-[#FF3B30] font-medium'>
                {card.trend}
                <span className='text-[#5A5A5A] font-normal'>
                  {' '}
                  vs last month
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* OrderTable with overlap */}
      <div className='mt-6 sm:mt-[30px] lg:mt-[15px] relative z-10 -ml-6 -mr-6 sm:ml-0 sm:mr-0'>
        <OrderTable />
      </div>
      <style jsx>{`
        @media (max-width: 1023px) {
          .mobile-order-card {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }

          .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-left: -1.2rem !important; /* Change from -1rem to -1.2rem */
            margin-right: -0.8rem !important; /* Change from -0.5rem to -0.8rem */
            width: calc(100% + 2rem) !important; /* Change from 1rem to 2rem */
          }

          .min-h-screen.bg-\\[#F6F9FF\\].p-6.font-\\[Poppins\\] {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .mb-6.-mt-8.-ml-6 {
            margin-left: -1rem !important;
            margin-top: 0 !important;
            margin-bottom: 1.5rem !important;
            width: 100% !important;
            padding-right: 1rem !important;
          }

          .mt-6.sm\\:mt-\\[30px\\].lg\\:mt-\\[15px\\].-ml-6.-mr-6.sm\\:ml-0.sm\\:mr-0 {
            margin-left: -1.2rem !important; /* Change from -0.5rem to -1.2rem */
            margin-right: -0.8rem !important; /* Change from -0.5rem to -0.8rem */
            width: calc(100% + 2rem) !important; /* Change from 1rem to 2rem */
          }
        }

        @media (min-width: 1024px) {
          .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 2rem !important;
            margin-left: -1.5rem !important;
          }

          .mobile-order-card {
            width: 95% !important;
            max-width: 315px !important;
          }
        }
      `}</style>{' '}
    </div>
  )
}

export default OrderCards
