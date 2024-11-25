import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  Heart,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  HandHeart,
  Users,
  ArrowRight,
  ChevronUp,
  ArrowLeftCircle,
  ArrowRightCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import CommentSection from '@/components/core/comments'

interface RelatedPost {
  id: number
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  readTime: string
}

const relatedPosts: RelatedPost[] = [
  {
    id: 1,
    title: 'Youth Mentorship Program Transforms Lives',
    excerpt:
      'See how our mentorship initiative is creating positive change in young lives...',
    category: 'Education',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    date: 'Nov 23, 2024',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'Local Businesses Join Forces for Community Garden',
    excerpt:
      'Community partners come together to create sustainable green spaces...',
    category: 'Environment',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    date: 'Nov 22, 2024',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'Emergency Food Drive Reaches Record Numbers',
    excerpt:
      'Our latest food drive initiative provided meals to over 1000 families...',
    category: 'Food Security',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    date: 'Nov 21, 2024',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Healthcare Outreach Program Expands Services',
    excerpt:
      'New mobile clinic brings healthcare services to underserved areas...',
    category: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    date: 'Nov 20, 2024',
    readTime: '6 min read',
  },
]

interface PostData {
  title: string
  category: string
  date: string
  readTime: string
  author: {
    name: string
    avatar: string
    role: string
  }
  impact: {
    peopleBenefited: number
    goalAmount: number
    raisedAmount: number
    supporters: number
  }
}

const postData: PostData = {
  title: 'Building Hope: Community Center Project Reaches Milestone',
  category: 'Community Development',
  date: 'Nov 24, 2024',
  readTime: '5 min read',
  author: {
    name: 'Michael Chen',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
    role: 'Project Lead',
  },
  impact: {
    peopleBenefited: 1250,
    goalAmount: 50000,
    raisedAmount: 35000,
    supporters: 428,
  },
}

const PostDetails: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const progress =
    (postData.impact.raisedAmount / postData.impact.goalAmount) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesPerView = 3
  const maxSlides = Math.ceil(relatedPosts.length / slidesPerView) - 1

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-[var(--navbar-height)]'>
      {/* Hero Section */}
      <motion.div
        className='relative h-[60vh] bg-gray-900 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src='https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt='Community Center'
          className='absolute inset-0 w-full h-full object-cover opacity-60'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className='inline-block px-4 py-2 rounded-full bg-blue-600 text-sm font-medium mb-4'>
              {postData.category}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 max-w-4xl'>
              {postData.title}
            </h1>
            <div className='flex items-center gap-6 text-gray-300'>
              <div className='flex items-center gap-2'>
                <Calendar className='w-4 h-4' />
                <span>{postData.date}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4' />
                <span>{postData.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Article Content */}
          <motion.div
            className='lg:col-span-2'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              className='bg-white rounded-xl shadow-sm p-8 mb-8'
              variants={itemVariants}
            >
              <div className='prose prose-lg max-w-none'>
                <p className='lead'>
                  The new community center construction project has reached a
                  significant milestone with the completion of its foundation
                  phase. This achievement marks a crucial step forward in our
                  mission to create a vibrant hub for community engagement and
                  empowerment.
                </p>
                <p>
                  Through the generosity of our donors and the dedication of our
                  volunteers, we've made remarkable progress in bringing this
                  vision to life. The community center will serve as a beacon of
                  hope, providing essential services and programs to those who
                  need them most.
                </p>
                <h2>Impact on the Community</h2>
                <p>Once completed, the center will offer:</p>
                <ul>
                  <li>Educational programs for youth and adults</li>
                  <li>Health and wellness services</li>
                  <li>Job training and career development resources</li>
                  <li>Cultural events and community gatherings</li>
                </ul>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              className='grid grid-cols-2 gap-4 mb-8'
              variants={itemVariants}
            >
              <img
                src='https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt='Construction progress'
                className='rounded-lg shadow-sm'
              />
              <img
                src='https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt='Community involvement'
                className='rounded-lg shadow-sm'
              />
            </motion.div>

            {/* Author Info */}
            <motion.div
              className='bg-white rounded-xl shadow-sm p-8 mb-8'
              variants={itemVariants}
            >
              <div className='flex items-center gap-4'>
                <Avatar className='h-12 w-12'>
                  <AvatarImage
                    src={postData.author.avatar}
                    alt={postData.author.name}
                  />
                  <AvatarFallback>
                    {postData.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    {postData.author.name}
                  </h3>
                  <p className='text-gray-600'>{postData.author.role}</p>
                </div>
              </div>
            </motion.div>

            <CommentSection />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className='lg:col-span-1'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {/* Impact Stats */}
            <motion.div
              className='bg-white rounded-xl shadow-sm p-6 mb-6'
              variants={itemVariants}
            >
              <h3 className='text-lg font-semibold mb-4'>Project Impact</h3>
              <div className='space-y-6'>
                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-gray-600'>Fundraising Progress</span>
                    <span className='font-medium'>
                      ${postData.impact.raisedAmount.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progress} className='h-2' />
                  <div className='flex justify-between mt-1'>
                    <span className='text-sm text-gray-500'>
                      Goal: ${postData.impact.goalAmount.toLocaleString()}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {progress.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-gray-50 rounded-lg p-4'>
                    <Users className='w-5 h-5 text-blue-600 mb-2' />
                    <div className='text-2xl font-bold text-gray-900'>
                      {postData.impact.peopleBenefited.toLocaleString()}
                    </div>
                    <div className='text-sm text-gray-600'>
                      People Benefited
                    </div>
                  </div>
                  <div className='bg-gray-50 rounded-lg p-4'>
                    <HandHeart className='w-5 h-5 text-blue-600 mb-2' />
                    <div className='text-2xl font-bold text-gray-900'>
                      {postData.impact.supporters.toLocaleString()}
                    </div>
                    <div className='text-sm text-gray-600'>Supporters</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className='bg-blue-600 rounded-xl shadow-sm p-6 text-white'
              variants={itemVariants}
            >
              <h3 className='text-lg font-semibold mb-4'>
                Support This Project
              </h3>
              <p className='mb-6'>
                Your contribution can help us create lasting change in our
                community.
              </p>
              <Button className='w-full bg-white text-blue-600 hover:bg-gray-100'>
                Donate Now <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.section
        className='max-w-7xl mx-auto px-4 py-16 bg-white'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-900'>Related Stories</h2>
          <p className='text-gray-600 mt-2'>
            Discover more inspiring stories from our community
          </p>
        </div>

        <div className='relative'>
          <div className='overflow-hidden'>
            <motion.div
              className='flex gap-6'
              animate={{
                x: `${-currentSlide * 100}%`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {relatedPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className='min-w-[calc(33.333%-1rem)] bg-gray-50 rounded-xl overflow-hidden shadow-sm'
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='relative h-48 overflow-hidden'>
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className='w-full h-full object-cover'
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className='absolute top-4 left-4'>
                      <Badge className='bg-white/90 text-gray-900 backdrop-blur-sm'>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2 line-clamp-2'>
                      {post.title}
                    </h3>
                    <p className='text-gray-600 mb-4 line-clamp-2'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center justify-between text-sm text-gray-500'>
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        <span>{post.date}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Clock className='w-4 h-4' />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-end gap-2 mt-6'>
            <motion.button
              className={`p-2 rounded-full ${
                currentSlide === 0
                  ? 'text-gray-300'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeftCircle className='w-6 h-6' />
            </motion.button>
            <motion.button
              className={`p-2 rounded-full ${
                currentSlide === maxSlides
                  ? 'text-gray-300'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={nextSlide}
              disabled={currentSlide === maxSlides}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRightCircle className='w-6 h-6' />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Floating Action Buttons */}
      <motion.div
        className='fixed bottom-8 right-8 flex flex-col gap-4'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className={`p-3 rounded-full shadow-lg ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className='w-6 h-6' />
        </motion.button>

        <AlertDialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <AlertDialogTrigger asChild>
            <motion.button
              className='p-3 rounded-full shadow-lg bg-white text-gray-600'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className='w-6 h-6' />
            </motion.button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Share this story</AlertDialogTitle>
              <AlertDialogDescription>
                Help spread the word about our impact in the community.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className='flex justify-center gap-4 py-4'>
              <Button variant='outline' className='rounded-full' size='icon'>
                <Facebook className='w-5 h-5' />
              </Button>
              <Button variant='outline' className='rounded-full' size='icon'>
                <Twitter className='w-5 h-5' />
              </Button>
              <Button variant='outline' className='rounded-full' size='icon'>
                <Linkedin className='w-5 h-5' />
              </Button>
            </div>
            <AlertDialogFooter>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {showScrollTop && (
          <motion.button
            className='p-3 rounded-full shadow-lg bg-white text-gray-600'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ChevronUp className='w-6 h-6' />
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

export default PostDetails
