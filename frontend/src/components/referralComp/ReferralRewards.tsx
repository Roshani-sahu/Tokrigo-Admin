import React from 'react'

const ReferralRewards: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#F6F9FF] font-[Poppins] p-6'>
      {/* Page Heading */}
      <h1 className='text-[20px] font-semibold'>Referrals & Rewards</h1>
      <p className='text-sm text-gray-500 mb-5'>
        Track referral program & performance
      </p>

      {/* TOP SECTION */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* LEFT : Rewards */}
        <div className='lg:col-span-2 bg-white border border-gray-400 rounded-xl p-4'>
          <h2 className='text-[16px] font-medium mb-4'>
            Rewards assigned in referral program
          </h2>

          <div className='grid grid-cols-4 gap-4'>
            {/* Card */}
            <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
              <div className='h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
                <img src='/Referrals/Tshirt.png' className='w-[70px]' />
              </div>
              <p className='text-[10px] font-medium'>
                New Tokrigo Cotton T-shirt
              </p>
              <p className='text-[9px] text-gray-400 mb-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#EAFFF2] border border-[#007740] text-black text-xs py-1 rounded'>
                🪙 2500 Coins
              </button>
            </div>

            <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
              <div className='h-[170px] bg-[#FFFBEC] rounded-lg flex items-center justify-center mb-2'>
                <img src='/Referrals/Suitcase.png' className='w-[70px]' />
              </div>
              <p className='text-[10px] font-medium'>Safari traveler bag</p>
              <p className='text-[9px] text-gray-400 mb-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#EAFFF2] border border-[#007740] text-black text-xs py-1 rounded'>
                🪙 6000 Coins
              </button>
            </div>

            <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
              <div className='h-[170px] bg-[#FFECF5] rounded-lg flex items-center justify-center mb-2'>
                <img src='/Referrals/Tickets.png' className='w-[70px]' />
              </div>
              <p className='text-[10px] font-medium'>Get 2 PVR Movie Tickets</p>
              <p className='text-[9px] text-gray-400 mb-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#EAFFF2] border border-[#007740] text-black text-xs py-1 rounded'>
                🪙 4000 Coins
              </button>
            </div>

            {/* Add More */}
            <div className='border-2 border-dotted border-gray-400 rounded-xl flex flex-col items-center justify-center text-center p-3'>
              <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
                +
              </div>
              <p className='text-[10px] text-gray-500'>
                Add More Rewards in Referral Program
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT : Top Performers */}
        <div className='bg-white border border-gray-400 rounded-xl p-4'>
          <h2 className='text-[16px] font-medium mb-4'>
            Referrals : Top 3 Performing Customer
          </h2>
          <img
            src='/Referrals/Winnerimage.png'
            className='w-full h-[270px] object-contain'
          />
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className='mt-6 bg-white border border-gray-400 rounded-xl p-4'>
        <h2 className='text-[16px] font-medium mb-4'>
          Services in tokrigo referral ecosystem
        </h2>

        <div className='grid grid-cols-5 gap-4'>
          {[
            'Gamer Squad',
            'Service on Home',
            'Real State App',
            'Dating App'
          ].map((item, i) => (
            <div
              key={i}
              className='border border-gray-400 rounded-xl p-2 flex flex-col'
            >
              <div className='h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
                <img src='/Referrals/Tshirt.png' className='w-[70px]' />
              </div>
              <p className='text-[10px] font-medium'>{item}</p>
              <p className='text-[9px] text-gray-400 mb-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#FF3838] text-white text-xs py-1 rounded'>
                Stop Service
              </button>
            </div>
          ))}

          {/* Add More Services */}
          <div className='border-2 border-dotted border-gray-400 rounded-xl flex flex-col items-center justify-center text-center p-3'>
            <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
              +
            </div>
            <p className='text-[10px] text-gray-500'>
              Add More Services in Referral Ecosystem
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralRewards
