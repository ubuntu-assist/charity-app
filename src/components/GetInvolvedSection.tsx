import React from 'react'
import { motion } from 'framer-motion'
import {
  HandHeart,
  Calendar,
  Gift,
  ArrowRight,
  Share2,
  CircleDollarSign,
} from 'lucide-react'

import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import { FloatingDock } from './floating-dock'

export function FloatingDockDemo() {
  const links = [
    {
      title: 'LinkedIn',
      icon: (
        <IconBrandLinkedin className='h-full w-full text-[#0077b5] dark:text-[#0e76a8]' />
      ),
      href: '#',
    },
    {
      title: 'Instagram',
      icon: (
        <IconBrandInstagram className='h-full w-full text-[#E1306C] dark:text-[#C13584]' />
      ),
      href: '#',
    },
    {
      title: 'WhatsApp',
      icon: (
        <IconBrandWhatsapp className='h-full w-full text-[#25D366] dark:text-[#075E54]' />
      ),
      href: '#',
    },
    {
      title: 'X',
      icon: (
        <IconBrandX className='h-full w-full text-[#1DA1F2] dark:text-[#2795D9]' />
      ),
      href: '#',
    },
    {
      title: 'Facebook',
      icon: (
        <IconBrandFacebook className='h-full w-full text-[#1877F2] dark:text-[#4267B2]' />
      ),
      href: '#',
    },
  ]

  return (
    <FloatingDock
      mobileClassName='translate-y-20' // only for demo, remove for production
      items={links}
    />
  )
}

const GetInvolvedSection = () => {
  const involvementOptions = [
    {
      icon: HandHeart,
      title: 'Volunteer',
      description:
        'Join our global network of volunteers making a difference in communities worldwide.',
      buttonText: 'Join Us',
      stats: '5,000+ active volunteers',
      color: 'bg-blue-500',
    },
    {
      icon: Calendar,
      title: 'Events',
      description:
        'Participate in fundraising events, community gatherings, and awareness campaigns.',
      buttonText: 'View Calendar',
      stats: '200+ annual events',
      color: 'bg-purple-500',
    },
    {
      icon: Gift,
      title: 'Monthly Giving',
      description:
        'Make a lasting impact through our recurring donation program.',
      buttonText: 'Start Giving',
      stats: '2,500+ monthly donors',
      color: 'bg-blue-500',
    },
  ]

  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'Annual Charity Gala',
      location: 'San Francisco, CA',
      type: 'Fundraiser',
    },
    {
      date: 'Dec 20',
      title: 'Community Build Day',
      location: 'Chicago, IL',
      type: 'Volunteer',
    },
    {
      date: 'Jan 5',
      title: 'Youth Education Workshop',
      location: 'Virtual Event',
      type: 'Education',
    },
  ]

  return (
    <div className='bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] py-24'>
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
            <span className='text-blue-400 font-medium'>Join Our Mission</span>
            <div className='h-1 w-10 bg-blue-500 rounded' />
          </div>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Make a Difference Today
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Every contribution matters. Discover how you can be part of creating
            positive change in communities worldwide.
          </p>
        </motion.div>

        {/* Involvement Options */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {involvementOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='bg-gray-800 rounded-2xl p-6 relative overflow-hidden group'
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full ${option.color} opacity-10 blur-2xl transform group-hover:scale-150 transition-transform duration-500`}
              />

              <div className='relative z-10'>
                <div
                  className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  {React.createElement(option.icon, {
                    className: 'w-8 h-8 text-white',
                  })}
                </div>

                <h3 className='text-2xl font-bold text-white mb-3'>
                  {option.title}
                </h3>

                <p className='text-gray-400 mb-4'>{option.description}</p>

                <div className='text-sm text-gray-500 mb-6'>{option.stats}</div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${option.color} text-white px-6 py-3 rounded-full font-medium flex items-center gap-2`}
                >
                  {option.buttonText} <ArrowRight className='w-4 h-4' />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white'
          >
            <CircleDollarSign className='w-12 h-12 mb-4' />
            <h3 className='text-2xl font-bold mb-2'>Quick Donation</h3>
            <p className='mb-6'>
              Make an immediate impact with a one-time donation.
            </p>
            <div className='grid grid-cols-3 gap-4 mb-6'>
              {['$25', '$50', '$100'].map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white/20 rounded-lg py-2 text-white font-medium hover:bg-white/30 transition-colors'
                >
                  {amount}
                </motion.button>
              ))}
            </div>
            <button className='w-full bg-white text-blue-600 py-3 rounded-full font-medium'>
              Custom Amount
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='bg-gray-800 rounded-2xl p-8'
          >
            <h3 className='text-2xl font-bold text-white mb-6'>
              Upcoming Events
            </h3>
            <div className='space-y-4'>
              {upcomingEvents.map((event) => (
                <div key={event.title} className='flex items-center gap-4'>
                  <div className='bg-gray-700 rounded-lg p-3 text-center min-w-[70px]'>
                    <div className='text-sm text-gray-400'>
                      {event.date.split(' ')[0]}
                    </div>
                    <div className='text-lg font-bold text-white'>
                      {event.date.split(' ')[1]}
                    </div>
                  </div>
                  <div>
                    <h4 className='text-white font-medium'>{event.title}</h4>
                    <p className='text-gray-400 text-sm'>{event.location}</p>
                  </div>
                  <span className='ml-auto text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full'>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center bg-gray-800 rounded-2xl p-8'
        >
          <Share2 className='w-12 h-12 text-blue-500 mx-auto mb-4' />
          <h3 className='text-2xl font-bold text-white mb-3'>
            Spread the Word
          </h3>
          <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
            Help us reach more people by sharing our mission with your network.
          </p>
          {/* <div className='flex justify-center gap-4'>
            {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
              <motion.button
                key={platform}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gray-700 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-600 transition-colors'
              >
                Share on {platform}
              </motion.button>
            ))}
          </div> */}
          <FloatingDockDemo />
        </motion.div>
      </div>
    </div>
  )
}

export default GetInvolvedSection
