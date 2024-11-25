'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, Variants } from 'framer-motion'

import { Download, X } from 'lucide-react'

interface Tag {
  id: string
  name: string
}

interface BaseItem {
  id: number
  url: string
  title: string
}

interface ItemType extends BaseItem {
  tags: Tag[]
  description: string
}

interface ImageItemProps {
  item: BaseItem
  index: number
  setSelected: (item: ItemType | null) => void
}

interface ModalProps {
  selected: ItemType | null
  setSelected: (item: ItemType | null) => void
}

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
  },
}

const items: ItemType[] = [
  {
    id: 1,
    title: 'Product Manager at TechFlow',
    url: 'https://www.ui-layout.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518599904199-0ca897819ddb%3Fq%3D80%26w%3D1200%26auto%3Dformat&w=640&q=75',
    tags: [
      { id: '1', name: 'Product' },
      { id: '2', name: 'Management' },
      { id: '3', name: 'Tech' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 2,
    title: 'CTO at InnovateSphere',
    url: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tags: [
      { id: '4', name: 'Technology' },
      { id: '5', name: 'Leadership' },
      { id: '6', name: 'Innovation' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 3,
    title: 'Operations Director at CloudScale',
    url: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tags: [
      { id: '7', name: 'Operations' },
      { id: '8', name: 'Cloud' },
      { id: '9', name: 'Management' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 4,
    title: 'Engineering Lead at DataPro',
    url: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tags: [
      { id: '10', name: 'Engineering' },
      { id: '11', name: 'Leadership' },
      { id: '12', name: 'Data' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 5,
    title: 'VP of Technology at FutureNet',
    url: 'https://www.ui-layout.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1726551195764-f98a8e8a57c3%3Fq%3D80%26w%3D1200%26auto%3Dformat&w=640&q=75',
    tags: [
      { id: '13', name: 'Technology' },
      { id: '14', name: 'Executive' },
      { id: '15', name: 'Leadership' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 6,
    title: 'Sunset Mountain Silhouette',
    url: 'https://www.ui-layout.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508873881324-c92a3fc536ba%3Fq%3D80%26w%3D1200%26auto%3Dformat&w=640&q=75',
    tags: [
      { id: '13', name: 'Sunset' },
      { id: '14', name: 'Executive' },
      { id: '15', name: 'Leadership' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 7,
    title: 'Product Manager at TechFlow',
    url: 'https://www.ui-layout.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518599904199-0ca897819ddb%3Fq%3D80%26w%3D1200%26auto%3Dformat&w=640&q=75',
    tags: [
      { id: '1', name: 'Product' },
      { id: '2', name: 'Management' },
      { id: '3', name: 'Tech' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 8,
    title: 'CTO at InnovateSphere',
    url: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tags: [
      { id: '4', name: 'Technology' },
      { id: '5', name: 'Leadership' },
      { id: '6', name: 'Innovation' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 9,
    title: 'Operations Director at CloudScale',
    url: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tags: [
      { id: '7', name: 'Operations' },
      { id: '8', name: 'Cloud' },
      { id: '9', name: 'Management' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 10,
    title: 'Engineering Lead at DataPro',
    url: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tags: [
      { id: '10', name: 'Engineering' },
      { id: '11', name: 'Leadership' },
      { id: '12', name: 'Data' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 11,
    title: 'VP of Technology at FutureNet',
    url: 'https://www.ui-layout.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1726551195764-f98a8e8a57c3%3Fq%3D80%26w%3D1200%26auto%3Dformat&w=640&q=75',
    tags: [
      { id: '13', name: 'Technology' },
      { id: '14', name: 'Executive' },
      { id: '15', name: 'Leadership' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
  {
    id: 12,
    title: 'Sunset Mountain Silhouette',
    url: 'https://www.ui-layout.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508873881324-c92a3fc536ba%3Fq%3D80%26w%3D1200%26auto%3Dformat&w=640&q=75',
    tags: [
      { id: '13', name: 'Sunset' },
      { id: '14', name: 'Executive' },
      { id: '15', name: 'Leadership' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
  },
]

function ImageItem({
  item,
  index,
  setSelected,
}: Readonly<ImageItemProps>): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.figure
      initial='hidden'
      animate={isInView && 'visible'}
      ref={ref}
      className="relative inline-block group w-full rounded-md bg-white 
    before:absolute before:inset-0 before:content-[''] before:bg-gradient-to-t
    before:from-gray-200/90 before:via-transparent 
    before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 
    hover:before:opacity-100 cursor-pointer overflow-hidden"
      onClick={() => setSelected(item as ItemType)}
    >
      <motion.img
        layoutId={`card-${item.id}`}
        whileHover={{ scale: 1.025 }}
        src={item.url}
        className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
      />

      <div className='absolute bottom-0 left-0 w-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
        <h1 className='font-semibold'>{item.title}</h1>
      </div>
    </motion.figure>
  )
}

function Modal({
  selected,
  setSelected,
}: Readonly<ModalProps>): JSX.Element | null {
  useEffect(() => {
    if (selected) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setSelected(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selected, setSelected])

  if (!selected) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer overflow-y-scroll'
      >
        <motion.div
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          layoutId={`card-${selected.id}`}
          className='w-full max-w-[1000px] relative overflow-x-hidden mx-auto my-8 cursor-default dark:bg-[#202020] bg-[#ebebeb]'
        >
          <button
            type='button'
            className='absolute top-2 right-2 p-2 mix-blend-multiply z-10'
            onClick={() => setSelected(null)}
          >
            <X className='w-6 h-6' />
          </button>

          <motion.div className='p-2 h-[70vh] rounded-md'>
            <img
              src={selected.url}
              alt={selected.title}
              width={1000}
              height={800}
              className='w-full h-full object-contain rounded-md dark:bg-black bg-white'
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className='bg-white dark:bg-black dark:text-white text-black p-4 rounded-md px-8'
          >
            <motion.h3
              variants={itemVariants}
              className='text-2xl font-bold mb-2'
            >
              {selected.title}
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className='flex gap-2 flex-wrap'
            >
              {selected.tags.map((tag) => (
                <div
                  key={tag.id}
                  className='bg-base-300 border dark:bg-gray-100 bg-gray-50 text-zinc-600 px-2 py-1 rounded-md'
                >
                  {tag.name}
                </div>
              ))}
            </motion.div>

            <motion.p variants={itemVariants} className='my-4'>
              {selected.description}
            </motion.p>

            <motion.a
              variants={itemVariants}
              href='#'
              className='flex w-fit gap-2 cursor-pointer px-4 py-2 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-colors border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold'
            >
              Download
              <Download className='w-5 h-5' />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function UnsplashGrid(): JSX.Element {
  const [selected, setSelected] = useState<ItemType | null>(null)

  return (
    <>
      <div className='container mx-auto sm:p-4 px-0 '>
        <div className='columns-2 md:columns-3 2xl:columns-4 gap-4'>
          {items.map((item, index) => (
            <ImageItem
              key={item.id}
              item={item}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>

      <Modal selected={selected} setSelected={setSelected} />
    </>
  )
}

export default UnsplashGrid
