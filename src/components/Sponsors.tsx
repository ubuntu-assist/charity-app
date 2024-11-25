import { motion } from 'framer-motion'
import { Handshake, Building2, ChevronRight, Globe } from 'lucide-react'
import MarqueeDemo from './marquee-demo'

const PartnerSponsorsSection = () => {
  return (
    <div className='bg-gray-50 py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='flex items-center justify-center gap-2 mb-4'>
            <div className='h-1 w-10 bg-blue-500 rounded' />
            <span className='text-blue-600 font-medium'>Our Network</span>
            <div className='h-1 w-10 bg-blue-500 rounded' />
          </div>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Partners & Sponsors
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Working together with leading organizations to create lasting
            positive impact in communities worldwide.
          </p>
        </motion.div>

        {/* Featured Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
        >
          <div className='bg-white p-6 rounded-2xl shadow-lg text-center'>
            <Handshake className='w-12 h-12 text-blue-500 mx-auto mb-4' />
            <h3 className='text-4xl font-bold text-gray-900 mb-2'>20+</h3>
            <p className='text-gray-600'>Active Partners</p>
          </div>
          <div className='bg-white p-6 rounded-2xl shadow-lg text-center'>
            <Building2 className='w-12 h-12 text-blue-500 mx-auto mb-4' />
            <h3 className='text-4xl font-bold text-gray-900 mb-2'>15</h3>
            <p className='text-gray-600'>Countries Reached</p>
          </div>
          <div className='bg-white p-6 rounded-2xl shadow-lg text-center'>
            <Globe className='w-12 h-12 text-blue-500 mx-auto mb-4' />
            <h3 className='text-4xl font-bold text-gray-900 mb-2'>$10M+</h3>
            <p className='text-gray-600'>Joint Impact</p>
          </div>
        </motion.div>
      </div>

      {/* Partners Grid */}
      <MarqueeDemo />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='bg-blue-600 rounded-2xl p-8 text-center text-white max-w-7xl mx-auto mt-24'
      >
        <h3 className='text-2xl font-bold mb-4'>Become a Partner</h3>
        <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
          Join our network of partners and help us create lasting positive
          change in communities worldwide. Let's make a difference together.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-white text-blue-600 px-8 py-3 rounded-full font-medium inline-flex items-center gap-2'
        >
          Partner With Us
          <ChevronRight className='w-4 h-4' />
        </motion.button>
      </motion.div>
    </div>
  )
}

export default PartnerSponsorsSection
