import React, { useState, useEffect, useMemo } from 'react'
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
  id: i + 1,
  name: 'Tarun Jain',
  phone: '+91 ******708',
  wallet: 'Rs.45,000',
  referrals: 180,
  userType: i === 2 ? 'In-Direct' : 'Direct',
  rewards: '02',
  services: '03'
}))

const ReferralTable: React.FC = () => {
  const [search, setSearch] = useState('')
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const [selectAll, setSelectAll] = useState(false)

  /* ---------------- FILTER DATA ---------------- */
  const filteredReferrals = useMemo(() => {
    return initialReferrals.filter(r =>
      r.phone.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  /* ---------------- SELECT ALL ---------------- */
  useEffect(() => {
    const allSelected =
      filteredReferrals.length > 0 &&
      filteredReferrals.every(r => checked[r.id])

    setSelectAll(allSelected)
  }, [checked, filteredReferrals])

  const handleSelectAll = (value: boolean) => {
    const updated: Record<number, boolean> = {}
    filteredReferrals.forEach(r => {
      updated[r.id] = value
    })
    setChecked(prev => ({ ...prev, ...updated }))
    setSelectAll(value)
  }

  const handleCheckboxChange = (id: number) => {
    setChecked(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="bg-[#f7faff] min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5 mt-4">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:justify-between md:items-center">

          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded bg-[#EAF0FF] flex items-center justify-center">
              <img src="/icons/GraphIcon.png" className="w-8 h-8" />
            </div>
            <h2 className="text-lg md:text-[20px] font-semibold">
              Overview of referral program
            </h2>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative w-full md:w-[297px]">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Customers by phone..."
                className="w-full h-[37px] pl-9 pr-4 text-sm border rounded-lg focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 h-[28px] border rounded-lg text-sm text-gray-400">
                <Filter size={12} />
                Filter
              </button>
              <button className="border rounded-lg w-9 h-[28px] flex items-center justify-center">
                <ChevronLeft size={12} />
              </button>
              <button className="border rounded-lg w-9 h-[28px] flex items-center justify-center">
                <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#E1FFEC]">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={e => handleSelectAll(e.target.checked)}
                  />
                </th>
                <th className="p-3 text-center">Customer</th>
                <th className="p-3 text-center">Phone</th>
                <th className="p-3 text-center">Wallet</th>
                <th className="p-3 text-center">Referrals</th>
                <th className="p-3 text-center">User Type</th>
                <th className="p-3 text-center">Rewards</th>
                <th className="p-3 text-center">Services</th>
              </tr>
            </thead>

            <tbody>
              {filteredReferrals.map(r => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={!!checked[r.id]}
                      onChange={() => handleCheckboxChange(r.id)}
                    />
                  </td>
                  <td className="p-3 text-center">{r.name}</td>
                  <td className="p-3 text-center">{r.phone}</td>
                  <td className="p-3 text-center">{r.wallet}</td>
                  <td className="p-3 text-center">{r.referrals}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-md text-xs ${
                        r.userType === 'Direct'
                          ? 'bg-[#E1FFEC] text-[#039E2D]'
                          : 'bg-[#FFE8BC] text-[#FB7B0A]'
                      }`}
                    >
                      {r.userType}
                    </span>
                  </td>
                  <td className="p-3 text-center">{r.rewards}</td>
                  <td className="p-3 text-center">{r.services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden space-y-4">
          {filteredReferrals.map(r => (
            <div key={r.id} className="border rounded-xl p-4 text-sm">
              <div className="flex justify-between">
                <p className="font-semibold">{r.name}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    r.userType === 'Direct'
                      ? 'bg-[#E1FFEC] text-[#039E2D]'
                      : 'bg-[#FFE8BC] text-[#FB7B0A]'
                  }`}
                >
                  {r.userType}
                </span>
              </div>
              <p className="text-gray-500">{r.phone}</p>
              <div className="grid grid-cols-2 gap-2 mt-2 text-gray-600">
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
