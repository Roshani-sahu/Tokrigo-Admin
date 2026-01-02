import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from "react-router-dom";
import DashboardLayout from '../layouts/DashboardLayout'
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal, Trash2 } from 'lucide-react'

const products = [
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/DaawatIcon.png',
    price: 'Rs.1,000',
    status: 'Disabled'
  },
  {
    name: 'Toor Dal',
    img: '/icons/toordalImg.png',
    stock: 80,
    sold: 6,
    brand: 'Tata Sampann',
    brandImg: '/icons/tataIcon.png',
    price: 'Rs.1,000',
    status: 'In-Stock'
  },
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/DaawatIcon.png',
    price: 'Rs.1,000',
    status: 'Re-Order'
  },
  {
    name: 'Toor Dal',
    img: '/icons/toordalImg.png',
    stock: 80,
    sold: 6,
    brand: 'Tata Sampann',
    brandImg: '/icons/tataIcon.png',
    price: 'Rs.1,000',
    status: 'In-Stock'
  },
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/DaawatIcon.png',
    price: 'Rs.1,000',
    status: 'Disabled'
  },
  {
    name: 'Toor Dal',
    img: '/icons/toordalImg.png',
    stock: 80,
    sold: 6,
    brand: 'Tata Sampann',
    brandImg: '/icons/tataIcon.png',
    price: 'Rs.1,000',
    status: 'In-Stock'
  },
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/DaawatIcon.png',
    price: 'Rs.1,000',
    status: 'Re-Order'
  },
  {
    name: 'Toor Dal',
    img: '/icons/toordalImg.png',
    stock: 80,
    sold: 6,
    brand: 'Tata Sampann',
    brandImg: '/icons/tataIcon.png',
    price: 'Rs.1,000',
    status: 'In-Stock'
  },
  {
    name: 'Basmati Rice',
    img: '/icons/basmatiImg.png',
    stock: 80,
    sold: 0,
    brand: 'Daawat',
    brandImg: '/icons/DaawatIcon.png',
    price: 'Rs.1,000',
    status: 'Disabled'
  }
]

const statusStyles: Record<string, string> = {
  Disabled: 'bg-[#D4D7D8] text-[#424141]',
  'In-Stock': 'bg-[#E1FFEC] text-[#039E2D]',
  'Re-Order': 'bg-[#FFECC6] text-[#FF6E00]'
}

const DeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title = "Delete Product",
  description = "Are you sure you want to delete this product? This action cannot be undone.",
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6">
        {/* HEADER */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        {/* MESSAGE */}
        <p className="text-sm text-gray-500 mb-6">
          {description}
        </p>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [filterOpen, setFilterOpen] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<number | null>(null)
  const [productList, setProductList] = useState(products)
  
  const itemsPerPage = 5
  
  // Filter and search products
  const filteredProducts = useMemo(() => {
    return productList.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'All' || product.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [productList, searchTerm, statusFilter])
  
  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  
  useEffect(() => {
    setSelectedItems([])
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1)
    }
  }, [currentPage, totalPages])

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems(displayProducts.map((_, index) => index))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index))
    } else {
      setSelectedItems([...selectedItems, index])
    }
  }
  
  const handleDeleteSelected = () => {
    const selectedProductIndexes = selectedItems.map(i => startIndex + i)
    const updatedProducts = productList.filter((_, index) => !selectedProductIndexes.includes(index))
    setProductList(updatedProducts)
    setSelectedItems([])
    setShowDeleteConfirm(false)
  }
  
  const handleDeleteSingle = (productIndex: number) => {
    setItemToDelete(productIndex)
    setShowDeleteConfirm(true)
  }

  const confirmDeleteSingle = () => {
    if (itemToDelete !== null) {
      const actualIndex = startIndex + itemToDelete
      const updatedProducts = productList.filter((_, index) => index !== actualIndex)
      setProductList(updatedProducts)
      setItemToDelete(null)
      setShowDeleteConfirm(false)
    }
  }
  
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <DashboardLayout>
      <div className='font-poppins'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-xl font-semibold text-[#111]'>
            Products Management
          </h1>
          <p className='text-sm text-gray-500'>Manage your product inventory</p>
        </div>

        {/* Card */}
        <div className='bg-white rounded-2xl shadow-sm p-5'>
          {/* Top Actions */}
          <div className='flex flex-col md:flex-row items-center justify-between mb-4'>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="relative w-[280px]">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products in stocks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setFilterOpen((p) => !p)}
                  className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>

                {filterOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                    {["All", "In-Stock", "Re-Order", "Disabled"].map(
                      (status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setStatusFilter(status);
                            setCurrentPage(1);
                            setFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                            statusFilter === status
                              ? "bg-gray-100 font-medium"
                              : ""
                          }`}
                        >
                          {status}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="border rounded-lg p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>

                

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="border rounded-lg p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {selectedItems.length > 0 && (
                <button 
                  onClick={() => setShowDeleteConfirm(true)}
                  className="flex items-center gap-1 bg-red-500 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete ({selectedItems.length})
                </button>
              )}
            </div>


            <div>
 <button onClick={() => navigate("/add-product")} className='bg-[#546CFC] mt-3 md:mt-0 text-white text-[18px] font-semibold px-5 py-2 rounded-lg'>
              Add Products
            </button>
           </div>


          </div>

          {/* Table (Desktop) */}
          <div className='hidden md:block overflow-x-auto rounded-xl'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='bg-green-grad text-white h-[52px]'>
                  <th className='px-4 text-left w-[60px]'>
                    <input
                      type='checkbox'
                      checked={
                        selectedItems.length === displayProducts.length &&
                        displayProducts.length > 0
                      }
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className='text-left '>Products</th>
                  <th>Stock ↑</th>
                  <th>Sold ↑↓</th>
                  <th className='text-left pl-10'>Brand</th>
                  <th>Price ↑↓</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {displayProducts.map((item, index) => (
                  <tr
                    key={index}
                    className='border-b last:border-none hover:bg-gray-50'
                  >
                    <td className='px-4 py-6'>
                      <input
                        type='checkbox'
                        checked={selectedItems.includes(index)}
                        onChange={() => handleSelectItem(index)}
                      />
                    </td>

                    <td className='py-3'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={item.img}
                          alt={item.name}
                          className='w-8 h-8 rounded'
                        />
                        <span className='text-[#3B5BDB]'>{item.name}</span>
                      </div>
                    </td>

                    <td className='text-center'>{item.stock}</td>
                    <td className='text-center'>{item.sold}</td>

                    <td className='py-3 pl-10'>
                      <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-1.5 rounded-md'>
                          <img
                            src={item.brandImg}
                            alt={item.brand}
                            className='w-5 h-5'
                          />
                        </div>
                        <span className='text-[#3B5BDB]'>{item.brand}</span>
                      </div>
                    </td>

                    <td className='text-center'>{item.price}</td>

                    <td className='text-center'>
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          statusStyles[item.status]
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className='flex items-center justify-center gap-3 py-6'>
                      <img  
                        onClick={() => navigate("/edit-product")}
                        src={
                          item.status === 'Disabled'
                            ? '/icons/Edit-disabled.png'
                            : '/icons/Edit.png'
                        }
                        alt='edit'
                        className='w-4 h-4 cursor-pointer'
                      />
                      <img
                        onClick={() => handleDeleteSingle(index)}
                        src='/icons/Delete.png'
                        alt='delete'
                        className='w-4 h-4 cursor-pointer hover:opacity-70'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards (Mobile) */}
          <div className="md:hidden space-y-4">
            {displayProducts.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-4 shadow-sm text-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <img src={item.brandImg} alt={item.brand} className="w-4 h-4" />
                        <span className="text-xs text-gray-500">{item.brand}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-[10px] font-medium ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-50 my-3">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Stock</p>
                    <p className="font-medium text-gray-700">{item.stock}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Sold</p>
                    <p className="font-medium text-gray-700">{item.sold}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Price</p>
                    <p className="font-medium text-[#546CFC]">{item.price}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => navigate("/edit-product")}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-600 font-medium hover:bg-gray-100 transition-colors"
                  >
                    <img src="/icons/Edit.png" alt="edit" className="w-3.5 h-3.5" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSingle(index)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-50 text-red-500 font-medium hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Status */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t">
            <div className="text-sm text-gray-500">
              Showing {filteredProducts.length > 0 ? startIndex + 1 : 0}-
              {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </div>
          </div>
        </div>
        
        {/* Delete Confirmation Modal */}
        <DeleteConfirmModal
          open={showDeleteConfirm}
          onClose={() => {
            setShowDeleteConfirm(false);
            setItemToDelete(null);
          }}
          onConfirm={itemToDelete !== null ? confirmDeleteSingle : handleDeleteSelected}
          title={itemToDelete !== null ? "Delete Product" : "Delete Selected Products"}
          description={
            itemToDelete !== null
              ? "Are you sure you want to delete this product? This action cannot be undone."
              : `Are you sure you want to delete ${selectedItems.length} selected product(s)? This action cannot be undone.`
          }
        />
      </div>
    </DashboardLayout>
  )
}

export default Products