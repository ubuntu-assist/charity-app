import { motion } from 'framer-motion'
import { MapPin, Mail, Users } from 'lucide-react'

import { IconBuildingCommunity } from '@tabler/icons-react'

import { Card, CardContent } from '@/components/ui/card'

const CommunityContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50'>
      {/* Hero Section */}

      <motion.div
        className='text-center mb-8 sm:mb-12 lg:mb-16 mb-16 pt-[var(--navbar-height)]'
        variants={itemVariants}
      >
        <div className='inline-flex items-center justify-center w-16 h-16 mb-4 sm:mb-6 bg-blue-100 rounded-full'>
          <IconBuildingCommunity className='w-8 h-8 text-blue-600' />
        </div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4 sm:mb-6 px-4'>
          Join Our Community
        </h1>
        <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-4 max-w-2xl mx-auto px-4'>
          Together we can make a difference. Connect with us and become part of
          our mission to create positive change.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
      >
        <motion.div variants={itemVariants}>
          <Card className='text-center p-6'>
            <CardContent>
              <Users className='w-12 h-12 mx-auto mb-4 text-blue-600' />
              <h3 className='text-2xl font-bold'>10,000+</h3>
              <p className='text-gray-600'>Active Volunteers</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className='text-center p-6'>
            <CardContent>
              <MapPin className='w-12 h-12 mx-auto mb-4 text-blue-600' />
              <h3 className='text-2xl font-bold'>50+</h3>
              <p className='text-gray-600'>Communities Served</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className='text-center p-6'>
            <CardContent>
              <Mail className='w-12 h-12 mx-auto mb-4 text-blue-600' />
              <h3 className='text-2xl font-bold'>24/7</h3>
              <p className='text-gray-600'>Support Available</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <RevealLinks />
    </div>
  )
}

export const RevealLinks = () => {
  return (
    <section className='grid place-content-center gap-2  px-8 mt-10 text-black py-12'>
      <FlipLink href='#'>X</FlipLink>
      <FlipLink href='#'>Linkedin</FlipLink>
      <FlipLink href='#'>Facebook</FlipLink>
      <FlipLink href='#'>Instagram</FlipLink>
      <FlipLink href='#'>Youtube</FlipLink>
      <FlipLink href='#'>Telegram</FlipLink>
      <FlipLink href='#'>Discord</FlipLink>
    </section>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      href={href}
      className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl text-center'
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split('').map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

export default CommunityContactPage
