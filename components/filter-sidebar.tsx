"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface FilterSidebarProps {
  filters: {
    gender: string[]
    experience: number[]
    availability: string[]
    consultationFee: number[]
    languages: string[]
    sortBy: string
  }
  onFilterChange: (filters: any) => void
}

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    experience: true,
    availability: true,
    consultationFee: true,
    languages: true,
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const handleGenderChange = (gender: string) => {
    const newGenders = filters.gender.includes(gender)
      ? filters.gender.filter((g) => g !== gender)
      : [...filters.gender, gender]

    onFilterChange({ gender: newGenders })
  }

  const handleAvailabilityChange = (slot: string) => {
    const newAvailability = filters.availability.includes(slot)
      ? filters.availability.filter((s) => s !== slot)
      : [...filters.availability, slot]

    onFilterChange({ availability: newAvailability })
  }

  const handleLanguageChange = (language: string) => {
    const newLanguages = filters.languages.includes(language)
      ? filters.languages.filter((l) => l !== language)
      : [...filters.languages, language]

    onFilterChange({ languages: newLanguages })
  }

  const handleExperienceChange = (value: number[]) => {
    onFilterChange({ experience: value })
  }

  const handleConsultationFeeChange = (value: number[]) => {
    onFilterChange({ consultationFee: value })
  }

  const handleFeeRangeChange = (min: number, max: number) => {
    onFilterChange({ consultationFee: [min, max] })
  }

  const clearAllFilters = () => {
    onFilterChange({
      gender: [],
      experience: [0, 30],
      availability: [],
      consultationFee: [0, 2000],
      languages: [],
      sortBy: "relevance",
    })
  }

  const FilterContent = () => (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#02475b]">Filters</h2>
        <Button variant="link" className="text-[#fc9916] p-0 h-auto text-sm" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>

      {/* Show Doctors Near Me */}
      <div className="border-b pb-4 mb-4">
        <Button variant="outline" className="w-full justify-start">
          Show Doctors Near Me
        </Button>
      </div>

      {/* Mode of Consult */}
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Mode of Consult</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="mode-hospital" />
            <Label htmlFor="mode-hospital" className="text-sm">
              Hospital Visit
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mode-online" defaultChecked />
            <Label htmlFor="mode-online" className="text-sm">
              Online Consult
            </Label>
          </div>
        </div>
      </div>

      {/* Experience Filter */}
      <div className="border-b pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("experience")}
        >
          <h3 className="font-medium">Experience (In Years)</h3>
          {expandedSections.experience ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {expandedSections.experience && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exp-0-5"
                checked={filters.experience[0] === 0 && filters.experience[1] >= 5}
                onCheckedChange={() => handleExperienceChange([0, 5])}
              />
              <Label htmlFor="exp-0-5" className="text-sm">
                0-5
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exp-6-10"
                checked={filters.experience[0] === 6 && filters.experience[1] === 10}
                onCheckedChange={() => handleExperienceChange([6, 10])}
              />
              <Label htmlFor="exp-6-10" className="text-sm">
                6-10
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exp-11-16"
                checked={filters.experience[0] === 11 && filters.experience[1] === 16}
                onCheckedChange={() => handleExperienceChange([11, 16])}
              />
              <Label htmlFor="exp-11-16" className="text-sm">
                11-16
              </Label>
            </div>
            <div className="mt-2 text-sm text-blue-600">+1 More</div>
          </div>
        )}
      </div>

      {/* Fees Filter */}
      <div className="border-b pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("consultationFee")}
        >
          <h3 className="font-medium">Fees (In Rupees)</h3>
          {expandedSections.consultationFee ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {expandedSections.consultationFee && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="fee-100-500"
                checked={filters.consultationFee[0] === 100 && filters.consultationFee[1] === 500}
                onCheckedChange={() => handleFeeRangeChange(100, 500)}
              />
              <Label htmlFor="fee-100-500" className="text-sm">
                100-500
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="fee-500-1000"
                checked={filters.consultationFee[0] === 500 && filters.consultationFee[1] === 1000}
                onCheckedChange={() => handleFeeRangeChange(500, 1000)}
              />
              <Label htmlFor="fee-500-1000" className="text-sm">
                500-1000
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="fee-1000-plus"
                checked={filters.consultationFee[0] === 1000 && filters.consultationFee[1] === 2000}
                onCheckedChange={() => handleFeeRangeChange(1000, 2000)}
              />
              <Label htmlFor="fee-1000-plus" className="text-sm">
                1000+
              </Label>
            </div>
          </div>
        )}
      </div>

      {/* Languages Filter */}
      <div className="border-b pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("languages")}
        >
          <h3 className="font-medium">Language</h3>
          {expandedSections.languages ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {expandedSections.languages && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="language-english"
                checked={filters.languages.includes("english")}
                onCheckedChange={() => handleLanguageChange("english")}
              />
              <Label htmlFor="language-english" className="text-sm">
                English
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="language-hindi"
                checked={filters.languages.includes("hindi")}
                onCheckedChange={() => handleLanguageChange("hindi")}
              />
              <Label htmlFor="language-hindi" className="text-sm">
                Hindi
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="language-telugu"
                checked={filters.languages.includes("telugu")}
                onCheckedChange={() => handleLanguageChange("telugu")}
              />
              <Label htmlFor="language-telugu" className="text-sm">
                Telugu
              </Label>
            </div>
            <div className="mt-2 text-sm text-blue-600">+10 More</div>
          </div>
        )}
      </div>

      {/* Facility Filter */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Facility</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="facility-apollo" />
            <Label htmlFor="facility-apollo" className="text-sm">
              Apollo Hospital
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="facility-other" />
            <Label htmlFor="facility-other" className="text-sm">
              Other Clinics
            </Label>
          </div>
        </div>
      </div>
    </>
  )

  // Mobile filter dialog
  const MobileFilterDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="md:hidden flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Filters</span>
            <Button variant="link" className="text-[#fc9916] p-0 h-auto text-sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <FilterContent />
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" className="flex-1" onClick={() => setIsFilterOpen(false)}>
            Cancel
          </Button>
          <Button className="flex-1 bg-[#02475b]" onClick={() => setIsFilterOpen(false)}>
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <MobileFilterDialog />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-full md:w-72 bg-white rounded-lg shadow-sm p-4">
        <FilterContent />
      </div>
    </>
  )
}
