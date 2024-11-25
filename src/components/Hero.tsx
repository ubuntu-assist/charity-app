import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Globe, Users, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router'

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const navigate = useNavigate()
  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      title: 'Empower Communities',
      subtitle: 'Create lasting change through sustainable development',
      stat: '2M+ Lives Impacted',
    },
    {
      image:
        'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Education for All',
      subtitle: 'Building brighter futures through learning',
      stat: '500+ Schools Built',
    },
    {
      image:
        'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Clean Water Access',
      subtitle: 'Providing safe drinking water to remote communities',
      stat: '1000+ Wells Dug',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const impactNumbers = [
    { icon: Globe, number: '130+', label: 'Countries' },
    { icon: Users, number: '2M+', label: 'Lives Changed' },
    { icon: Heart, number: '$50M+', label: 'Donations' },
  ]

  return (
    <div className='relative min-h-screen bg-gray-900 overflow-hidden pt-[var(--navbar-height)]'>
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className='absolute inset-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: activeSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute inset-0 bg-black/50 z-10' />
          <img
            src={slide.image}
            alt={slide.title}
            className='absolute inset-0 w-full h-full object-cover'
          />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 z-20' />

      {/* Content */}
      <div className='relative z-30'>
        <div className='min-h-screen flex items-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'>
            <div className='max-w-3xl'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='flex items-center gap-2 mb-6'
              >
                <div className='h-1 w-10 bg-white rounded' />
                <span className='text-white font-medium'>
                  Making a Difference
                </span>
              </motion.div>

              <motion.h1
                key={slides[activeSlide].title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-7xl font-bold text-white mb-6'
              >
                {slides[activeSlide].title}
              </motion.h1>

              <motion.p
                key={slides[activeSlide].subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-xl text-white/90 mb-8'
              >
                {slides[activeSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex flex-wrap gap-4'
              >
                <motion.button
                  onClick={() => navigate('/donate')}
                  className='bg-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Make a Donation <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  className='bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/20 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Impact Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='mt-24 grid grid-cols-1 md:grid-cols-3 gap-8'
            >
              {impactNumbers.map(({ icon: Icon, number, label }) => (
                <motion.div
                  key={label}
                  className='flex items-center gap-4'
                  whileHover={{ x: 10 }}
                >
                  <div className='w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center'>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-white'>
                      {number}
                    </div>
                    <div className='text-white/70'>{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className='text-sm'>Scroll to explore</span>
          <ChevronDown className='w-6 h-6' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
