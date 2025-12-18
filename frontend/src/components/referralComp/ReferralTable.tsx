import React, { useState, useEffect } from 'react'
import { Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react'

type Referral = {
  id: number
  name: string
  phone: string
  wallet: string
  referrals: number
  userType: 'Direct' | 'In-Direct'
  rewards: string
  services: string
}

const initialReferrals: Referral[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'Tarun jain',
  phone: '+91 ******708',
  wallet: 'Rs.45,000',
  referrals: 180,
  userType: i === 2 ? 'In-Direct' : 'Direct',
  rewards: '02',
  services: '03'
}))

const ReferralTable: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [checked, setChecked] = useState<boolean[]>(
    Array(initialReferrals.length).fill(false)
  )

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setSelectAll(isChecked)
    setChecked(Array(initialReferrals.length).fill(isChecked))
  }

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...checked]
    newChecked[index] = !newChecked[index]
    setChecked(newChecked)
  }

  useEffect(() => {
    const allChecked = checked.every(c => c)
    setSelectAll(allChecked)
  }, [checked])

  return (
    <div className='bg-[#f7faff] min-h-screen'>
      {/* PAGE HEADER */}

      {/* CARD */}
      <div className='bg-white rounded-2xl shadow-sm p-4 md:p-5 mt-4'>
        {/* CARD HEADER */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4'>
          {/* LEFT */}
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded bg-[#EAF0FF] flex items-center justify-center flex-shrink-0'>
              <img
                src='/icons/GraphIcon.png'
                alt='Graph'
                className='w-8 h-8 object-contain'
              />
            </div>
            <h2 className='text-[20px] font-semibold text-[#2D2D2D] whitespace-nowrap'>
              Overview of referral program
            </h2>
          </div>

          {/* RIGHT CONTROLS */}
          <div className='flex flex-wrap items-center gap-2'>
            <div className='relative'>
              <Search className='absolute left-3 top-2.5 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search Customers by phone...'
                className='pl-9 pr-4 text-sm border rounded-lg focus:outline-none w-[297px] h-[37px]'
              />
            </div>

            <button className='flex items-center text-gray-400 gap-1 px-3 h-[28px] border rounded-lg text-sm'>
              <Filter size={10} />
              Filter
            </button>

            <button className='border rounded-lg text-gray-400 w-9 h-[28px] flex items-center justify-center'>
              <ChevronLeft size={10} />
            </button>
            <button className='border rounded-lg text-gray-400 w-9 h-[28px] flex items-center justify-center'>
              <ChevronRight size={10} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className='hidden md:block rounded-xl overflow-x-auto'>
          <table className='w-full text-[16px] font-[300]'>
            <thead className='font-[300] text-gray-700'>
              <tr className='bg-[#E1FFEC]'>
                <th className='p-3'>
                  <input
                    type='checkbox'
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className='p-3 text-center'>Customers</th>
                <th className='p-3 text-center'>Phone No.</th>
                <th className='p-3 text-center'>Wallet Amount</th>
                <th className='p-3 text-center'>Direct Referrals</th>
                <th className='p-3 text-center'>User Type</th>
                <th className='p-3 text-center'>No. of Rewards Redeemed</th>
                <th className='p-3 text-center'>No. of Services Availed</th>
              </tr>
            </thead>

            <tbody>
              {initialReferrals.map((r, index) => (
                <tr
                  key={r.id}
                  className='border-b last:border-none hover:bg-gray-50'
                >
                  <td className='p-3'>
                    <input
                      type='checkbox'
                      checked={checked[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className='p-3 text-center'>{r.name}</td>
                  <td className='p-3 text-center'>{r.phone}</td>
                  <td className='p-3 text-center'>{r.wallet}</td>
                  <td className='p-3 text-center'>{r.referrals}</td>
                  <td className='p-3 text-center'>
                    {r.userType === 'Direct' ? (
                      <span className='px-3 py-1 rounded-md text-[#039E2D] bg-[#E1FFEC] text-sm'>
                        Direct Entry
                      </span>
                    ) : (
                      <span className='px-3 py-1 rounded-md text-[#FB7B0A] bg-[#FFE8BC] text-sm'>
                        In-Direct
                      </span>
                    )}
                  </td>
                  <td className='p-3 text-center'>{r.rewards}</td>
                  <td className='p-3 text-center'>{r.services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className='md:hidden space-y-4'>
          {initialReferrals.map((r, index) => (
            <div
              key={index}
              className='border rounded-xl p-4 shadow-sm text-sm space-y-2'
            >
              <div className='flex justify-between items-center'>
                <p className='font-semibold'>{r.name}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    r.userType === 'Direct'
                      ? 'bg-[#E1FFEC] text-[#039E2D]'
                      : 'bg-[#FFE8BC] text-[#FB7B0A]'
                  }`}
                >
                  {r.userType === 'Direct' ? 'Direct Entry' : 'In-Direct'}
                </span>
              </div>

              <p className='text-gray-500'>{r.phone}</p>

              <div className='grid grid-cols-2 gap-2 text-gray-600'>
                <p>Wallet: {r.wallet}</p>
                <p>Referrals: {r.referrals}</p>
                <p>Rewards: {r.rewards}</p>
                <p>Services: {r.services}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReferralTable
