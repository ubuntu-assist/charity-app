import { motion } from 'framer-motion'
import { Calendar, Clock, Tag } from 'lucide-react'

const NewsBlogSection = () => {
  const articles = [
    {
      title: 'New Partnership Announcement: Joining Forces for Global Impact',
      excerpt:
        "We're excited to announce our strategic partnership with Global Tech Solutions to expand our reach...",
      category: 'Updates',
      date: 'Mar 12, 2024',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      tags: ['Partnership', 'Growth'],
    },
    {
      title: 'Volunteer Spotlight: Meet the Heroes Behind Our Mission',
      excerpt:
        'Discover the inspiring stories of our dedicated volunteers who are making a difference...',
      category: 'Impact Stories',
      date: 'Mar 10, 2024',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      tags: ['Volunteers', 'Community'],
    },
    {
      title: 'Annual Impact Report: A Year of Meaningful Change',
      excerpt:
        'Our latest impact report reveals remarkable progress in community development and sustainability...',
      category: 'Press Releases',
      date: 'Mar 8, 2024',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      tags: ['Report', 'Impact'],
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
            <span className='text-blue-600 font-medium'>Latest Updates</span>
            <div className='h-1 w-10 bg-blue-500 rounded' />
          </div>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            News & Insights
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Stay informed about our latest initiatives, impact stories, and
            upcoming events.
          </p>
        </motion.div>

        {/* Article Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer shadow-lg'
            >
              <div className='relative'>
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className='p-6'>
                <div className='flex items-center gap-4 mb-3 text-sm'>
                  <div className='flex items-center gap-1 text-gray-600'>
                    <Calendar className='w-4 h-4' />
                    {article.date}
                  </div>
                  <div className='flex items-center gap-1 text-gray-600'>
                    <Clock className='w-4 h-4' />
                    {article.readTime}
                  </div>
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                  {article.title}
                </h3>

                <p className='text-gray-600 mb-4 line-clamp-2'>
                  {article.excerpt}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center gap-1'
                    >
                      <Tag className='w-3 h-3' />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsBlogSection
