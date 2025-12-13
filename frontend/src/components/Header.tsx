import { Search, Bell } from 'lucide-react'

const Header = () => {
  return (
    <header className='bg-white px-4 md:px-6 py-3 md:py-4'>
      {/* Mobile Layout - Two Rows */}
      <div className='md:hidden flex flex-col gap-3'>
        {/* First Row: Profile on Left, Bell on Right */}
        <div className='flex items-center justify-between'>
          {/* Profile - Left Side */}
          <div className='flex items-center gap-3'>
            <img
              src='/dashboard/avatar.png'
              className='w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-gray-300'
              alt='Profile'
            />
            <div className='leading-tight'>
              <p className='text-sm font-medium text-gray-800'>App Admin</p>
              <p className='text-xs text-gray-500 truncate max-w-[140px]'>
                Supportwithcoder@gmail.com
              </p>
            </div>
          </div>

          {/* Notification - Right Side */}
          <div className='relative'>
            <Bell className='w-6 h-6 text-gray-500' />
            <span className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white' />
          </div>
        </div>

        {/* Second Row: Search Bar */}
        <div className='relative w-full'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search anything....'
            className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
          />
        </div>
      </div>

      {/* Desktop Layout - Single Row (Unchanged) */}
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
          {/* Notification */}
          <div className='relative'>
            <Bell className='w-6 h-6 text-gray-500' />
            <span className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white' />
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
