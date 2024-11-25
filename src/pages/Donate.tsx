import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Coffee,
  Book,
  Home,
  DollarSign,
  CheckCircle2,
  CreditCard,
  PiggyBank,
  User,
  Mail,
  Phone,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { IconGift } from '@tabler/icons-react'
import confetti from 'canvas-confetti'

interface DonationAmount {
  value: number
  icon: React.ElementType
  label: string
  description: string
}

interface PaymentMethod {
  id: string
  name: string
  icon: React.ElementType
}

interface DonorInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
}

const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [frequency, setFrequency] = useState<'once' | 'monthly' | 'yearly'>(
    'once'
  )
  const [showThankYou, setShowThankYou] = useState<boolean>(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>('card')
  const [step, setStep] = useState<1 | 2>(1)
  const [donorInfo, setDonorInfo] = useState<DonorInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const predefinedAmounts: DonationAmount[] = [
    {
      value: 25,
      icon: Coffee,
      label: 'Basic Support',
      description: 'Provides essential supplies for one person',
    },
    {
      value: 50,
      icon: Book,
      label: 'Major Help',
      description: 'Funds educational resources for a student',
    },
    {
      value: 100,
      icon: Home,
      label: 'Significant Impact',
      description: 'Supports a family for one week',
    },
    {
      value: 250,
      icon: Heart,
      label: 'Community Champion',
      description: 'Enables comprehensive community programs',
    },
  ]

  const paymentMethods: PaymentMethod[] = [
    { id: 'card', name: 'Credit Card', icon: CreditCard },
    { id: 'bank', name: 'Bank Transfer', icon: PiggyBank },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDonorInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const fireConfetti = () => {
    // First burst
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    // Create a colorful and spectacular effect
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      scalar: 0.8,
      shapes: ['star'],
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
    })

    fire(0.2, {
      spread: 60,
      decay: 0.91,
      scalar: 1.2,
      shapes: ['circle'],
      colors: [
        'FF0000',
        'FF7F00',
        'FFFF00',
        '00FF00',
        '0000FF',
        '4B0082',
        '9400D3',
      ],
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      shapes: ['circle'],
      colors: [
        '#26ccff',
        '#a25afd',
        '#ff5e7e',
        '#88ff5a',
        '#fcff42',
        '#ffa62d',
        '#ff36ff',
      ],
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      shapes: ['star'],
      colors: ['#ffff80', '#ff80ed', '#80ffff', '#ff99cc'],
    })

    // Add a delayed secondary burst
    setTimeout(() => {
      fire(0.1, {
        spread: 150,
        startVelocity: 45,
        decay: 0.92,
        scalar: 1.2,
        shapes: ['circle', 'star'],
        colors: ['#ff718d', '#fdff6a', '#ffaf7e', '#80ff72', '#7ea8ff'],
      })
    }, 200)
  }

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
    fireConfetti() // Trigger confetti animation
    setTimeout(() => setShowThankYou(false), 3000)
  }

  const handleNext = () => {
    if (amount || selectedAmount) {
      setStep(2)
    }
  }

  const calculateImpact = (): string => {
    const currentAmount = Number(amount || selectedAmount)
    if (currentAmount >= 250) return 'Transform an entire community'
    if (currentAmount >= 100) return 'Support multiple families'
    if (currentAmount >= 50) return 'Make a significant difference'
    return 'Help those in need'
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 '>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-4xl mx-auto pt-[var(--navbar-height)]'
      >
        <motion.div
          className='text-center sm:mb-12 lg:mb-16 mb-16'
          variants={itemVariants}
        >
          <div className='inline-flex items-center justify-center w-16 h-16 mb-4 sm:mb-6 bg-blue-100 rounded-full'>
            <IconGift className='w-8 h-8 text-blue-600' />
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4 sm:mb-6 px-4'>
            Support Our Mission
          </h1>
          <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-4 max-w-2xl mx-auto px-4'>
            Your generosity powers our impact. Together, we can create lasting
            change.
          </p>
        </motion.div>

        <motion.div
          className='bg-white rounded-2xl shadow-xl p-8'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue='donate' className='mb-8'>
            <TabsList className='grid w-full grid-cols-2 mb-8'>
              <TabsTrigger value='donate'>Make a Donation</TabsTrigger>
              <TabsTrigger value='impact'>Your Impact</TabsTrigger>
            </TabsList>

            <TabsContent value='donate'>
              <AnimatePresence mode='wait'>
                {step === 1 ? (
                  <motion.div
                    key='step1'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className='mb-8'>
                      <h3 className='text-lg font-semibold mb-4'>
                        Select Donation Frequency
                      </h3>
                      <RadioGroup
                        defaultValue='once'
                        className='flex space-x-4'
                        onValueChange={(value: 'once' | 'monthly' | 'yearly') =>
                          setFrequency(value)
                        }
                      >
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='once' id='once' />
                          <Label htmlFor='once'>One-time</Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='monthly' id='monthly' />
                          <Label htmlFor='monthly'>Monthly</Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='yearly' id='yearly' />
                          <Label htmlFor='yearly'>Yearly</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                      {predefinedAmounts.map((item) => (
                        <motion.button
                          key={item.value}
                          type='button'
                          onClick={() => {
                            setSelectedAmount(item.value)
                            setAmount(item.value.toString())
                          }}
                          className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                            selectedAmount === item.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <item.icon className='w-8 h-8 mb-4 text-blue-500' />
                          <div className='text-2xl font-bold text-gray-900 mb-2'>
                            ${item.value}
                          </div>
                          <div className='text-sm font-medium text-gray-900 mb-1'>
                            {item.label}
                          </div>
                          <div className='text-sm text-gray-600'>
                            {item.description}
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    <div className='mb-8'>
                      <label
                        htmlFor='amount'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Custom Amount
                      </label>
                      <div className='relative'>
                        <DollarSign className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                        <input
                          id='amount'
                          type='number'
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value)
                            setSelectedAmount(null)
                          }}
                          className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white'
                          placeholder='Enter amount'
                        />
                      </div>
                    </div>

                    <motion.button
                      onClick={handleNext}
                      className='w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key='step2'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <form onSubmit={handleDonate}>
                      <div className='mb-8'>
                        <h3 className='text-lg font-semibold mb-4'>
                          Your Information
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                          <div>
                            <label
                              htmlFor='firstName'
                              className='block text-sm font-medium text-gray-700 mb-2'
                            >
                              First Name
                            </label>
                            <div className='relative'>
                              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                              <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                value={donorInfo.firstName}
                                onChange={handleDonorInfoChange}
                                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white'
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='lastName'
                              className='block text-sm font-medium text-gray-700 mb-2'
                            >
                              Last Name
                            </label>
                            <div className='relative'>
                              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                              <input
                                id='lastName'
                                type='text'
                                name='lastName'
                                value={donorInfo.lastName}
                                onChange={handleDonorInfoChange}
                                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white'
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='email'
                              className='block text-sm font-medium text-gray-700 mb-2'
                            >
                              Email
                            </label>
                            <div className='relative'>
                              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                              <input
                                id='email'
                                type='email'
                                name='email'
                                value={donorInfo.email}
                                onChange={handleDonorInfoChange}
                                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white'
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='phone'
                              className='block text-sm font-medium text-gray-700 mb-2'
                            >
                              Phone
                            </label>
                            <div className='relative'>
                              <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                              <input
                                id='phone'
                                type='tel'
                                name='phone'
                                value={donorInfo.phone}
                                onChange={handleDonorInfoChange}
                                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white'
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='mb-8'>
                        <h3 className='text-lg font-semibold mb-4'>
                          Payment Method
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                          {paymentMethods.map((method) => (
                            <motion.button
                              key={method.id}
                              type='button'
                              onClick={() =>
                                setSelectedPaymentMethod(method.id)
                              }
                              className={`p-4 rounded-xl border-2 flex items-center space-x-3 ${
                                selectedPaymentMethod === method.id
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <method.icon className='w-6 h-6 text-blue-500' />
                              <span className='font-medium'>{method.name}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className='flex space-x-4'>
                        <motion.button
                          type='button'
                          onClick={() => setStep(1)}
                          className='w-1/3 bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors'
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type='submit'
                          className='w-2/3 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors'
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Complete Donation
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            <TabsContent value='impact'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='space-y-6'
              >
                <Card>
                  <CardContent className='p-6'>
                    <h3 className='text-2xl font-bold mb-4'>Your Impact</h3>
                    <div className='space-y-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='bg-blue-100 p-3 rounded-full'>
                          <Heart className='w-6 h-6 text-blue-600' />
                        </div>
                        <div>
                          <p className='font-medium'>Current Impact</p>
                          <p className='text-gray-600'>{calculateImpact()}</p>
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                        <div className='bg-gray-50 p-4 rounded-lg'>
                          <h4 className='font-semibold mb-2'>Monthly Impact</h4>
                          <p className='text-gray-600'>
                            Support{' '}
                            {Math.floor(
                              Number((amount || selectedAmount) ?? 0) / 25
                            )}{' '}
                            people per month
                          </p>
                        </div>
                        <div className='bg-gray-50 p-4 rounded-lg'>
                          <h4 className='font-semibold mb-2'>Yearly Impact</h4>
                          <p className='text-gray-600'>
                            Help{' '}
                            {Math.floor(
                              (Number((amount || selectedAmount) ?? 0) / 25) *
                                12
                            )}{' '}
                            people per year
                          </p>
                        </div>
                      </div>

                      <div className='mt-6'>
                        <h4 className='font-semibold mb-2'>Impact Breakdown</h4>
                        <ul className='space-y-3'>
                          <li className='flex items-center space-x-2'>
                            <CheckCircle2 className='w-5 h-5 text-green-500' />
                            <span>
                              Provide essential supplies and resources
                            </span>
                          </li>
                          <li className='flex items-center space-x-2'>
                            <CheckCircle2 className='w-5 h-5 text-green-500' />
                            <span>Support educational initiatives</span>
                          </li>
                          <li className='flex items-center space-x-2'>
                            <CheckCircle2 className='w-5 h-5 text-green-500' />
                            <span>Fund community development programs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className='mt-8 text-center text-sm text-gray-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>Your donation is securely processed and tax-deductible</p>
        </motion.div>

        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2'
            >
              <CheckCircle2 className='w-5 h-5' />
              <span>Thank you for your generous donation!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default DonationPage
