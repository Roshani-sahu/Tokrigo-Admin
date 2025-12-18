import React from 'react'

const ReferralRewards: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#F6F9FF] font-[Poppins] p-4 md:p-6'>
      {/* Page Heading */}
      <h1 className='text-[18px] md:text-[20px] font-semibold'>
        Referrals & Rewards
      </h1>
      <p className='text-xs md:text-sm text-gray-500 mb-5'>
        Track referral program & performance
      </p>

      {/* TOP SECTION */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6'>
        {/* LEFT : Rewards */}
        <div className='lg:col-span-2 bg-white border border-gray-400 rounded-xl p-3 md:p-4'>
          <h2 className='text-[14px] md:text-[16px] font-medium mb-4'>
            Rewards assigned in referral program
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
            {/* Card 1 */}
            <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
              <div className='h-[140px] md:h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
                <img
                  src='/Referrals/Tshirt.png'
                  className='w-[80px] md:w-[120px] max-w-full'
                  alt='T-shirt'
                />
              </div>
              <p className='text-[12px] md:text-[13px] font-medium'>
                New Tokrigo Cotton T-shirt
              </p>
              <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#EAFFF2] border border-[#007740] text-black text-xs py-1 rounded'>
                🪙 2500 Coins
              </button>
            </div>

            {/* Card 2 */}
            <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
              <div className='h-[140px] md:h-[170px] bg-[#FFFBEC] rounded-lg flex items-center justify-center mb-2'>
                <img
                  src='/Referrals/Suitcase.png'
                  className='w-[80px] md:w-[120px] max-w-full'
                  alt='Suitcase'
                />
              </div>
              <p className='text-[12px] md:text-[13px] font-medium'>
                Safari traveler bag
              </p>
              <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#EAFFF2] border border-[#007740] text-black text-xs py-1 rounded'>
                🪙 6000 Coins
              </button>
            </div>

            {/* Card 3 */}
            <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
              <div className='h-[140px] md:h-[170px] bg-[#FFECF5] rounded-lg flex items-center justify-center mb-2'>
                <img
                  src='/Referrals/Tickets.png'
                  className='w-[80px] md:w-[120px] max-w-full'
                  alt='Movie Tickets'
                />
              </div>
              <p className='text-[12px] md:text-[13px] font-medium'>
                Get 2 PVR Movie Tickets
              </p>
              <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
                Get fast, reliable delivery with real-time tracking.
              </p>
              <button className='mt-auto bg-[#EAFFF2] border border-[#007740] text-black text-xs py-1 rounded'>
                🪙 4000 Coins
              </button>
            </div>

            {/* Add More */}
            <div className='border-2 border-dotted border-gray-400 rounded-xl flex flex-col items-center justify-center text-center p-3'>
              <div className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
                +
              </div>
              <p className='text-[12px] md:text-[13px] text-gray-500'>
                Add More Rewards in Referral Program
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT : Top Performers */}
        <div className='bg-white border border-gray-400 rounded-xl p-3 md:p-4'>
          <h2 className='text-[14px] md:text-[16px] font-medium mb-4'>
            Referrals : Top 3 Performing Customer
          </h2>
          <div className='h-[200px] md:h-[270px]'>
            <img
              src='/Referrals/Winnerimage.png'
              className='w-full h-full object-contain'
              alt='Top Performers'
            />
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className='mt-4 md:mt-6 bg-white border border-gray-400 rounded-xl p-3 md:p-4'>
        <h2 className='text-[14px] md:text-[16px] font-medium mb-4'>
          Services in tokrigo referral ecosystem
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4'>
          {/* Service Card 1 */}
          <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
            <div className='h-[140px] md:h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
              <img
                src='/Referrals/Tshirt.png'
                className='w-[80px] md:w-[120px] max-w-full'
                alt='Gamer Squad'
              />
            </div>
            <p className='text-[12px] md:text-[13px] font-medium'>
              Gamer Squad
            </p>
            <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
              Get fast, reliable delivery with real-time tracking.
            </p>
            <button className='mt-auto bg-[#FF3838] text-white text-xs py-1 rounded'>
              Stop Service
            </button>
          </div>

          {/* Service Card 2 */}
          <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
            <div className='h-[140px] md:h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
              <img
                src='/Referrals/Tshirt.png'
                className='w-[80px] md:w-[120px] max-w-full'
                alt='Service on Home'
              />
            </div>
            <p className='text-[12px] md:text-[13px] font-medium'>
              Service on Home
            </p>
            <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
              Get fast, reliable delivery with real-time tracking.
            </p>
            <button className='mt-auto bg-[#FF3838] text-white text-xs py-1 rounded'>
              Stop Service
            </button>
          </div>

          {/* Service Card 3 */}
          <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
            <div className='h-[140px] md:h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
              <img
                src='/Referrals/Tshirt.png'
                className='w-[80px] md:w-[120px] max-w-full'
                alt='Real State App'
              />
            </div>
            <p className='text-[12px] md:text-[13px] font-medium'>
              Real State App
            </p>
            <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
              Get fast, reliable delivery with real-time tracking.
            </p>
            <button className='mt-auto bg-[#FF3838] text-white text-xs py-1 rounded'>
              Stop Service
            </button>
          </div>

          {/* Service Card 4 */}
          <div className='border border-gray-400 rounded-xl p-2 flex flex-col'>
            <div className='h-[140px] md:h-[170px] bg-[#ECFAFF] rounded-lg flex items-center justify-center mb-2'>
              <img
                src='/Referrals/Tshirt.png'
                className='w-[80px] md:w-[120px] max-w-full'
                alt='Dating App'
              />
            </div>
            <p className='text-[12px] md:text-[13px] font-medium'>Dating App</p>
            <p className='text-[10px] md:text-[11px] text-gray-400 mb-2 line-clamp-2'>
              Get fast, reliable delivery with real-time tracking.
            </p>
            <button className='mt-auto bg-[#FF3838] text-white text-xs py-1 rounded'>
              Stop Service
            </button>
          </div>

          {/* Add More Services */}
          <div className='border-2 border-dotted border-gray-400 rounded-xl flex flex-col items-center justify-center text-center p-3'>
            <div className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
              +
            </div>
            <p className='text-[12px] md:text-[13px] text-gray-500'>
              Add More Services in Referral Ecosystem
            </p>
          </div>
        </div>
      </div>

      {/* Inline CSS for custom media queries and line-clamp */}
      <style jsx>{`
        @media (max-width: 640px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        @media (min-width: 640px) and (max-width: 767px) {
          .sm\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .xl\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  )
}

export default ReferralRewards
