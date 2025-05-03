import type { Metadata } from "next"
import DoctorListing from "@/components/doctor-listing"

export const metadata: Metadata = {
  title: "General Physician & Internal Medicine Specialists | Apollo 247 Clone",
  description:
    "Consult with top General Physician & Internal Medicine specialists online. Book appointments with experienced doctors.",
  openGraph: {
    title: "General Physician & Internal Medicine Specialists | Apollo 247 Clone",
    description:
      "Consult with top General Physician & Internal Medicine specialists online. Book appointments with experienced doctors.",
    type: "website",
    url: "https://apollo-clone.vercel.app/specialties/general-physician-internal-medicine",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Physician & Internal Medicine Specialists | Apollo 247 Clone",
    description:
      "Consult with top General Physician & Internal Medicine specialists online. Book appointments with experienced doctors.",
  },
}

export default function Home() {
  return <DoctorListing />
}
