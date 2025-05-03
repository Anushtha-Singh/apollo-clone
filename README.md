# Apollo 247 Clone

This project is a clone of the Apollo 247 doctor listing page using Next.js, MongoDB, and RESTful APIs.

## Features

- Doctor listing with filters
- Responsive design
- MongoDB integration
- RESTful APIs for doctor data
- SEO optimization

## Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB (local or Atlas)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=apollo
```

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```
or
```bash
 npm install --legacy-peer-deps
```

3. Seed the database:

```bash
npm run seed
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Documentation

### 1. Get Doctors API

This API retrieves a list of doctors with filtering, sorting, and pagination.

**Endpoint:** `/api/doctors`

**Method:** GET

**Query Parameters:**

- `page` (number): Page number for pagination (default: 1)
- `limit` (number): Number of doctors per page (default: 10)
- `gender` (string[]): Filter by gender (e.g., "male", "female")
- `minExperience` (number): Minimum years of experience
- `maxExperience` (number): Maximum years of experience
- `minFee` (number): Minimum consultation fee
- `maxFee` (number): Maximum consultation fee
- `language` (string[]): Filter by languages spoken
- `sortBy` (string): Sort results by (options: "relevance", "experience_high_to_low", "experience_low_to_high", "fee_high_to_low", "fee_low_to_high")

**Example Request:**

```
GET /api/doctors?page=1&limit=10&gender=female&minExperience=5&maxExperience=20&minFee=500&maxFee=1000&language=english&sortBy=experience_high_to_low
```

**Example Response:**

```json
{
  "doctors": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "Sarah Johnson",
      "specialization": "General Physician & Internal Medicine",
      "qualification": "MBBS, DNB (General Medicine)",
      "experience": 8,
      "gender": "female",
      "languages": ["English", "Tamil", "Hindi"],
      "consultationFee": 600,
      "rating": 4.6,
      "reviewCount": 178,
      "recommendationPercentage": 95,
      "availableSlots": ["9:00 AM", "12:30 PM", "3:00 PM"],
      "profilePicture": "/placeholder.svg?height=128&width=128",
      "clinic": "Apollo Clinic, Indiranagar",
      "availableToday": true
    },
    // More doctors...
  ],
  "page": 1,
  "limit": 10,
  "totalPages": 3,
  "totalDoctors": 25
}
```

### 2. Add Doctor API

This API adds a new doctor to the database.

**Endpoint:** `/api/doctors/add`

**Method:** POST

**Request Body:**

```json
{
  "name": "John Smith",
  "specialization": "General Physician & Internal Medicine",
  "qualification": "MBBS, MD (Internal Medicine)",
  "experience": 15,
  "gender": "male",
  "languages": ["English", "Hindi"],
  "consultationFee": 800,
  "rating": 4.8,
  "reviewCount": 245,
  "recommendationPercentage": 98,
  "availableSlots": ["10:00 AM", "11:30 AM", "4:00 PM", "5:30 PM"],
  "profilePicture": "/placeholder.svg?height=128&width=128",
  "clinic": "Apollo Clinic, Koramangala",
  "cashback": 80,
  "availableToday": true
}
```

**Example Response:**

```json
{
  "success": true,
  "doctor": {
    "_id": "60d21b4667d0d8992e610c86",
    "name": "John Smith",
    "specialization": "General Physician & Internal Medicine",
    "qualification": "MBBS, MD (Internal Medicine)",
    "experience": 15,
    "gender": "male",
    "languages": ["English", "Hindi"],
    "consultationFee": 800,
    "rating": 4.8,
    "reviewCount": 245,
    "recommendationPercentage": 98,
    "availableSlots": ["10:00 AM", "11:30 AM", "4:00 PM", "5:30 PM"],
    "profilePicture": "/placeholder.svg?height=128&width=128",
    "clinic": "Apollo Clinic, Koramangala",
    "cashback": 80,
    "availableToday": true,
    "createdAt": "2023-06-23T10:15:30.123Z"
  }
}
```

## How to Add a Single Doctor

To add a single doctor to the database, you can use the Add Doctor API. Here's how:

1. Make a POST request to `/api/doctors/add` with the doctor's information in the request body.

Example using curl:

```bash
curl -X POST http://localhost:3000/api/doctors/add \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "specialization": "General Physician & Internal Medicine",
    "qualification": "MBBS, MD (Internal Medicine)",
    "experience": 15,
    "gender": "male",
    "languages": ["English", "Hindi"],
    "consultationFee": 800,
    "rating": 4.8,
    "reviewCount": 245,
    "recommendationPercentage": 98,
    "availableSlots": ["10:00 AM", "11:30 AM", "4:00 PM", "5:30 PM"],
    "profilePicture": "/placeholder.svg?height=128&width=128",
    "clinic": "Apollo Clinic, Koramangala",
    "cashback": 80,
    "availableToday": true
  }'
```

Example using JavaScript fetch:

```javascript
fetch('/api/doctors/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
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
    clinic: "Apollo Clinic, Koramangala",
    cashback: 80,
    availableToday: true
  }),
})
.then(response => response.json())
.then(data => console.log(data));
```

## Deployment

This project can be deployed to Vercel with the following steps:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the environment variables in the Vercel dashboard
4. Deploy the project

## License

This project is for educational purposes only.


