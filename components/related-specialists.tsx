"use client"

import Link from "next/link"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function RelatedSpecialists() {
  const [expandedSections, setExpandedSections] = useState({
    specialists: false,
    treatments: false,
    procedures: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#02475b] flex items-center gap-2">
            General Physician/ Internal Medicine Specialists Available for online consults
            <ExternalLink className="h-4 w-4" />
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#02475b] flex items-center gap-2">
            Female General Physician/ Internal Medicine Specialists in top cities
            <ExternalLink className="h-4 w-4" />
          </h3>
        </div>

        <div>
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleSection("specialists")}
          >
            <h3 className="text-lg font-semibold text-[#02475b]">
              General Physician/ Internal Medicine Specialists in top cities
            </h3>
            {expandedSections.specialists ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.specialists && (
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <Link href="#" className="text-blue-600 hover:underline">
                General Physicians in Delhi
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                General Physicians in Mumbai
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                General Physicians in Bangalore
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                General Physicians in Hyderabad
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                General Physicians in Chennai
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                General Physicians in Kolkata
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleSection("treatments")}
          >
            <h3 className="text-lg font-semibold text-[#02475b]">Related Treatments</h3>
            {expandedSections.treatments ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.treatments && (
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <Link href="#" className="text-blue-600 hover:underline">
                Fever Treatment
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                Cough & Cold Treatment
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                Diabetes Management
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                Hypertension Management
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                Thyroid Disorder Treatment
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                Digestive Issues Treatment
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleSection("procedures")}
          >
            <h3 className="text-lg font-semibold text-[#02475b]">Related Procedures</h3>
            {expandedSections.procedures ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.procedures && (
            <div className="mt-2 text-sm">
              <div className="flex flex-wrap gap-2">
                {[
                  "Doctors for CT Scan Abdomen",
                  "Doctors for CT Scan Abdomen Tripasic",
                  "Doctors for CT Scan Brain",
                  "Doctors for CT Scan Chest",
                  "Doctors for CT Scan Contrast",
                  "Doctors for CT Scan CT Anglo: Renal/Brain/Neck",
                  "Doctors for CT Scan CT Bronchoscopy",
                  "Doctors for CT Scan CT Guided Biopsy",
                  "Doctors for CT Scan CT Urography",
                  "Doctors for CT Scan HRCT Thorax",
                  "Doctors for CT Scan Joint 3D",
                  "Doctors for CT Scan Joint: Knee/Shoulder/Wrist - R/L",
                  "Doctors for CT Scan Neck",
                  "Doctors for CT Scan Orbit",
                  "Doctors for CT Scan Pelvis",
                  "Doctors for 9968906868",
                  "Doctors for Advised to take complete bed rest one day",
                  "Doctors for Chemical peels for full arm",
                  "Doctors for Consuktation",
                  "Doctors for Ct brain",
                ].map((item, index) => (
                  <Link key={index} href="#" className="text-gray-600 hover:text-blue-600">
                    <span className="inline-block bg-gray-100 rounded-full w-1 h-1 mr-1"></span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
