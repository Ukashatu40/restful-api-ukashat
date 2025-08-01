Terntribe BUILD Back-End Assessment
Overview
This is a RESTful API for managing social causes and contributions, built for the Terntribe BUILD Back-End Engineer assessment. The API supports CRUD operations for causes and allows contributions to specific causes.
Technology Stack

Node.js
Express.js
MongoDB
Mongoose
express-validator (for input validation)
dotenv (for environment variables)

Project Structure
├── server.js                # Entry point
├── models/
│   └── cause.js            # Mongoose schema for Cause
├── controllers/
│   └── causeController.js  # Business logic for API endpoints
├── middleware/
│   └── validators.js       # Input validation middleware
├── routes/
│   └── causes.js          # Express routes
├── .env                   # Environment variables (not committed)
└── README.md              # Project documentation

Setup Instructions

Prerequisites:

Node.js (v14 or higher)
MongoDB (running locally)


Installation:
npm install express mongoose body-parser express-validator dotenv


Environment Setup:Create a .env file in the project root with the following content:
MONGODB_URI=mongodb://localhost/terntribe
PORT=3000

Replace MONGODB_URI with your MongoDB connection string if using a remote database.

Run the API:
node server.js


Test Endpoints:Use tools like Postman or curl to test the following endpoints:

POST /causes: Create a new cause (fields: title, description, imageUrl)
GET /causes: Retrieve all causes
GET /causes/:id: Retrieve a specific cause
PUT /causes/:id: Update a cause
DELETE /causes/:id: Delete a cause
POST /causes/:id/contribute: Add a contribution (fields: name, email, amount)



Approach and Decisions

Modular Structure: Split code into separate files (models, controllers, routes, middleware) for better organization and maintainability.
Validation: Used express-validator to ensure robust input validation for causes and contributions.
Error Handling: Implemented consistent error responses with appropriate HTTP status codes.
Database: Used MongoDB with Mongoose for schema-based data modeling, embedding contributions within causes for simplicity.
Environment Variables: Used dotenv to manage sensitive information like the MongoDB connection string.
Scalability: The modular design allows easy addition of new features or endpoints.

Submission

Deliverables: Source code (all files except .env)
Write-up: This README serves as the write-up, detailing the approach and decisions.
Submission deadline: Within 3 days of receiving the brief.
