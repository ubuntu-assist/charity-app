import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, ArrowRight, Clock, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import 'swiper/swiper-bundle.css'
import { IconBrandBlogger } from '@tabler/icons-react'
import { useNavigate } from 'react-router'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
}

interface CategorySection {
  title: string
  description: string
  posts: BlogPost[]
}

const categories: CategorySection[] = [
  {
    title: 'Latest Impact Stories',
    description: 'Recent updates from our ongoing initiatives and projects',
    posts: [
      {
        id: 1,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Projects',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 2,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Projects',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 3,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Projects',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar: '/api/placeholder/40/40',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 4,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Projects',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar: '/api/placeholder/40/40',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 5,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Projects',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
    ],
  },
  {
    title: 'Success Stories',
    description: 'Inspiring stories of lives transformed through our programs',
    posts: [
      {
        id: 1,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Stories',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 5,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Stories',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 2,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Stories',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 3,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Stories',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 4,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Stories',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      // Add more posts...
    ],
  },
  {
    title: 'Volunteer Spotlights',
    description:
      'Meet the amazing volunteers making a difference in our community',
    posts: [
      {
        id: 1,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Volunteer',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 5,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Volunteer',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 2,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Volunteer',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 3,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Volunteer',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
      {
        id: 4,
        title: 'Building Hope: Community Center Project Reaches Milestone',
        excerpt:
          'The new community center construction project has reached a significant milestone...',
        category: 'Volunteer',
        image:
          'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        author: {
          name: 'Michael Chen',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
        },
        date: 'Nov 24, 2024',
        readTime: '5 min read',
      },
    ],
  },
]

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

const BlogPage: React.FC = () => {
  const navigate = useNavigate()

  const handleViewAll = (category: string) => {
    // Convert category title to URL-friendly format
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
    // router.push(`/blog/category/${categorySlug}`)
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-[var(--navbar-height)] bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50'>
      <motion.div
        className='text-center sm:mb-12 lg:mb-16 mb-16 pt-[var(--navbar-height)]'
        variants={itemVariants}
      >
        <div className='inline-flex items-center justify-center w-16 h-16 mb-4 sm:mb-6 bg-blue-100 rounded-full'>
          <IconBrandBlogger className='w-8 h-8 text-blue-600' />
        </div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4 sm:mb-6 px-4'>
          Our Blog
        </h1>
        <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-4 max-w-2xl mx-auto px-4'>
          Stories of impact, hope, and transformation
        </p>
      </motion.div>

      {/* Featured Post */}
      <section className='max-w-7xl mx-auto px-4 py-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm overflow-hidden'
        >
          <div className='relative h-64 md:h-auto'>
            <img
              src='https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
              alt='Featured post'
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
          <div className='p-8'>
            <Badge className='mb-4 bg-blue-100 text-blue-700'>Featured</Badge>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Celebrating 10 Years of Community Impact
            </h2>
            <p className='text-gray-600 mb-6'>
              A decade of transforming lives, building communities, and creating
              lasting change...
            </p>
            <div className='flex items-center gap-6 mb-6'>
              <div className='flex items-center gap-2'>
                <Calendar className='w-4 h-4 text-gray-400' />
                <span className='text-sm text-gray-500'>Nov 24, 2024</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4 text-gray-400' />
                <span className='text-sm text-gray-500'>8 min read</span>
              </div>
            </div>
            <Button
              onClick={() => navigate('/post')}
              className='bg-blue-600 hover:bg-blue-700 text-white'
            >
              Read More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Category Sections with Swipers */}
      {categories.map((section, index) => (
        <section key={index} className='max-w-7xl mx-auto px-4 py-12'>
          <div className='flex justify-between items-center mb-8'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                {section.title}
              </h2>
              <p className='text-gray-600'>{section.description}</p>
            </div>
            <Button
              variant='ghost'
              className='text-blue-600 hover:text-blue-700 hover:bg-blue-50'
              onClick={() => handleViewAll(section.title)}
            >
              View All
              <ChevronRight className='w-4 h-4 ml-1' />
            </Button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='!pb-12'
          >
            {section.posts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.article
                  className='bg-white rounded-lg shadow-sm overflow-hidden h-full'
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='relative h-48'>
                    <img
                      src={post.image}
                      alt={post.title}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  </div>
                  <div className='p-6'>
                    <Badge className='mb-3 bg-gray-100 text-gray-700'>
                      {post.category}
                    </Badge>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3 line-clamp-2'>
                      {post.title}
                    </h3>
                    <p className='text-gray-600 mb-4 line-clamp-2'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className='w-8 h-8 rounded-full'
                        />
                        <span className='text-sm text-gray-700'>
                          {post.author.name}
                        </span>
                      </div>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='text-blue-600 hover:text-blue-700'
                      >
                        Read More <ArrowRight className='w-4 h-4 ml-1' />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </div>
  )
}

export default BlogPage
