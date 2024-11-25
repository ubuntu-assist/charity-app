import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Home, RefreshCw, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

interface CharityErrorPageProps {
  organizationName?: string
}

const ErrorPage: React.FC<CharityErrorPageProps> = ({
  organizationName = 'Our Charity',
}) => {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const floatingIconVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      },
    },
  }

  const handleRefresh = () => {
    navigate(0)
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center px-4'>
      <motion.div
        className='max-w-2xl w-full text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Animated Icons */}
        <motion.div
          className='flex justify-center gap-8 mb-12'
          variants={itemVariants}
        >
          <motion.div
            variants={floatingIconVariants}
            animate='animate'
            className='text-pink-500'
          >
            <Heart className='w-12 h-12' />
          </motion.div>
          <motion.div
            variants={floatingIconVariants}
            animate='animate'
            className='text-blue-500'
          >
            <Handshake className='w-12 h-12' />
          </motion.div>
          <motion.div
            variants={floatingIconVariants}
            animate='animate'
            className='text-purple-500'
          >
            <Heart className='w-12 h-12' />
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants}>
          <h1 className='text-7xl font-bold text-blue-600 mb-4'>404</h1>
          <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
            Page Not Found
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className='space-y-6 mb-12'>
          <p className='text-xl text-gray-600'>
            We couldn't find the page you're looking for.
          </p>
          <p className='text-gray-600'>
            But just like how we never give up on making a difference,
            <br />
            let's help you find your way back to continue supporting our cause.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <Button
            variant='outline'
            onClick={handleRefresh}
            className='bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2'
          >
            <RefreshCw className='h-4 w-4' />
            Try Again
          </Button>

          <Button
            onClick={goHome}
            className='bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 flex items-center gap-2'
          >
            <Home className='h-4 w-4' />
            Return to Homepage
          </Button>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          variants={itemVariants}
          className='mt-12 text-gray-500 italic'
        >
          Together we can make a difference at {organizationName}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default ErrorPage
