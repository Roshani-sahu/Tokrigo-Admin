import { Search, Bell, Menu } from 'lucide-react'

interface HeaderProps {
  onMenuClick?: () => void
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className='bg-white px-4 md:px-6 py-3 md:py-4'>
      {/* Mobile Layout - Two Rows */}
      <div className='md:hidden flex flex-col gap-3'>
        {/* First Row */}
        <div className='flex items-center justify-between'>
          {/* Profile */}
          <div className='flex items-center gap-3 flex-1 min-w-0'>
            <img
              src='/dashboard/avatar.png'
              className='w-9 h-9 rounded-full border-2 border-gray-300 flex-shrink-0'
              alt='Profile'
            />
            <div className='leading-tight min-w-0'>
              <p className='text-sm font-medium text-gray-800 truncate'>
                App Admin
              </p>
              <p className='text-xs text-gray-500 truncate'>
                Supportwithcoder@gmail.com
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className='flex items-center gap-3 flex-shrink-0'>
            {/* Notification with Ring */}
            <div className='relative flex items-center justify-center'>
              <div className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center'>
                <Bell className='w-5 h-5 text-gray-600' />
              </div>
              <span className='absolute top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white' />
            </div>

            {/* Menu */}
            <button
              onClick={onMenuClick}
              className='p-2 rounded-lg hover:bg-gray-100'
            >
              <Menu className='w-6 h-6 text-gray-600' />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className='relative w-full'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search anything....'
            className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex items-center justify-between'>
        {/* Search */}
        <div className='relative w-full max-w-sm'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search anything....'
            className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
          />
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-5'>
          {/* Notification with Ring */}
          <div className='relative flex items-center justify-center'>
            <div className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center'>
              <Bell className='w-5 h-5 text-gray-600' />
            </div>
            <span className='absolute top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white' />
          </div>

          {/* Divider */}
          <div className='h-8 w-px bg-gray-200' />

          {/* Profile */}
          <div className='flex items-center gap-3'>
            <img
              src='/dashboard/avatar.png'
              className='w-10 h-10 rounded-full border-2 border-gray-300'
              alt='Profile'
            />
            <div className='leading-tight'>
              <p className='text-sm font-medium text-gray-800'>App Admin</p>
              <p className='text-xs text-gray-500'>
                Supportwithcoder@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
