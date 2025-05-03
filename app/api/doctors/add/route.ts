import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request) {
  try {
    const { db } = await connectToDatabase()
    const body = await request.json()

    // Validate required fields
    const requiredFields = [
      "name",
      "specialization",
      "qualification",
      "experience",
      "gender",
      "languages",
      "consultationFee",
    ]

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Prepare doctor data
    const doctor = {
      name: body.name,
      specialization: body.specialization,
      qualification: body.qualification,
      experience: Number.parseInt(body.experience),
      gender: body.gender,
      languages: body.languages,
      consultationFee: Number.parseInt(body.consultationFee),
      rating: body.rating || 4.0,
      reviewCount: body.reviewCount || 0,
      recommendationPercentage: body.recommendationPercentage || 90,
      availableSlots: body.availableSlots || [],
      profilePicture: body.profilePicture,
      createdAt: new Date(),
    }

    // Insert doctor into database
    const result = await db.collection("doctors").insertOne(doctor)

    return NextResponse.json(
      {
        success: true,
        doctor: { ...doctor, _id: result.insertedId },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error adding doctor:", error)
    return NextResponse.json({ error: "Failed to add doctor" }, { status: 500 })
  }
}
