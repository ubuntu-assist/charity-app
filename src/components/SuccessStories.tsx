import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { AnimatedTestimonials } from './animated-testimonials'
import UnsplashGrid from './gallery-modals'

const SuccessStoriesSection = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
      name: 'Lisa Thompson',
      designation: 'VP of Technology at FutureNet',
      src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]
  return (
    <div className='bg-white py-24'>
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
            <span className='text-blue-500 font-medium'>Success Stories</span>
            <div className='h-1 w-10 bg-blue-500 rounded' />
          </div>
          <h2 className='text-4xl font-bold text-black mb-4'>
            Lives Changed, Communities Transformed
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Real stories from the people and communities we've had the privilege
            to serve and support.
          </p>
        </motion.div>

        {/* Testimonials */}

        <AnimatedTestimonials testimonials={testimonials} />

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='p-8 text-center'
        >
          <Camera className='w-12 h-12 text-blue-500 mx-auto mb-4' />
          <h3 className='text-2xl font-bold text-black mb-3'>
            Impact in Pictures
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Browse our gallery of moments that capture the heart of our mission
            and the communities we serve.
          </p>
          <UnsplashGrid />
        </motion.div>
      </div>
    </div>
  )
}

export default SuccessStoriesSection
