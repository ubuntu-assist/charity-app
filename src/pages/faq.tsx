import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  MessageCircle,
  Heart,
  Users,
  Target,
  Gift,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const faqData = {
  general: {
    title: 'General Questions',
    icon: <Target className='w-5 h-5' />,
    color: 'bg-blue-500',
    questions: [
      {
        q: "What is your organization's mission?",
        a: 'Our mission is to create positive change in communities through sustainable development, education, and humanitarian aid. We work with local partners to implement lasting solutions.',
        tags: ['Mission', 'Impact'],
      },
      {
        q: 'How can I get involved?',
        a: "There are many ways to get involved! You can volunteer, donate, participate in our events, or become a community advocate. Visit our 'Get Involved' page to learn more about specific opportunities.",
        tags: ['Volunteer', 'Donate', 'Community'],
      },
      {
        q: 'Where do you operate?',
        a: 'We currently operate in over 50 communities across 15 countries. Our projects focus on areas with the greatest need and potential for sustainable impact.',
        tags: ['Location', 'Impact'],
      },
    ],
  },
  donations: {
    title: 'Donations',
    icon: <Heart className='w-5 h-5' />,
    color: 'bg-pink-500',
    questions: [
      {
        q: 'Is my donation tax-deductible?',
        a: "Yes, all donations are tax-deductible. We are a registered 501(c)(3) nonprofit organization, and we'll provide you with a receipt for your records.",
        tags: ['Tax', 'Documentation'],
      },
      {
        q: 'How is my donation used?',
        a: '85% of donations go directly to our programs, 10% to administrative costs, and 5% to fundraising efforts. We maintain full transparency and publish detailed financial reports annually.',
        tags: ['Transparency', 'Finance'],
      },
      {
        q: 'Can I make a recurring donation?',
        a: 'Yes! You can set up monthly, quarterly, or annual recurring donations through our website or by contacting our donor relations team.',
        tags: ['Recurring', 'Support'],
      },
    ],
  },
  volunteer: {
    title: 'Volunteering',
    icon: <Users className='w-5 h-5' />,
    color: 'bg-green-500',
    questions: [
      {
        q: 'What volunteer opportunities are available?',
        a: 'We offer various volunteering opportunities including local community service, international programs, skilled volunteering, and virtual volunteering options.',
        tags: ['Opportunities', 'Programs'],
      },
      {
        q: 'Do I need specific qualifications to volunteer?',
        a: 'Requirements vary by program. Some positions require specific skills or experience, while others are open to all. Training is provided for most roles.',
        tags: ['Requirements', 'Training'],
      },
      {
        q: 'How much time do I need to commit?',
        a: "Commitment levels vary from one-time events to ongoing programs. Most regular volunteer positions ask for 2-4 hours per week, but we're flexible to work with your schedule.",
        tags: ['Time', 'Commitment'],
      },
    ],
  },
}

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filterQuestions = (
    questions: (typeof faqData)[keyof typeof faqData]['questions']
  ) => {
    return questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
  }

  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-4xl mx-auto text-center mb-16 pt-[var(--navbar-height)]'
      >
        <div className='relative inline-block mb-8'>
          <motion.div
            className='absolute inset-0 bg-blue-100 rounded-full'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <MessageCircle className='relative w-16 h-16 text-blue-500 mx-auto' />
        </div>
        <h1 className='text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
          How can we help?
        </h1>
        <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
          Find answers to common questions about our work, donations, and how
          you can make a difference.
        </p>

        {/* Search Bar */}
        <motion.div
          className='relative max-w-xl mx-auto'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Search className='absolute left-4 top-3.5 h-5 w-5 text-gray-400' />
          <Input
            type='text'
            placeholder='Search your questions...'
            className='pl-12 pr-4 py-6 w-full text-lg rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </motion.div>

      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='max-w-4xl mx-auto mb-12'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {Object.entries(faqData).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === key ? 'default' : 'outline'}
                className={`w-full h-full p-6 flex items-center gap-4 text-left ${
                  activeCategory === key ? 'shadow-lg' : ''
                }`}
                onClick={() =>
                  setActiveCategory(activeCategory === key ? null : key)
                }
              >
                <div
                  className={`p-2 rounded-lg ${category.color} bg-opacity-10`}
                >
                  {category.icon}
                </div>
                <div>
                  <div className='font-semibold'>{category.title}</div>
                  <div className='text-sm text-gray-500'>
                    {category.questions.length} questions
                  </div>
                </div>
                <ArrowRight
                  className={`ml-auto h-4 w-4 transform transition-transform ${
                    activeCategory === key ? 'rotate-90' : ''
                  }`}
                />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='max-w-4xl mx-auto space-y-8'
      >
        <AnimatePresence mode='wait'>
          {Object.entries(faqData).map(([key, category]) => {
            const filteredQuestions = filterQuestions(category.questions)

            if (activeCategory && activeCategory !== key) return null
            if (filteredQuestions.length === 0) return null

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className='overflow-hidden border-none shadow-xl'>
                  <CardHeader className='bg-gradient-to-r from-gray-50 to-white border-b'>
                    <div className='flex items-center gap-3'>
                      <div
                        className={`p-2 rounded-lg ${category.color} text-white`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>
                          Find answers to common questions about{' '}
                          {category.title.toLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className='p-6'>
                    <Accordion type='single' collapsible className='w-full'>
                      {filteredQuestions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${key}-${index}`}
                          className='border-b last:border-0'
                        >
                          <AccordionTrigger className='hover:no-underline'>
                            <div className='flex items-center gap-4 text-left'>
                              <div className='flex-1 font-medium'>{faq.q}</div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className='pt-2 pb-4'>
                              <p className='text-gray-600 mb-4'>{faq.a}</p>
                              <div className='flex flex-wrap gap-2'>
                                {faq.tags.map((tag, tagIndex) => (
                                  <Badge
                                    key={tagIndex}
                                    variant='secondary'
                                    className='text-sm'
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='max-w-4xl mx-auto mt-16'
      >
        <Card className='bg-gradient-to-r from-blue-500 to-purple-500 text-white overflow-hidden'>
          <CardContent className='p-8'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='text-center md:text-left'>
                <h3 className='text-2xl font-semibold mb-2'>
                  Still have questions?
                </h3>
                <p className='text-blue-100'>
                  Our team is here to help! We'll get back to you within 24
                  hours.
                </p>
              </div>
              <Button
                variant='secondary'
                className='bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                size='lg'
              >
                <MessageCircle className='mr-2 h-4 w-4' />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default FAQPage
