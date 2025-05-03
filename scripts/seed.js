import { MongoClient } from "mongodb"

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Anushtha:anushtha%402004@taskmanagerdb.vcso4tn.mongodb.net/?retryWrites=true&w=majority&appName=taskManagerDB"
const MONGODB_DB = process.env.MONGODB_DB || "apollo"

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db(MONGODB_DB)

    // Clear existing data
    await db.collection("doctors").deleteMany({})
    console.log("Cleared existing doctors data")

    // Sample doctors data
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
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
        profilePicture: "/placeholder.svg?height=128&width=128",
      },
    ]

    // Insert doctors into database
    const result = await db.collection("doctors").insertMany(doctors)
    console.log(`${result.insertedCount} doctors inserted successfully`)
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await client.close()
    console.log("Database connection closed")
  }
}

seedDatabase()
