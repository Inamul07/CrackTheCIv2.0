# CrackTheCI v2.0

A comprehensive platform for sharing and discovering company interview experiences. CrackTheCI helps job seekers prepare for technical interviews by allowing users to share their company interview experiences, questions, and insights.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

CrackTheCI v2.0 is a mobile-first application (with planned web support) that serves as a community platform where users can:
- Share their company interview experiences
- Browse interview experiences by company
- Discover interview questions and patterns
- Contribute to a growing knowledge base for job seekers

> **Note:** This project is currently under active development. The Web UI is planned for future releases.

## ✨ Features

### Current Features
- ✅ User Authentication (Firebase)
  - Email/Password Sign Up
  - Email/Password Login
  - Secure user sessions
- ✅ Company Management
  - Browse companies
  - Company verification system
  - Company logos and branding
- ✅ Post Management
  - Create interview experience posts
  - View posts by company
  - Rich text support
- ✅ Mobile Application (React Native/Expo)
  - Cross-platform support (iOS & Android)
  - Intuitive navigation
  - Real-time updates

### Planned Features
- 🔲 Web UI
- 🔲 Advanced search and filtering
- 🔲 User profiles and activity
- 🔲 Comments and discussions
- 🔲 Upvote/downvote system
- 🔲 Tag-based organization
- 🔲 Admin dashboard
- 🔲 Email notifications

## 🛠 Tech Stack

### Backend
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) - Modern, fast Python web framework
- **Database:** [MongoDB](https://www.mongodb.com/) - NoSQL database for flexible data storage
- **ODM:** [Motor](https://motor.readthedocs.io/) - Async MongoDB driver
- **Validation:** [Pydantic](https://pydantic-docs.helpmanual.io/) - Data validation using Python type annotations
- **Server:** [Uvicorn](https://www.uvicorn.org/) - ASGI server

### Frontend (Mobile)
- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Navigation:** React Navigation v6
- **Authentication:** [Firebase Authentication](https://firebase.google.com/products/auth)
- **UI Components:** Custom components with React Native primitives

### DevOps
- **Containerization:** Docker & Docker Compose
- **Database Admin:** Mongo Express

### Planned
- **Frontend (Web):** React.js / Next.js
- **State Management:** Redux / Context API
- **Testing:** Jest, Pytest

## 📁 Project Structure

```
CrackTheCIv2.0/
├── backend/
│   ├── main.py                 # FastAPI application entry point
│   ├── requirements.txt        # Python dependencies
│   ├── docker-compose.yaml     # Docker services configuration
│   ├── pyvenv.cfg             # Python virtual environment config
│   ├── database/
│   │   └── db.py              # Database connection and operations
│   ├── models/
│   │   └── companyModel.py    # Pydantic models
│   └── routes/
│       └── companyRoute.py    # API endpoints
│
└── frontend/
    └── CrackTheCIv2.0/
        ├── App.js              # Main application component
        ├── package.json        # npm dependencies
        ├── app.json           # Expo configuration
        ├── babel.config.js    # Babel configuration
        ├── assets/
        │   ├── colors.js      # Color palette
        │   ├── postsFile.js   # Post data
        │   └── logos/         # Company logos
        ├── components/
        │   ├── Card.js        # Reusable card component
        │   ├── CustomButton.js
        │   ├── NewPostButton.js
        │   ├── PostCard.js
        │   └── SetProfile.js
        ├── config/
        │   └── firebase.js    # Firebase configuration
        └── screens/
            ├── AddPostScreen.js
            ├── DetailsScreen.js
            ├── HomeScreen.js
            ├── LoginScreen.js
            ├── PostScreen.js
            └── SignupScreen.js
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8+** - [Download](https://www.python.org/downloads/)
- **Node.js 16+** and npm - [Download](https://nodejs.org/)
- **Docker & Docker Compose** - [Download](https://www.docker.com/products/docker-desktop)
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Git** - [Download](https://git-scm.com/)

### Optional
- iOS Simulator (macOS) - Xcode required
- Android Studio - For Android emulator
- Expo Go app on your mobile device

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CrackTheCIv2.0.git
cd CrackTheCIv2.0
```

### 2. Backend Setup

#### a. Navigate to backend directory
```bash
cd backend
```

#### b. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

#### c. Install dependencies
```bash
pip install -r requirements.txt
```

#### d. Start MongoDB using Docker Compose
```bash
docker-compose up -d
```

This will start:
- MongoDB on port `27017`
- Mongo Express on port `8081` (Database admin UI)

#### e. Create keys directory and configuration
```bash
mkdir keys
touch keys/keys.py
```

Add the following to `keys/keys.py`:
```python
DATABASE_URL = "mongodb://rootuser:rootpass@localhost:27017/"
```

### 3. Frontend Setup

#### a. Navigate to frontend directory
```bash
cd ../frontend/CrackTheCIv2.0
```

#### b. Install dependencies
```bash
npm install
```

#### c. Create Firebase project and configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication → Email/Password
4. Get your Firebase configuration

#### d. Create keys directory
```bash
mkdir keys
touch keys/keys.js
```

Add the following to `keys/keys.js`:
```javascript
export const DOMAIN = "http://localhost:8000/";  // Backend URL
```

#### e. Update Firebase configuration
Edit `config/firebase.js` with your Firebase credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## ⚙️ Configuration

### Backend Configuration

**Database URL:** Located in `backend/keys/keys.py`
```python
DATABASE_URL = "mongodb://rootuser:rootpass@localhost:27017/"
```

**CORS Settings:** Configured in `backend/main.py` (currently allows all origins)

### Frontend Configuration

**Backend API URL:** Located in `frontend/CrackTheCIv2.0/keys/keys.js`
```javascript
export const DOMAIN = "http://localhost:8000/";
```

**Firebase:** Located in `frontend/CrackTheCIv2.0/config/firebase.js`

## 🏃 Usage

### Running the Backend

```bash
cd backend
source venv/bin/activate  # Activate virtual environment
uvicorn main:app --reload
```

The API will be available at: `http://localhost:8000`
- API Documentation (Swagger): `http://localhost:8000/docs`
- MongoDB Admin (Mongo Express): `http://localhost:8081`

### Running the Frontend

```bash
cd frontend/CrackTheCIv2.0
npm start
```

Or use specific platforms:
```bash
npm run android  # Android emulator/device
npm run ios      # iOS simulator (macOS only)
npm run web      # Web browser (limited support)
```

**Using Expo Go:**
1. Install Expo Go on your mobile device
2. Scan the QR code displayed in terminal
3. App will load on your device

## 📚 API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### Root
```http
GET /
```
Returns a welcome message.

**Response:**
```json
{
  "Message": "Hello World!!"
}
```

#### Create Company
```http
POST /company/create-company
```

**Request Body:**
```json
{
  "name": "Google",
  "branch": "California",
  "logo": "https://example.com/logo.png",
  "verified": false
}
```

**Response:**
```json
{
  "Inserted": true
}
```

#### Get All Companies
```http
GET /company/all-companies
```

**Response:**
```json
[
  {
    "name": "Google",
    "branch": "California",
    "logo": "https://example.com/logo.png",
    "verified": true
  }
]
```

#### Get Unverified Companies
```http
GET /company/get-unverified-companies
```

**Response:**
```json
[
  {
    "name": "Amazon",
    "branch": "Seattle",
    "logo": "https://example.com/logo.png",
    "verified": false
  }
]
```

### Interactive API Documentation

FastAPI provides auto-generated interactive documentation:
- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

## 🗺 Roadmap

### Phase 1: Foundation ✅ (Current)
- [x] Backend API with FastAPI
- [x] MongoDB integration
- [x] Firebase authentication
- [x] Mobile app (React Native)
- [x] Basic CRUD operations
- [x] Company management

### Phase 2: Enhanced Features 🔄 (In Progress)
- [ ] Post creation and management
- [ ] User profiles
- [ ] Image upload functionality
- [ ] Search and filter
- [ ] Post categories/tags

### Phase 3: Web Platform 📋 (Planned)
- [ ] Web UI development
- [ ] Responsive design
- [ ] SEO optimization
- [ ] Progressive Web App (PWA)

### Phase 4: Community Features 📋 (Planned)
- [ ] Comments system
- [ ] Voting/rating system
- [ ] User reputation
- [ ] Bookmarks/favorites
- [ ] Share functionality

### Phase 5: Advanced Features 📋 (Future)
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics and insights
- [ ] AI-powered recommendations
- [ ] Export interview experiences
- [ ] Mobile app notifications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- **Python:** Follow PEP 8
- **JavaScript:** Use ESLint recommended rules
- **Commits:** Use conventional commit messages
- **Documentation:** Keep README and code comments updated

## 🐛 Known Issues

- Web UI not yet implemented
- Post functionality in development
- Image upload needs refinement
- Need to implement error handling improvements

## 📝 Environment Variables

### Backend
Create `backend/keys/keys.py`:
```python
DATABASE_URL = "mongodb://rootuser:rootpass@localhost:27017/"
```

### Frontend
Create `frontend/CrackTheCIv2.0/keys/keys.js`:
```javascript
export const DOMAIN = "http://localhost:8000/";
```

Update `frontend/CrackTheCIv2.0/config/firebase.js` with your Firebase config.

## 🧪 Testing

### Backend Testing
```bash
cd backend
pytest
```
*(Testing framework to be set up)*

### Frontend Testing
```bash
cd frontend/CrackTheCIv2.0
npm test
```
*(Testing framework to be set up)*

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Mohammed Inamul Hassan M** - *Initial work*

## 🙏 Acknowledgments

- FastAPI community for excellent documentation
- React Native and Expo teams
- Firebase for authentication services
- MongoDB for flexible database solutions
- All contributors and users of this platform

## 📞 Contact

For questions, suggestions, or issues:
- Create an issue in this repository
- Email: [your-email@example.com]

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

**Note:** This project is under active development. Features and documentation may change as the project evolves.
