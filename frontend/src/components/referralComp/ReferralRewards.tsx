import React from 'react'

const ReferralRewards: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#F6F9FF] font-[Poppins] p-6'>
      {/* Page Heading */}
      <div className='mb-6'>
        <h1 className='text-[20px] font-semibold'>Referrals & Rewards</h1>
        <p className='text-sm text-gray-500'>
          Track referral program & performance
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* LEFT SECTION */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Rewards Assigned */}
          <div className='bg-white rounded-xl border p-5'>
            <h2 className='text-[16px] font-medium mb-4'>
              Rewards assigned in referral program
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
              {/* CARD 1 */}
              <div className='border rounded-xl p-3 flex flex-col items-center text-center h-full'>
                <div className='w-full rounded-lg bg-[#ECFAFF] p-3 mb-3 flex justify-center'>
                  <img
                    src='/Referrals/Tshirt.png'
                    alt='Tshirt'
                    className='h-20 object-contain'
                  />
                </div>

                <h3 className='text-[10px] font-medium mb-1'>
                  New Tokrigo Cotton T-shirt
                </h3>
                <p className='text-[10px] text-[#B3AFAF] mb-4'>
                  Get fast, reliable delivery
                </p>

                {/* FIXED BUTTON POSITION */}
                <div className='mt-auto'>
                  <button className='bg-[#EAFFF2] border border-[#007740] text-black text-[12px] px-4 py-1 rounded-md'>
                    2500 Coins
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className='border rounded-xl p-3 flex flex-col items-center text-center h-full'>
                <div className='w-full rounded-lg bg-[#FFFBEC] p-3 mb-3 flex justify-center'>
                  <img
                    src='/Referrals/Suitcase.png'
                    alt='Bag'
                    className='h-20 object-contain'
                  />
                </div>

                <h3 className='text-[10px] font-medium mb-1'>
                  Safari traveler bag
                </h3>
                <p className='text-[10px] text-[#B3AFAF] mb-4'>
                  Get fast, reliable delivery
                </p>

                <div className='mt-auto'>
                  <button className='bg-[#EAFFF2] border border-[#007740] text-black text-[12px] px-4 py-1 rounded-md'>
                    6000 Coins
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className='border rounded-xl p-3 flex flex-col items-center text-center h-full'>
                <div className='w-full rounded-lg bg-[#FFECF5] p-3 mb-3 flex justify-center'>
                  <img
                    src='/Referrals/Tickets.png'
                    alt='Tickets'
                    className='h-20 object-contain'
                  />
                </div>

                <h3 className='text-[10px] font-medium mb-1'>
                  Get 2 PVR Movie Tickets
                </h3>
                <p className='text-[10px] text-[#B3AFAF] mb-4'>
                  Get fast, reliable delivery
                </p>

                <div className='mt-auto'>
                  <button className='bg-[#EAFFF2] border border-[#007740] text-black text-[12px] px-4 py-1 rounded-md'>
                    4000 Coins
                  </button>
                </div>
              </div>

              {/* ADD MORE */}
              <div className='border border-dashed rounded-xl p-3 flex flex-col items-center justify-center text-center'>
                <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
                  +
                </div>
                <p className='text-[12px] text-gray-500'>
                  Add More Rewards in Referral Program
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className='bg-white rounded-xl border p-5'>
            <h2 className='text-[16px] font-medium mb-4'>
              Services in tokrigo referral ecosystem
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
              {[
                'Gamer Squad',
                'Service on Home',
                'Real State App',
                'Dating App'
              ].map((service, idx) => (
                <div
                  key={idx}
                  className='border rounded-xl p-3 flex flex-col items-center text-center'
                >
                  <div className='w-full rounded-lg bg-[#FFECF5] p-3 mb-3 flex justify-center'>
                    <img
                      src='/Referrals/Tshirt.png'
                      className='h-20 object-contain'
                    />
                  </div>

                  <h3 className='text-[10px] font-medium mb-2'>{service}</h3>

                  <button className='bg-[#FF3838] text-white text-[12px] px-4 py-1 rounded-md mt-auto'>
                    Stop Service
                  </button>
                </div>
              ))}

              {/* ADD MORE SERVICES */}
              <div className='border border-dashed rounded-xl p-3 flex flex-col items-center justify-center text-center'>
                <div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
                  +
                </div>
                <p className='text-[12px] text-gray-500'>
                  Add More Services in Referral Ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='bg-white rounded-xl border p-5'>
          <h2 className='text-[16px] font-medium mb-4'>
            Referrals : Top 3 Performing Customer
          </h2>

          <img
            src='/Referrals/Winnerimage.png'
            className='w-full h-[270px] object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default ReferralRewards
