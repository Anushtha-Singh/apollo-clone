import { MongoClient } from "mongodb"

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Anushtha:anushtha%402004@taskmanagerdb.vcso4tn.mongodb.net/?retryWrites=true&w=majority&appName=taskManagerDB"
const MONGODB_DB = process.env.MONGODB_DB || "apollo"

// Check if we have a cached connection
let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // If no cached connection, create a new one
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  const db = client.db(MONGODB_DB)

  // Cache the connection
  cachedClient = client
  cachedDb = db

  return { client, db }
}
