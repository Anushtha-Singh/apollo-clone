import Image from "next/image"
import { Info, ThumbsUp } from "lucide-react"
import type { Doctor } from "@/types/doctor"

interface DoctorCardProps {
  doctor?: Doctor
  isHourDoctor?: boolean
}

export default function DoctorCard({ doctor, isHourDoctor = false }: DoctorCardProps) {
  // Return a placeholder or null if doctor is undefined
  if (!doctor) {
    return <div className="bg-white rounded-lg border p-4 mb-4">Loading doctor information...</div>
  }

  return (
    <div className="bg-white rounded-lg border p-4 mb-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Doctor image */}
        <div className="sm:w-24 flex-shrink-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden">
            <Image
              src={doctor.profilePicture || "/placeholder.svg?height=96&width=96"}
              alt={`Dr. ${doctor.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Doctor details */}
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-800">Dr. {doctor.name}</h3>
                <button className="text-gray-500">
                  <Info className="h-4 w-4" />
                </button>
                {isHourDoctor && (
                  <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded font-medium">
                    DOCTOR OF THE HOUR
                  </span>
                )}
              </div>
              <p className="text-gray-500">{doctor.specialization}</p>
              <p className="text-purple-600 font-medium text-sm mt-1">
                {doctor.experience} YEARS • {doctor.qualification}
              </p>
              <p className="text-gray-500 mt-2">{doctor.clinic}</p>

              {doctor.recommendationPercentage > 0 && (
                <div className="flex items-center text-gray-600 mt-2">
                  <ThumbsUp className="h-4 w-4 text-green-600 mr-1 fill-current" />
                  <span className="text-green-600 font-medium">{doctor.recommendationPercentage}%</span>
                  <span className="text-gray-500 text-sm ml-1">
                    ({doctor.patientCount || doctor.reviewCount}+ Patients)
                  </span>
                </div>
              )}
            </div>

            {/* Price and consultation button */}
            <div className="mt-4 sm:mt-0 w-full sm:w-auto flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">₹{doctor.consultationFee}</span>
                {doctor.cashback && (
                  <span className="text-sm text-amber-600 flex items-center">
                    <span className="inline-block bg-amber-100 rounded-full w-4 h-4 mr-1"></span>₹{doctor.cashback}{" "}
                    Cashback
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-auto gap-2">
                <button className="px-4 py-2 border border-teal-600 text-teal-600 rounded-md font-medium hover:bg-teal-50 transition-colors w-full sm:w-auto text-center">
                  Consult Online
                  {doctor.availableToday && (
                    <span className="block text-xs">
                      Available {doctor.availableTime ? `at ${doctor.availableTime}` : "Today"}
                    </span>
                  )}
                </button>
                {doctor.inPersonAvailable && (
                  <button className="px-4 py-2 border border-teal-600 text-teal-600 rounded-md font-medium hover:bg-teal-50 transition-colors w-full sm:w-auto text-center">
                    Visit Doctor
                    <span className="block text-xs">Available</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
