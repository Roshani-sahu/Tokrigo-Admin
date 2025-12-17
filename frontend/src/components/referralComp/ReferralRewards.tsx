import React from 'react'

const ReferralRewards: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#F6F9FF] font-[Poppins] p-6'>
      {/* Page Heading */}
      <h1 className='text-[20px] font-semibold mb-6'>Referrals & Rewards</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Section */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Rewards Assigned */}
          <div className='bg-white rounded-2xl p-5'>
            <h2 className='text-[16px] font-medium mb-4'>
              Rewards assigned in referral program
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {/* Card 1 */}
              <div className='bg-[#ECFAFF] rounded-xl p-4 flex flex-col items-center gap-3'>
                <img
                  src='/Referrals/Tshirt.png'
                  alt='Tshirt'
                  className='w-16'
                />
                <p className='text-sm text-[#B3AFAF]'>T-Shirt</p>
                <button className='bg-[#EAFFF2] border border-[#007740] text-[#007740] px-4 py-1 rounded-full text-sm'>
                  120 Coins
                </button>
              </div>

              {/* Card 2 */}
              <div className='bg-[#FFFBEC] rounded-xl p-4 flex flex-col items-center gap-3'>
                <img
                  src='/Referrals/Tickets.png'
                  alt='Tickets'
                  className='w-16'
                />
                <p className='text-sm text-[#B3AFAF]'>Movie Tickets</p>
                <button className='bg-[#EAFFF2] border border-[#007740] text-[#007740] px-4 py-1 rounded-full text-sm'>
                  200 Coins
                </button>
              </div>

              {/* Card 3 */}
              <div className='bg-[#FFECF5] rounded-xl p-4 flex flex-col items-center gap-3'>
                <img
                  src='/Referrals/Suitcase.png'
                  alt='Suitcase'
                  className='w-16'
                />
                <p className='text-sm text-[#B3AFAF]'>Travel Bag</p>
                <button className='bg-[#EAFFF2] border border-[#007740] text-[#007740] px-4 py-1 rounded-full text-sm'>
                  500 Coins
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className='bg-white rounded-2xl p-5'>
            <h2 className='text-[16px] font-medium mb-4'>
              Services in Tokrigo referral ecosystem
            </h2>

            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <img src='/Referrals/staricon.png' className='w-5' />
                <span className='text-sm text-[#B3AFAF]'>Premium Access</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src='/Referrals/staricon.png' className='w-5' />
                <span className='text-sm text-[#B3AFAF]'>Exclusive Deals</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src='/Referrals/staricon.png' className='w-5' />
                <span className='text-sm text-[#B3AFAF]'>Bonus Coins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Graph */}
        <div className='bg-white rounded-2xl p-5 flex flex-col items-center'>
          <img
            src='/Referrals/Winnerimage.png'
            alt='Graph'
            className='w-[485px] h-[270px] object-contain'
          />
          <button className='mt-4 bg-[#FF3838] text-white px-6 py-2 rounded-lg'>
            View Winners
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReferralRewards
