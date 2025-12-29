📌 Overview

This project is a full-stack content processing system built as part of the BeyondChats internship assignment.

The system:

Scrapes articles

Stores them via a Laravel API

Processes them using a Node.js pipeline (LLM + Google Search – mocked)

Displays original and updated content in a React frontend

The application is divided into three clear phases, exactly as described in the assignment.

🧱 Tech Stack

Backend API: Laravel (PHP)

Database: MySQL

Node Pipeline: Node.js, Axios, dotenv

Frontend: React (Vite)

Tools: Postman, phpMyAdmin

🧠 System Architecture
Scraped Articles
      ↓
Laravel REST API (MySQL)
      ↓
Node.js Processor
(LLM + Google Search – Mocked)
      ↓
Updated Articles
      ↓
React Frontend UI

🚀 Phase 1 – Article Scraping & Backend API
✔ What was done

Scraped 5 articles initially (requirement of assignment)

Stored articles in MySQL using Laravel

Built REST APIs:

GET /api/articles

POST /api/articles

PUT /api/articles/{id}

DELETE /api/articles/{id}

✔ Why 5 articles?

The frontend and pipeline need multiple items to demonstrate:

Batch processing

Update tracking (original_content vs updated_content)

Real-world scenario (not a single static article)

⚙️ Phase 2 – Node.js Processing Pipeline
✔ What was done

Fetches articles from Laravel API

Runs Mock Google Search

Runs Mock LLM content generation

Updates articles via API

No real LLM or Google API was required.
Mocking was intentionally used as per assignment scope.

✔ Example pipeline output
🔍 Processing article 2
🔍 Mock Google search for: "Postman test article"
✅ Updated article 2
🎉 Phase 2 pipeline finished

🎨 Phase 3 – React Frontend
✔ What was done

Displays list of articles

Shows:

Title

Original content

Updated content (if available)

Clearly differentiates processed vs unprocessed articles

✔ Why frontend matters

It visually proves:

Backend is working

Node pipeline updates data

End-to-end system is complete

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/articles	Fetch all articles
POST	/api/articles	Create new article
PUT	/api/articles/{id}	Update article
DELETE	/api/articles/{id}	Delete article
▶️ How to Run the Project
1️⃣ Backend (Laravel)
cd backend
php artisan serve


Server runs at:

http://127.0.0.1:8000

2️⃣ Node Processor
cd backend/node-processor
npm install
node llmProcessor.js

3️⃣ Frontend (React)
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🧩 Environment Notes

.env files are used only where required

Google Search and LLM are mocked intentionally

MySQL is managed via phpMyAdmin / XAMPP

📸 Screenshots

(Add screenshots of:)

Postman API responses

Node pipeline logs

React UI displaying articles

✅ Assignment Status

✔ Backend API complete
✔ Node.js pipeline complete
✔ Mock LLM + Google search implemented
✔ React frontend complete
✔ End-to-end data flow working

👤 Author

Anushka Jana
Full Stack Web Developer Intern Applicant

🎯 Final Note

This project strictly follows the assignment instructions and demonstrates:

Backend development

API design

Node.js automation

Frontend integration

Clean architectural thinking