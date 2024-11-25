import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: 'Ressources',
      items: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Annual Reports', href: '/reports' },
        { name: 'Financial Transparency', href: '/financials' },
      ],
    },
    {
      name: 'Programs',
      items: [
        { name: 'Community Development', href: '/community' },
        { name: 'Education Initiatives', href: '/education' },
        { name: 'Healthcare Access', href: '/healthcare' },
        { name: 'Environmental Projects', href: '/environment' },
      ],
    },
    {
      name: 'Get Involved',
      items: [
        { name: 'Volunteer Opportunities', href: '/volunteer' },
        { name: 'Corporate Partnerships', href: '/partnerships' },
        { name: 'Monthly Giving', href: '/monthly-giving' },
        { name: 'Legacy Gifts', href: '/legacy' },
      ],
    },
    {
      name: 'Impact',
      items: [
        { name: 'Success Stories', href: '/stories' },
        { name: 'Impact Reports', href: '/impact' },
        { name: 'Research & Publications', href: '/research' },
        { name: 'Project Locations', href: '/locations' },
      ],
    },
  ]

  const DropdownContent = ({ items }: { items: any }) => (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className='absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 mt-1'
    >
      {items.map((item: any) => (
        <Link
          key={item.name}
          to={item.href}
          className='block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700'
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  )

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className='max-w-7xl mx-auto'>
        <nav className='flex items-center justify-between px-6 py-4'>
          {/* Logo */}
          <Link to='/' className='flex-shrink-0'>
            <span className='text-xl font-semibold text-gray-900'>
              Hope Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:space-x-8'>
            {navigation.map((item) => (
              <div
                key={item.name}
                className='relative'
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1.5 px-1 py-2 text-sm font-medium transition-colors
                    ${
                      activeDropdown === item.name
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4' />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <DropdownContent items={item.items} />
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to='/donate'
              className='inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors'
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 text-gray-700'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg-white border-t'
            >
              <div className='px-4 py-3'>
                {navigation.map((section) => (
                  <div key={section.name} className='py-2'>
                    <div className='font-medium text-gray-900 px-3 py-2'>
                      {section.name}
                    </div>
                    <div className='mt-1 space-y-1'>
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className='block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-md'
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className='mt-4 px-3 pb-3'>
                  <a
                    href='/donate'
                    className='flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors'
                  >
                    Donate
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default NavBar
