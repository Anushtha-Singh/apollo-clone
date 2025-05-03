"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Header from "./header"
import DoctorCard from "./doctor-card"
import FilterSidebar from "./filter-sidebar"
import { mockDoctors } from "@/lib/mock-data"
import type { Doctor } from "@/types/doctor"
import ContentSection from "./content-section"
import FaqSection from "./faq-section"
import Footer from "./footer"
import RelatedSpecialists from "./related-specialists"
import Image from "next/image"

export default function DoctorListing() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    gender: [] as string[],
    experience: [0, 30],
    availability: [] as string[],
    consultationFee: [0, 2000],
    languages: [] as string[],
    sortBy: "relevance",
  })

  useEffect(() => {
    // In a real app, this would be an API call
    // For the preview, we'll use mock data
    const fetchDoctors = () => {
      setLoading(true)

      // Apply filters to mock data
      let filteredDoctors = [...mockDoctors]

      // Filter by gender
      if (filters.gender.length > 0) {
        filteredDoctors = filteredDoctors.filter((doctor) => filters.gender.includes(doctor.gender))
      }

      // Filter by experience
      filteredDoctors = filteredDoctors.filter(
        (doctor) => doctor.experience >= filters.experience[0] && doctor.experience <= filters.experience[1],
      )

      // Filter by consultation fee
      filteredDoctors = filteredDoctors.filter(
        (doctor) =>
          doctor.consultationFee >= filters.consultationFee[0] && doctor.consultationFee <= filters.consultationFee[1],
      )

      // Filter by languages
      if (filters.languages.length > 0) {
        filteredDoctors = filteredDoctors.filter((doctor) =>
          doctor.languages.some((lang) => filters.languages.includes(lang.toLowerCase())),
        )
      }

      // Sort doctors
      switch (filters.sortBy) {
        case "experience_high_to_low":
          filteredDoctors.sort((a, b) => b.experience - a.experience)
          break
        case "experience_low_to_high":
          filteredDoctors.sort((a, b) => a.experience - b.experience)
          break
        case "fee_high_to_low":
          filteredDoctors.sort((a, b) => b.consultationFee - a.consultationFee)
          break
        case "fee_low_to_high":
          filteredDoctors.sort((a, b) => a.consultationFee - b.consultationFee)
          break
        default:
          filteredDoctors.sort((a, b) => b.rating - a.rating)
      }

      // Pagination
      const totalItems = filteredDoctors.length
      const totalPages = Math.ceil(totalItems / 10)
      const paginatedDoctors = filteredDoctors.slice((page - 1) * 10, page * 10)

      setDoctors(paginatedDoctors)
      setTotalPages(totalPages)
      setLoading(false)
    }

    fetchDoctors()
  }, [page, filters])

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters })
    setPage(1) // Reset to first page when filters change
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-500">
            Home &gt; Doctors &gt;{" "}
            <span className="text-[#02475b] font-medium">General Physician & Internal Medicine</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#02475b] mb-6">
          Consult General Physicians Online - Internal Medicine Specialists ({doctors.length} doctors)
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Sidebar */}
          <div className="md:w-72">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

            {/* Ad Section */}
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4 hidden md:block">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">Need help consult the right doctor?</h3>
              <p className="text-xs text-blue-700 mb-3">Call +91-8040245807 to book instantly</p>
              <div className="relative w-full h-32 mt-2">
                <Image
                  src="/placeholder.svg?height=128&width=240"
                  alt="Doctor consultation"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Doctor listing */}
          <div className="flex-1">
            {/* Sort options */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-[#02475b]">
                    {loading ? "Loading doctors..." : `${doctors.length} Doctors available`}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    className="border rounded-md px-2 py-1 text-sm"
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
                  >
                    <option value="relevance">Relevance</option>
                    <option value="experience_high_to_low">Experience: High to Low</option>
                    <option value="experience_low_to_high">Experience: Low to High</option>
                    <option value="fee_high_to_low">Fee: High to Low</option>
                    <option value="fee_low_to_high">Fee: Low to High</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Doctor cards */}
            <div className="space-y-4">
              {loading ? (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p>Loading doctors...</p>
                </div>
              ) : doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                  <DoctorCard key={doctor.id} doctor={doctor} isHourDoctor={index === 0} />
                ))
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p>No doctors found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                    Previous
                  </Button>
                  <div className="flex items-center px-4">
                    Page {page} of {totalPages}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Specialists Section */}
        <RelatedSpecialists />

        {/* Content Section */}
        <ContentSection />

        {/* FAQ Section */}
        <FaqSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
