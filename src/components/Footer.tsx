import { FormEvent, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import * as Toast from '@radix-ui/react-toast'
import { Link } from 'react-router'

/**
 * SVG Path Array for "HOPHERE" text
 * Features decorative curves, flourishes, and elegant styling
 * Optimized for vector rendering with artistic elements
 */

const pathArr = [
  // H - Decorative with flowing curves and flourishes
  'M20 0C15 0 10 5 10 10V55C10 60 5 65 0 65V85C5 85 10 90 10 95V116C10 121 15 126 20 126H30C35 ' +
    '126 40 121 40 116V95C40 90 45 85 50 85C55 85 60 90 60 95V116C60 121 65 126 70 126H80C85 126 ' +
    '90 121 90 116V95C90 90 95 85 100 85V65C95 65 90 60 90 55V10C90 5 85 0 80 0H70C65 0 60 5 60 ' +
    '10V31C60 36 55 41 50 41C45 41 40 36 40 31V10C40 5 35 0 30 0H20Z',

  // O - Elegant with swirls and ornamental curves
  'M150 39.68C173.74 39.68 193.33 58.11 193.33 82.01C193.33 106.75 175.4 125.84 150.33 125.84C126.42 ' +
    '125.84 107.66 106.25 107.66 82.51C107.66 58.94 126.59 39.68 150 39.68ZM150.5 56.91C135.44 56.91 ' +
    '127.57 66.12 127.57 81.85C127.57 96.23 137.11 106.44 150.5 106.44C164.55 106.44 173.25 96.73 ' +
    '173.25 81.85C173.25 66.79 164.55 56.91 150.5 56.91ZM150.5 35C157 35 163 38 168 43C185 25 165 15 ' +
    '150.5 15C136 15 116 25 133 43C138 38 144 35 150.5 35ZM150.5 128C144 128 138 125 133 120C116 138 ' +
    '136 148 150.5 148C165 148 185 138 168 120C163 125 157 128 150.5 128Z',

  // P - Artistic with flowing lines and decorative elements
  'M210 0C205 0 200 5 200 10V116C200 121 205 126 210 126H220C225 126 230 121 230 116V90L235 85C240 ' +
    '90 250 85 255 80L285 120C287 123 290 126 295 126H305C312 126 315 120 312 115L277 70C292 60 300 ' +
    '45 300 30C300 10 285 0 260 0H210ZM230 20H258C270 20 280 25 280 40C280 55 270 60 258 60H230V20Z',

  // E - Ornamental with detailed flourishes
  'M320 0C315 0 310 5 310 10V116C310 121 315 126 320 126H390C395 126 400 121 400 116V106C400 101 ' +
    '395 96 390 96H340V75H380C385 75 390 70 390 65V55C390 50 385 45 380 45H340V30H390C395 30 400 25 ' +
    '400 20V10C400 5 395 0 390 0H320ZM330 5L340 15V111L330 121V5ZM380 5L370 15V111L380 121V5Z',

  // H - Second instance with matching style
  'M420 0C415 0 410 5 410 10V55C410 60 405 65 400 65V85C405 85 410 90 410 95V116C410 121 415 126 ' +
    '420 126H430C435 126 440 121 440 116V95C440 90 445 85 450 85C455 85 460 90 460 95V116C460 121 ' +
    '465 126 470 126H480C485 126 490 121 490 116V95C490 90 495 85 500 85V65C495 65 490 60 490 55V10C490 ' +
    '5 485 0 480 0H470C465 0 460 5 460 10V31C460 36 455 41 450 41C445 41 440 36 440 31V10C440 5 435 0 430 0H420Z',

  // E - Second instance with matching ornamental style
  'M520 0C515 0 510 5 510 10V116C510 121 515 126 520 126H590C595 126 600 121 600 116V106C600 101 ' +
    '595 96 590 96H540V75H580C585 75 590 70 590 65V55C590 50 585 45 580 45H540V30H590C595 30 600 25 ' +
    '600 20V10C600 5 595 0 590 0H520ZM530 5L540 15V111L530 121V5ZM580 5L570 15V111L580 121V5Z',

  // R - Decorative with swooping curves and artistic elements
  'M620 0C615 0 610 5 610 10V116C610 121 615 126 620 126H630C635 126 640 121 640 116V90L645 85C650 ' +
    '90 655 85 660 80L695 120C697 123 700 126 705 126H715C722 126 725 120 722 115L682 65C697 55 710 ' +
    '45 710 30C710 10 695 0 670 0H620ZM640 20H668C680 20 690 25 690 40C690 55 680 60 668 60H640V20ZM695 ' +
    '40C705 40 710 30 705 20C700 10 685 15 690 30C692 35 693 40 695 40Z',

  // E - Third instance with matching ornamental style
  'M720 0C715 0 710 5 710 10V116C710 121 715 126 720 126H790C795 126 800 121 800 116V106C800 101 ' +
    '795 96 790 96H740V75H780C785 75 790 70 790 65V55C790 50 785 45 780 45H740V30H790C795 30 800 25 ' +
    '800 20V10C800 5 795 0 790 0H720ZM730 5L740 15V111L730 121V5ZM780 5L770 15V111L780 121V5Z',
]

const Footer = () => {
  const container = useRef<HTMLDivElement>(null)
  // const [Send, cilentData] = useNewsLetter()
  const [openPopup, setOpenPopup] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

  const variants = {
    visible: (i: any) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  }
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault()
    console.log(e)
    e.preventDefault()
    const target = e.target as HTMLFormElement

    // Send(data)
    setOpenPopup(true)
    target.reset()
    if (setOpenPopup) {
      setTimeout(() => {
        setOpenPopup(false)
      }, 2000)
    }
  }

  return (
    <>
      <Toast.Provider>
        <Toast.Provider swipeDirection='right'>
          <Toast.Root
            className='ToastRoot'
            open={openPopup}
            onOpenChange={setOpenPopup}
          >
            <Toast.Title className='ToastTitle'>
              We Received Your Message, Thanks
            </Toast.Title>

            <Toast.Action
              className='ToastAction'
              asChild
              altText='Goto schedule to undo'
            >
              <button className='bg-white text-black px-3 py-1 rounded-lg'>
                ok
              </button>
            </Toast.Action>
          </Toast.Root>

          <Toast.Viewport className='ToastViewport' />
        </Toast.Provider>

        <Toast.Viewport />
      </Toast.Provider>

      <div
        className='relative h-full sm:pt-14 pt-8 bg-gradient-to-r from-[#28345c] via-[#161c34] to-[#28345c] text-white'
        ref={container}
      >
        <div className='sm:container  px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <div>
              <h1 className='md:text-4xl text-2xl font-semibold'>
                Let&lsquo;s do great work together
              </h1>
              <div className='pt-2 pb-6 md:w-99  '>
                <p className='md:text-2xl text-xl  py-4'>
                  Sign up for our newsletter*
                </p>
                <div className=' hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden  border-black rounded-full  text-white hover:text-black md:text-2xl'>
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className='relative z-2 grid grid-cols-6  w-full h-full'
                  >
                    <input
                      type='email'
                      name='newsletter_email'
                      className='border-none bg-transparent text-white  py-3 px-6  col-span-5'
                      placeholder='Your Email * '
                    />{' '}
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full cols-span-1'
                    >
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        className='w-full h-[80%] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='#000'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <ul>
                <li className='text-2xl pb-2 text-blue-500 font-semibold'>
                  SITEMAP
                </li>
                <li className='text-xl font-medium'>
                  <a href='/'>Home</a>
                </li>
                <li className='text-xl font-medium'>
                  <a href='/about'>About us</a>
                </li>
                <li className='text-xl font-medium'>
                  <a href='/services'>Our Services</a>
                </li>

                <li className='text-xl font-medium'>
                  <a href='/projects'>Projects</a>
                </li>
                <li className='text-xl font-medium'>
                  <Link to='/blog'>Blogs</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className='text-2xl pb-2 text-blue-500 font-semibold'>
                  SOCIAL
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.linkedin.com/company/next-codez/'
                    target='_blank'
                    className='underline'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://twitter.com/NextCodez'
                    target='_blank'
                    className='underline'
                  >
                    Twitter
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.instagram.com/nextcodez/'
                    target='_blank'
                    className='underline'
                  >
                    Instagram
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.facebook.com/nextcodezz'
                    target='_blank'
                    className='underline'
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-y-2 md:py-4 border-gray-200'>
            <motion.svg
              width='776'
              ref={ref}
              height='137'
              viewBox='0 0 776 137'
              fill='none'
              className='sm:h-fit h-20 md:px-8 px-2 footer-logo w-full'
              xmlns='http://www.w3.org/2000/svg'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
            >
              {pathArr.map((path, index) => {
                return (
                  <motion.path
                    custom={index}
                    variants={variants}
                    d={path}
                    fill='#3E7AEE'
                    key={path}
                  />
                )
              })}
            </motion.svg>
          </div>
          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
            <span className='font-medium'>
              &copy; 2024 HopeForward. All Rights Reserved.
            </span>
            <Link to='/privacy' className='font-semibold'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
