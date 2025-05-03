import Link from "next/link"
import { Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="apollo247.svg" alt="Apollo 247" className="h-10" />
          </Link>

          {/* Location + Search - Desktop */}
          <div className="hidden lg:flex items-center flex-1 mx-6 max-w-2xl">
            <div className="flex items-center mr-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Select Location</span>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700">Select Address</span>
                  <span className="ml-1">▼</span>
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search Doctors, Specialities, Conditions etc."
                className="w-full pl-10 pr-3 py-2.5 border rounded-full text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-[#fc9916]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            </div>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="rounded-full border-[#02475b] text-[#02475b] px-4 py-1.5 hover:bg-[#02475b] hover:text-white text-sm"
            >
              <User className="h-4 w-4 mr-2" /> Login
            </Button>
          </div>

          {/* Mobile view */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Select Location</span>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700">Select Address</span>
                  <span className="ml-1">▼</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-gray-100 p-2 rounded-full">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
              <button className="text-[#02475b] p-1">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="hidden xl:block border-t">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between py-3">
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Buy Medicines
              </Link>
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Find Doctors
              </Link>
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Lab Tests
              </Link>
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Circle Membership
              </Link>
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Health Records
              </Link>
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Diabetes Reversal
              </Link>
              <Link href="#" className="text-sm text-[#02475b] hover:text-[#fc9916] font-medium">
                Buy Insurance <span className="text-xs bg-gray-100 text-gray-500 ml-1 px-1 rounded">New</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
