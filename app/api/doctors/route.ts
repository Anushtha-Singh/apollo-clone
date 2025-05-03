import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request) {
  try {
    const { db } = await connectToDatabase()
    const { searchParams } = new URL(request.url)

    // Parse pagination parameters
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    // Parse filter parameters
    const gender = searchParams.getAll("gender")
    const minExperience = Number.parseInt(searchParams.get("minExperience") || "0")
    const maxExperience = Number.parseInt(searchParams.get("maxExperience") || "30")
    const minFee = Number.parseInt(searchParams.get("minFee") || "0")
    const maxFee = Number.parseInt(searchParams.get("maxFee") || "2000")
    const languages = searchParams.getAll("language")
    const sortBy = searchParams.get("sortBy") || "relevance"

    // Build filter query
    const filter = {
      specialization: "General Physician & Internal Medicine",
      experience: { $gte: minExperience, $lte: maxExperience },
      consultationFee: { $gte: minFee, $lte: maxFee },
    }

    if (gender.length > 0) {
      filter.gender = { $in: gender }
    }

    if (languages.length > 0) {
      filter.languages = { $in: languages }
    }

    // Build sort options
    let sort = {}

    switch (sortBy) {
      case "experience_high_to_low":
        sort = { experience: -1 }
        break
      case "experience_low_to_high":
        sort = { experience: 1 }
        break
      case "fee_high_to_low":
        sort = { consultationFee: -1 }
        break
      case "fee_low_to_high":
        sort = { consultationFee: 1 }
        break
      default:
        sort = { rating: -1 }
    }

    // Count total matching doctors for pagination
    const totalDoctors = await db.collection("doctors").countDocuments(filter)
    const totalPages = Math.ceil(totalDoctors / limit)

    // Query doctors with filters, sorting and pagination
    const doctors = await db.collection("doctors").find(filter).sort(sort).skip(skip).limit(limit).toArray()

    return NextResponse.json({
      doctors,
      page,
      limit,
      totalPages,
      totalDoctors,
    })
  } catch (error) {
    console.error("Error fetching doctors:", error)
    return NextResponse.json({ error: "Failed to fetch doctors" }, { status: 500 })
  }
}
