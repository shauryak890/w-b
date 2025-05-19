# Whites & Brights - Premium Laundry Service Website

A visually stunning, professional MERN stack website for Whites & Brights, a new retail laundry business preparing to launch. The website features a modern 3D aesthetic with elegant design elements that convey cleanliness and premium service.

## Features

- Modern 3D visuals using Three.js and React Three Fiber
- Responsive design that works across all device sizes
- Elegant animations using Framer Motion
- Clean, premium aesthetic with soft whites and bright blues
- Comprehensive sections for services, about us, and contact information
- "Opening Soon" announcement with contact form for updates
- Backend API for handling contact form submissions

## Tech Stack

- **Frontend:**
  - React.js
  - Three.js / React Three Fiber for 3D elements
  - Chakra UI for responsive components
  - Framer Motion for animations
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (prepared for connection)
  - Nodemailer for email functionality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional - for database functionality)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd wb-laundry
   ```

2. Install dependencies for the root project, client, and server
   ```
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Environment setup
   - Create a `.env` file in the server directory (a template is provided)
   - Configure your MongoDB connection string (when ready)

4. Start the development environment
   ```
   npm run dev
   ```
   This will concurrently run both the client and server.

## Development

- **Client only:** `npm run client`
- **Server only:** `npm run server`
- **Both:** `npm run dev`

## Production

For production deployment:

1. Build the client
   ```
   cd client && npm run build
   ```

2. Configure environment variables for production
   
3. Deploy using your preferred hosting service (Netlify, Heroku, etc.)

## Project Structure

```
wb-laundry/
├── client/               # React frontend
│   ├── public/           # Static files
│   └── src/              # React source code
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── models/       # 3D models and related files
│       └── assets/       # Images, styles, etc.
└── server/               # Express backend
    ├── index.js          # Server entry point
    └── .env              # Environment variables
```

## 3D Features

The website incorporates modern 3D elements using Three.js and React Three Fiber to create an immersive experience that conveys the premium nature of the Whites & Brights laundry service.

## Contact Form

The contact form allows potential customers to sign up for updates about the upcoming launch. Form submissions are handled by the Express backend and can be configured to:

1. Store submissions in MongoDB
2. Send email notifications using Nodemailer

## License

[Your License]

---

Designed and developed for Whites & Brights Laundry Service
