import {
  Search,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react'

const stockData = [
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '884 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'In-Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '50 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'Re-Order',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '0 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'Out of Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '884 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'In-Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '884 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'In-Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '50 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'Re-Order',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '0 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'Out of Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '884 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'In-Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '884 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'In-Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '50 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'Re-Order',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '0 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'Out of Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  },
  {
    id: '#fc5b94',
    product: 'Marie Gold Biscuits',
    stock: '884 Units',
    threshold: '100 Units',
    reorder: '200 Units',
    status: 'In-Stock',
    supplier: 'Mr. Bean',
    time: '2 Days'
  }
]

const statusStyles: Record<string, string> = {
  'In-Stock': 'bg-green-100 text-green-700',
  'Re-Order': 'bg-orange-100 text-orange-600',
  'Out of Stock': 'bg-red-100 text-red-600'
}

const CurrentStockOverview = () => {
  return (
    <div className='bg-white rounded-2xl shadow-sm p-6 w-[102%] mt-8'>
      {/* Header */}
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4'>
        <h2 className='font-semibold text-[#585858] text-sm flex items-center gap-2'>
          📊 Current Stock Overview
        </h2>

        <div className='flex items-center gap-2'>
          {/* Search */}
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='Search products in stocks...'
              className='pl-9 pr-3 py-2 text-xs border rounded-md focus:outline-none'
            />
          </div>

          {/* Filter */}
          <button className='flex items-center gap-1 px-3 py-2 border rounded-md text-xs text-gray-600'>
            <SlidersHorizontal size={14} /> Filter
          </button>

          {/* Pagination */}
          <button className='p-2 border rounded-md'>
            <ChevronLeft size={14} />
          </button>
          <button className='p-2 border rounded-md'>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='rounded-xl overflow-x-auto'>
        <table className='w-full text-xs min-w-[900px]'>
          <thead className='bg-green-100  text-gray-600'>
            <tr>
              <th className='text-left px-4 py-4'>Products ID</th>
              <th className='text-left px-4 py-4'>Products</th>
              <th className='text-left px-4 py-4'>Current Stock</th>
              <th className='text-left px-4 py-4'>Threshold</th>
              <th className='text-left px-4 py-4'>Reorder Quantity</th>
              <th className='text-left px-4 py-4'>Status</th>
              <th className='text-left px-4 py-4'>Supplier</th>
              <th className='text-left px-4 py-4'>Reorder Time</th>
            </tr>
          </thead>

          <tbody>
            {stockData.map((item, i) => (
              <tr key={i} className='border-b last:border-none'>
                <td className='px-4 py-3 text-blue-600 font-medium'>
                  [{item.id}]
                </td>
                <td className='px-4 py-3'>{item.product}</td>
                <td className='px-4 py-3'>{item.stock}</td>
                <td className='px-4 py-3'>{item.threshold}</td>
                <td className='px-4 py-3'>{item.reorder}</td>
                <td className='px-4 py-3'>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-medium ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className='px-4 py-3'>{item.supplier}</td>
                <td className='px-4 py-3'>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CurrentStockOverview
