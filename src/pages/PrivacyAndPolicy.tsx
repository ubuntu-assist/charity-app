import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Clock,
  Users,
  Globe,
  ChevronDown,
  Cookie,
  Scale,
  Bell,
  HardDrive,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Section {
  id: string
  title: string
  icon: React.ElementType
  description: string
}

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('introduction')
  const lastUpdated = '2024-03-24'

  const sections: Section[] = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      description: 'Learn about our commitment to protecting your privacy',
    },
    {
      id: 'collection',
      title: 'Information Collection',
      icon: Eye,
      description: 'Understand what data we collect and why',
    },
    {
      id: 'usage',
      title: 'Information Usage',
      icon: FileText,
      description: 'How we use your information to improve our services',
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: Users,
      description: 'When and how we share your information',
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Lock,
      description: 'How we keep your information safe and secure',
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      icon: Cookie,
      description: 'Managing cookies and tracking technologies',
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: Scale,
      description: 'Understanding and exercising your privacy rights',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50'>
      <motion.div
        className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12 lg:mb-16 mb-16 pt-[var(--navbar-height)]'
          variants={itemVariants}
        >
          <div className='inline-flex items-center justify-center w-16 h-16 mb-4 sm:mb-6 bg-blue-100 rounded-full'>
            <Shield className='w-8 h-8 text-blue-600' />
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4 sm:mb-6 px-4'>
            Privacy Policy
          </h1>
          <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-4 max-w-2xl mx-auto px-4'>
            Your privacy is important to us. We've made our policy clear and
            easy to understand.
          </p>
          <div className='flex items-center justify-center space-x-2 text-sm text-gray-500'>
            <Clock className='w-4 h-4' />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div className='mb-8 sm:mb-12 lg:mb-16' variants={itemVariants}>
          <Card className='border-0 shadow-lg bg-white/80 backdrop-blur-sm'>
            <CardHeader className='p-4 sm:p-6'>
              <CardTitle className='flex items-center space-x-2 text-lg sm:text-xl'>
                <Globe className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
                <span>Quick Navigation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4 sm:p-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={
                        activeSection === section.id ? 'default' : 'outline'
                      }
                      className={`flex flex-col items-start w-full h-auto p-3 sm:p-4 text-left ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                          : 'hover:bg-blue-50'
                      }`}
                      onClick={() => {
                        setActiveSection(section.id)
                        document.getElementById(section.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                      }}
                    >
                      <div className='flex items-center space-x-2 mb-2'>
                        <section.icon className='w-4 h-4 sm:w-5 sm:h-5' />
                        <span className='font-semibold text-sm sm:text-base'>
                          {section.title}
                        </span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className='space-y-6 sm:space-y-8'
          variants={containerVariants}
        >
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              variants={itemVariants}
              className='scroll-mt-24'
            >
              <Card className='border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300'>
                <CardHeader className='p-4 sm:p-6'>
                  <CardTitle className='flex items-center space-x-3 text-base sm:text-lg lg:text-xl'>
                    <div className='p-2 bg-blue-100 rounded-lg'>
                      <section.icon className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600' />
                    </div>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-4 sm:p-6'>
                  <Accordion
                    type='single'
                    collapsible
                    className='space-y-3 sm:space-y-4'
                  >
                    {section.id === 'introduction' && (
                      <>
                        <AccordionItem
                          value='overview'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <FileText className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Overview
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                This Privacy Policy describes how we collect,
                                use, process, and disclose your information
                                across our platform.
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>
                                  Comprehensive coverage of data practices
                                </li>
                                <li>Clear explanation of your rights</li>
                                <li>
                                  Regular updates to reflect current standards
                                </li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value='scope'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Users className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Scope
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                This policy applies to all users of our
                                services, including website visitors, registered
                                users, and partners.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    )}
                    {/* Similar structure for other sections */}
                    {section.id === 'collection' && (
                      <>
                        <AccordionItem
                          value='personal-info'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Users className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Personal Information
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                We collect the following personal information:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Name and contact details</li>
                                <li>Email address and phone number</li>
                                <li>Billing and payment information</li>
                                <li>Device and browser information</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value='automated-info'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <HardDrive className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Automated Collection
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                Information automatically collected includes:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>IP address and device identifiers</li>
                                <li>Browser type and settings</li>
                                <li>Usage data and interactions</li>
                                <li>Cookie data and local storage</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    )}

                    {section.id === 'usage' && (
                      <>
                        <AccordionItem
                          value='purposes'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <FileText className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                How We Use Your Data
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                We use your information for:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Providing and improving our services</li>
                                <li>Personalizing your experience</li>
                                <li>Communication and support</li>
                                <li>Analytics and research</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value='legal-basis'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Scale className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Legal Basis
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                Our legal bases for processing include:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Your explicit consent</li>
                                <li>Contractual necessity</li>
                                <li>Legal obligations</li>
                                <li>Legitimate business interests</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    )}

                    {section.id === 'sharing' && (
                      <>
                        <AccordionItem
                          value='third-parties'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Users className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Third-Party Sharing
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                We may share information with:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Service providers and partners</li>
                                <li>Legal authorities when required</li>
                                <li>Third-party analytics services</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value='safeguards'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Shield className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Data Transfer Safeguards
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                Our data transfer safeguards include:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Standard contractual clauses</li>
                                <li>Data processing agreements</li>
                                <li>Security certifications</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    )}

                    {section.id === 'security' && (
                      <>
                        <AccordionItem
                          value='measures'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Lock className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Security Measures
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                Our security measures include:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Encryption in transit and at rest</li>
                                <li>Access controls and authentication</li>
                                <li>Regular security assessments</li>
                                <li>Employee training and policies</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value='breach'
                          className='border rounded-lg px-3 sm:px-4'
                        >
                          <AccordionTrigger className='hover:no-underline py-3 sm:py-4'>
                            <div className='flex items-center space-x-2'>
                              <Bell className='w-4 h-4 sm:w-5 sm:h-5 text-blue-500' />
                              <span className='font-semibold text-sm sm:text-base'>
                                Data Breach Response
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className='pt-2 pb-3 sm:pb-4'>
                            <div className='space-y-4 text-sm sm:text-base text-gray-600'>
                              <p className='leading-relaxed'>
                                In case of a data breach, we will:
                              </p>
                              <ul className='list-disc pl-5 space-y-2'>
                                <li>Notify affected users promptly</li>
                                <li>Investigate the incident thoroughly</li>
                                <li>Take necessary remedial actions</li>
                                <li>Implement preventive measures</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </>
                    )}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PrivacyPolicyPage
