import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.doctor.deleteMany({})

  // Create sample doctors
  const doctors = [
    {
      name: "John Smith",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MD (Internal Medicine)",
      experience: 15,
      gender: "male",
      languages: ["English", "Hindi"],
      consultationFee: 800,
      rating: 4.8,
      reviewCount: 245,
      recommendationPercentage: 98,
      availableSlots: ["10:00 AM", "11:30 AM", "4:00 PM", "5:30 PM"],
    },
    {
      name: "Sarah Johnson",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, DNB (General Medicine)",
      experience: 8,
      gender: "female",
      languages: ["English", "Tamil", "Hindi"],
      consultationFee: 600,
      rating: 4.6,
      reviewCount: 178,
      recommendationPercentage: 95,
      availableSlots: ["9:00 AM", "12:30 PM", "3:00 PM"],
    },
    {
      name: "Rajesh Kumar",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MD (General Medicine)",
      experience: 20,
      gender: "male",
      languages: ["English", "Hindi", "Telugu"],
      consultationFee: 1000,
      rating: 4.9,
      reviewCount: 320,
      recommendationPercentage: 99,
      availableSlots: ["11:00 AM", "2:30 PM", "6:00 PM"],
    },
    {
      name: "Priya Sharma",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, DNB (Internal Medicine)",
      experience: 12,
      gender: "female",
      languages: ["English", "Hindi", "Punjabi"],
      consultationFee: 750,
      rating: 4.7,
      reviewCount: 210,
      recommendationPercentage: 96,
      availableSlots: ["10:30 AM", "1:00 PM", "4:30 PM"],
    },
    {
      name: "Michael Chen",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MD (Internal Medicine), DM (Cardiology)",
      experience: 18,
      gender: "male",
      languages: ["English", "Mandarin"],
      consultationFee: 1200,
      rating: 4.8,
      reviewCount: 275,
      recommendationPercentage: 97,
      availableSlots: ["9:30 AM", "12:00 PM", "3:30 PM"],
    },
    {
      name: "Ananya Patel",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MD (General Medicine)",
      experience: 10,
      gender: "female",
      languages: ["English", "Hindi", "Gujarati"],
      consultationFee: 700,
      rating: 4.5,
      reviewCount: 165,
      recommendationPercentage: 94,
      availableSlots: ["11:30 AM", "2:00 PM", "5:00 PM"],
    },
    {
      name: "David Wilson",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MRCP (UK)",
      experience: 14,
      gender: "male",
      languages: ["English"],
      consultationFee: 900,
      rating: 4.7,
      reviewCount: 230,
      recommendationPercentage: 96,
      availableSlots: ["10:00 AM", "1:30 PM", "4:00 PM"],
    },
    {
      name: "Lakshmi Rao",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MD (Internal Medicine)",
      experience: 9,
      gender: "female",
      languages: ["English", "Telugu", "Tamil"],
      consultationFee: 650,
      rating: 4.6,
      reviewCount: 185,
      recommendationPercentage: 95,
      availableSlots: ["9:00 AM", "12:30 PM", "3:30 PM"],
    },
    {
      name: "Arjun Mehta",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, DNB (General Medicine)",
      experience: 16,
      gender: "male",
      languages: ["English", "Hindi", "Marathi"],
      consultationFee: 850,
      rating: 4.8,
      reviewCount: 255,
      recommendationPercentage: 97,
      availableSlots: ["11:00 AM", "2:30 PM", "5:30 PM"],
    },
    {
      name: "Sophia Rodriguez",
      specialization: "General Physician & Internal Medicine",
      qualification: "MBBS, MD (Internal Medicine)",
      experience: 11,
      gender: "female",
      languages: ["English", "Spanish"],
      consultationFee: 750,
      rating: 4.7,
      reviewCount: 195,
      recommendationPercentage: 96,
      availableSlots: ["10:30 AM", "1:00 PM", "4:30 PM"],
    },
  ]

  for (const doctor of doctors) {
    await prisma.doctor.create({
      data: doctor,
    })
  }

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
