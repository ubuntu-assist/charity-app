import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Home, ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react'

const ImpactSection = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: 'Clean Water Initiative',
      location: 'Rural Ethiopia',
      impact: '20,000 people',
      description:
        'Providing sustainable access to clean water through well construction and water management training.',
      icon: ArrowDown,
      metrics: [
        { label: 'Wells Built', value: '150+' },
        { label: 'Communities Served', value: '45' },
        { label: 'Reduction in Water-borne Illness', value: '73%' },
      ],
    },
    {
      title: 'Education First',
      location: 'Southeast Asia',
      impact: '5,000 students',
      description:
        'Building schools and providing educational resources to underserved communities.',
      icon: Book,
      metrics: [
        { label: 'Schools Built', value: '25' },
        { label: 'Teachers Trained', value: '120' },
        { label: 'Graduation Rate', value: '92%' },
      ],
    },
    {
      title: 'Housing Development',
      location: 'Central America',
      impact: '1,200 families',
      description:
        'Constructing sustainable housing and developing community infrastructure.',
      icon: Home,
      metrics: [
        { label: 'Homes Built', value: '450' },
        { label: 'Community Centers', value: '12' },
        { label: 'Jobs Created', value: '280' },
      ],
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className='bg-gray-50 py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex items-center justify-center gap-2 mb-4'
          >
            <div className='h-1 w-10 bg-blue-500 rounded' />
            <span className='text-blue-600 font-medium'>Our Impact</span>
            <div className='h-1 w-10 bg-blue-500 rounded' />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-4xl font-bold text-gray-900 mb-4'
          >
            Creating Lasting Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='text-xl text-gray-600 max-w-2xl mx-auto'
          >
            See how your support transforms communities and changes lives around
            the world.
          </motion.p>
        </div>

        {/* Project Showcase */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Project Info */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-6'
          >
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center'>
                {React.createElement(projects[activeProject].icon, {
                  className: 'w-8 h-8 text-blue-500',
                })}
              </div>
              <div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {projects[activeProject].title}
                </h3>
                <p className='text-gray-600'>
                  {projects[activeProject].location}
                </p>
              </div>
            </div>

            <p className='text-lg text-gray-700'>
              {projects[activeProject].description}
            </p>

            <div className='grid grid-cols-3 gap-4'>
              {projects[activeProject].metrics.map((metric, index) => (
                <div
                  key={index}
                  className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'
                >
                  <div className='text-2xl font-bold text-blue-600'>
                    {metric.value}
                  </div>
                  <div className='text-sm text-gray-600'>{metric.label}</div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2'
            >
              Support This Project <ArrowRight className='w-4 h-4' />
            </motion.button>
          </motion.div>

          {/* Project Navigation */}
          <div className='relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden'>
            <motion.img
              key={activeProject}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={
                'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
              }
              alt={projects[activeProject].title}
              className='w-full h-full object-cover'
            />

            <div className='absolute bottom-6 right-6 flex gap-2'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg'
              >
                <ArrowLeft className='w-5 h-5' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg'
              >
                <ArrowRight className='w-5 h-5' />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpactSection
