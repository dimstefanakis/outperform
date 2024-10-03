'use client'
import { AnimatePresence,motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2,X } from 'lucide-react'
import Image from 'next/image'
import { useRef,useState } from 'react'
import { Controller,useForm } from 'react-hook-form'
import { toast } from "sonner"

import { createAuditFormEntry } from '@/app/actions/createAuditFormEntry'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface AuditFormProps {
  isOpen: boolean
  onClose: () => void
  logo: any
}

const AuditForm: React.FC<AuditFormProps> = ({ isOpen, onClose, logo }) => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      businessName: '',
      websiteUrl: '',
      region: '',
      monthlySpend: '',
    }
  })
  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleNext = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handleBack = (e) => {
    e.preventDefault()
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Check if the honeypot field is filled
      if (honeypotRef.current && honeypotRef.current.value) {
        console.log('Bot submission detected')
        return
      }

      // Check if all required fields are filled
      const requiredFields = ['name', 'email', 'businessName', 'websiteUrl', 'region', 'monthlySpend']
      const missingFields = requiredFields.filter(field => !data[field])

      if (missingFields.length > 0) {
        toast.error('Please fill in all required fields')
        setIsSubmitting(false)
        return
      }

      const result = await createAuditFormEntry(data)
      if (result.success) {
        setStep(4)

        // Add Lead event for Reddit and Meta tracking with additional fields
        if (typeof window !== 'undefined') {
          const trackingData = {
            content_name: 'Audit Form Submission',
            currency: 'USD',
            value: 0.00, // You can set an estimated value if applicable
            business_name: data.businessName,
            website_url: data.websiteUrl,
            region: data.region,
            monthly_spend: data.monthlySpend,
            name: data.name,
            email: data.email,
          };

          try {
            // Reddit Pixel
            // @ts-ignore
            if (rdt) {
              // @ts-ignore
              rdt('track', 'Lead');
            }

            // Meta Pixel
            // @ts-ignore
            if (fbq) {
              // @ts-ignore
              fbq('track', 'Lead', {
                email: data.email,
              });
            }
          } catch (error) {
            console.error('Error tracking form submission:', error)
          }
        }
      } else {
        console.error('Failed to submit form:', result.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  }

  const renderStep = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div key={step} {...fadeInUp} className="mt-8 md:mt-0">
          {step < 4 && (
            <div>
              <div className="mb-6">
                <h3 className="text-blue-500 text-xl md:hidden font-semibold inline-block">
                  {step === 1 && "CONTACT INFO"}
                  {step === 2 && "BUSINESS DETAILS"}
                  {step === 3 && "MEDIA BUDGET"}
                </h3>
                <Separator className="w-[50px] h-[2px] md:hidden bg-blue-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12">LET'S SUPERCHARGE YOUR ADS</h2>
            </div>
          )}
          {(() => {
            switch (step) {
              case 1:
                return (
                  <>
                    <div className="mb-6 hidden md:block">
                      <h3 className="text-blue-500 text-lg font-semibold inline-block">CONTACT INFO</h3>
                      <Separator className="w-[50px] h-[2px] bg-blue-500" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Name"
                            className="mb-4 md:mb-0 bg-black text-xl text-white border-0 border-b md:border-b-2 rounded-none border-[#686868] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 px-0 flex-1"
                          />
                        )}
                      />
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email"
                            className="mb-4 md:mb-0 bg-black text-xl text-white border-0 border-b md:border-b-2 rounded-none border-[#686868] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 px-0 flex-1"
                          />
                        )}
                      />
                    </div>
                  </>
                )
              case 2:
                return (
                  <>
                    <div className="mb-6 hidden md:block">
                      <h3 className="text-blue-500 text-lg font-semibold inline-block">BUSINESS DETAILS</h3>
                      <Separator className="w-[50px] h-[2px] bg-blue-500" />
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                      <Controller
                        name="businessName"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Business Name"
                            className="mb-4 md:mb-0 bg-black text-xl text-white border-0 border-b md:border-b-2 rounded-none border-[#686868] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 px-0 flex-1"
                          />
                        )}
                      />
                      <Controller
                        name="websiteUrl"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Website URL"
                            className="mb-4 md:mb-0 bg-black text-xl text-white border-0 border-b md:border-b-2 rounded-none border-[#686868] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 px-0 flex-1"
                          />
                        )}
                      />
                      <Controller
                        name="region"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mb-4 text-xl bg-black text-white border-0 border-b md:border-b-2 rounded-none border-[#686868] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 px-0">
                              <SelectValue placeholder="Select Region" />
                            </SelectTrigger>
                            <SelectContent className="bg-black text-white">
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="eu">Europe</SelectItem>
                              <SelectItem value="asia">Asia</SelectItem>
                              {/* Add more regions as needed */}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </>
                )
              case 3:
                return (
                  <>
                    {step < 4 && (
                      <div className='hidden md:block'>
                        <div className="mb-6 md:hidden">
                          <h3 className="text-blue-500 text-xl md:text-sm font-semibold inline-block">
                            MEDIA BUDGET
                          </h3>
                          <Separator className="w-[50px] h-[2px] bg-blue-500" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:hidden">LET'S SUPERCHARGE YOUR ADS</h2>
                      </div>
                    )}
                    <div className="mb-6 hidden md:block">
                      <h3 className="text-blue-500 text-lg font-semibold inline-block">MEDIA BUDGET</h3>
                      <Separator className="w-[50px] h-[2px] bg-blue-500" />
                    </div>
                    <label className="block mb-6 text-xl">
                      Monthly Media Spend <span className="text-gray-500">in USD</span>
                    </label>
                    <div className="flex flex-wrap gap-6">
                      <Controller
                        name="monthlySpend"
                        control={control}
                        render={({ field }) => (
                          <>
                            {[
                              'Less than $50K',
                              '$50K-200K',
                              '$200K-500K',
                              '$500K-$1M',
                              '$1M+'
                            ].map((value) => (
                              <Button
                                key={value}
                                type='button'
                                onClick={() => field.onChange(value)}
                                className={`rounded-full border-2 px-[30px] py-[25px] text-sm md:text-xl ${field.value === value
                                  ? 'bg-blue-500 text-white border-blue-500'
                                  : 'bg-black text-[#686868] border-[#686868] hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white'
                                  }`}
                              >
                                {value}
                              </Button>
                            ))}
                          </>
                        )}
                      />
                    </div>
                  </>
                )
              case 4:
                return (
                  <motion.div {...fadeInUp} className="flex flex-col items-center justify-center h-full text-center mt-16 md:mt-0">
                    <Image
                      src="/astronaut.png"
                      alt="Astronaut"
                      width={200}
                      height={200}
                      className="mb-6 invert"
                    />
                    <h2 className="text-7xl font-bold mb-4">THANK YOU.</h2>
                    <p className="text-2xl mb-2">We'll be in touch.</p>
                    <p className="text-2xl">Shortly!</p>
                  </motion.div>
                )
            }
          })()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="h-[100vh] w-[100vw] max-w-[100vw] p-0 border-0"
        style={{
          borderRadius: '0px',
        }}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 bg-white p-6 hidden md:flex md:flex-col md:justify-center md:items-center">
            <Image
              src="/outperformlogo.png"
              alt="Logo"
              width={253}
              height={32}
              className="w-[160px] invert absolute top-0 left-0 m-6 hidden md:block"
            />
            <div className="flex flex-col items-normal justify-start ml-[5%]">
              <h2 className="md:text-7xl lg:text-9xl font-bold mb-4">IGNITE <br /> GROWTH</h2>
              <p className="text-xl text-gray-500 ml-20 max-w-[400px]">
                Revolutionizing businesses through cutting-edge performance.
              </p>
            </div>
          </div>
          <div className={`flex flex-col w-full h-full md:w-1/2 text-white p-6 md:p-16 ${step === 4 ? 'bg-[#0083FF]' : 'bg-black'}`}>
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/outperformlogo.png"
                alt="Logo"
                width={160}
                height={20}
                className="w-[120px] md:hidden"
              />
              <Button variant="ghost" onClick={onClose} className="md:absolute md:top-0 md:right-0 md:m-6 p-0">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col mt-16'>
              {/* Add the honeypot field */}
              <input
                type="text"
                name="website"
                ref={honeypotRef}
                tabIndex={-1}
                autoComplete="off"
                style={{
                  position: 'absolute',
                  top: '-9999px',
                  left: '-9999px',
                  height: 0,
                  width: 0,
                  opacity: 0,
                }}
              />
              <div>
                {renderStep()}
              </div>
              <div className='flex-1'></div>
              <AnimatePresence>
                {step < 4 && (
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center mt-6"
                  >
                    {step > 1 ? (
                      <Button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center justify-center text-3xl hover:bg-transparent hover:text-white p-0 md:p-2"
                        variant="ghost"
                        disabled={isSubmitting}
                      >
                        <ChevronLeft className="h-8 w-8 mb-1" color="white" /> BACK
                      </Button>
                    ) : (
                      <div></div> // Empty div to maintain layout when there's no back button
                    )}
                    <Button
                      type={step === 3 ? 'submit' : 'button'}
                      onClick={step < 3 ? handleNext : undefined}
                      className={`flex items-center justify-center text-3xl hover:bg-transparent ml-auto p-0 md:p-2 ${
                        step === 3 ? 'text-[#3b82f6] hover:text-[#3b82f6]' : 'hover:text-white'
                      }`}
                      variant="ghost"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <LoadingSpinner className="h-8 w-8" />
                      ) : (
                        <>
                          {step === 3 ? 'SUBMIT' : 'NEXT'} <ChevronRight className="h-8 w-8 mb-1" color={step === 3 ? "#3b82f6" : "white"} />
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

export default AuditForm