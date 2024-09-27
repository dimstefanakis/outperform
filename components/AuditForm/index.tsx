'use client'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ImageBox from '@/components/shared/ImageBox'
import { X } from 'lucide-react'

interface AuditFormProps {
  isOpen: boolean
  onClose: () => void
  logo: any // Update this type based on your logo structure
}

const AuditForm: React.FC<AuditFormProps> = ({ isOpen, onClose, logo }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    websiteUrl: '',
    region: '',
    monthlySpend: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    setStep(4) // Move to thank you page
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="mb-4"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="mb-4"
            />
          </>
        )
      case 2:
        return (
          <>
            <Input
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleInputChange}
              className="mb-4"
            />
            <Input
              name="websiteUrl"
              placeholder="Website URL"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              className="mb-4"
            />
            <Select onValueChange={(value) => handleSelectChange(value, 'region')}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="eu">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                {/* Add more regions as needed */}
              </SelectContent>
            </Select>
          </>
        )
      case 3:
        return (
          <Select onValueChange={(value) => handleSelectChange(value, 'monthlySpend')}>
            <SelectTrigger className="w-full mb-4">
              <SelectValue placeholder="Monthly Media Spend" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000">$0 - $1,000</SelectItem>
              <SelectItem value="1001-5000">$1,001 - $5,000</SelectItem>
              <SelectItem value="5001-10000">$5,001 - $10,000</SelectItem>
              <SelectItem value="10001-50000">$10,001 - $50,000</SelectItem>
              <SelectItem value="50001+">$50,001+</SelectItem>
            </SelectContent>
          </Select>
        )
      case 4:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>We'll be in touch soon.</p>
          </div>
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[100vh] w-[100vw] max-w-[100vw] p-0" style={{
        borderRadius: '0px'
      }}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 bg-white p-6 hidden md:block">
            <h2 className="text-2xl font-bold mb-4">Audit Your Performance</h2>
            <p>Get a free audit of your digital marketing performance.</p>
          </div>
          <div className="w-full md:w-1/2 bg-black text-white p-6">
            <div className="flex justify-between items-center mb-6">
              <ImageBox
                image={logo}
                alt="Logo"
                width={100}
                height={40}
                classesWrapper="w-[100px]"
              />
              <Button variant="ghost" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
              {renderStep()}
              {step < 4 && (
                <Button
                  type={step === 3 ? 'submit' : 'button'}
                  onClick={step < 3 ? handleNext : undefined}
                  className="w-full"
                >
                  {step === 3 ? 'Submit' : 'Next'}
                </Button>
              )}
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuditForm
