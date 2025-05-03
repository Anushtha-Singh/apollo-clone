export interface Doctor {
  id: string
  name: string
  specialization: string
  qualification: string
  experience: number
  gender: string
  languages: string[]
  consultationFee: number
  rating: number
  reviewCount: number
  recommendationPercentage: number
  availableSlots: string[]
  profilePicture?: string
  clinic?: string
  cashback?: number
  availableToday?: boolean
  availableTime?: string
  inPersonAvailable?: boolean
  patientCount?: number
}
