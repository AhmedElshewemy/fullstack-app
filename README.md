# Fullstack Notes Application

A modern full-stack application for managing notes, built with Node.js, Express, React, and MongoDB. Features user authentication and a responsive UI for creating, managing, and organizing notes.

## UI Creativity Twist: Customizable Card Themes & Mini Dashboard

**Chosen UI Twists:**
- Customizable Card Themes: Users can pick a color for each note card using a color picker. The choice is persisted in localStorage, so cards retain their look on reload. This was chosen to enhance personalization and visual organization for users.
- Mini Dashboard with Live Chart: A live SVG pie chart displays the count of notes by status (active, completed, archived). This provides users with a quick overview of their notes and progress.

**Why These Twists?**
- Customizable themes make the app more engaging and help users visually categorize notes.
- The live chart adds a dashboard feel and immediate feedback, improving usability and insight.

**Trade-offs & Challenges:**
- Ensuring color contrast and accessibility for all users with custom themes.
- Keeping the chart performant and visually clear as the number of notes grows.
- Managing state and persistence for both themes and chart data without overcomplicating the UI.
- Balancing feature richness with simplicity to avoid overwhelming the user.

**Next Steps (with more time):**
- Add keyboard navigation and ARIA labels for accessibility.
- Implement drag-and-drop note ordering with backend persistence.
- Add more filter options (e.g., by tag or search).
- Improve mobile responsiveness and touch interactions.
- Add end-to-end and accessibility tests.
- Set up CI/CD for automated testing and deployment.
- Optimize performance for large note collections.

## Next Steps & Future Improvements

### Accessibility
- Add ARIA labels for all interactive elements
- Implement keyboard navigation for the color picker
- Add high contrast mode option
- Include screen reader descriptions for color selections

### Performance
- Implement lazy loading for notes list
- Add infinite scrolling for large note collections
- Optimize theme color calculations
- Add caching for frequently accessed notes

### Features
- Add note categories/tags
- Implement note sharing capabilities
- Add rich text editing
- Include image attachment support

### Technical Improvements
- Add end-to-end testing
- Implement CI/CD pipeline
- Add error boundary components
- Improve type safety with TypeScript
- Add automated accessibility testing

## Project Structure

```
├── backend/
│   ├── models/
│   │   ├── User.js         # User model for authentication
│   │   └── Note.js         # Note model for storing notes
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication middleware
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   └── notes.js        # Notes CRUD operations
│   └── server.js           # Express server setup
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   └── src/
│       ├── components/     # Reusable React components
│       │   ├── LoginForm.jsx
│       │   ├── RegisterForm.jsx
│       │   ├── NoteCard.jsx
│       │   ├── NoteForm.jsx
│       │   └── NotesList.jsx
│       ├── contexts/       # React Context providers
│       │   ├── AuthContext.jsx
│       │   └── NotesContext.jsx
│       ├── pages/          # Application pages
│       │   ├── LoginPage.jsx
│       │   ├── NotesPage.jsx
│       │   └── RegisterPage.jsx
│       ├── services/       # API service layer
│       └── styles/         # CSS styles
└── docker-compose.yml      # Docker composition for development
```

## Features

- User Authentication (Register/Login)
- Create, Read, Update, Delete Notes
- Responsive Design
- Context-based State Management
- Docker Development Environment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- Git

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmedElshewemy/fullstack-app.git
   cd fullstack-app
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Start the development environment with Docker:
   ```bash
   docker-compose up
   ```

   This will start:
   - Backend server on http://localhost:8080
   - Frontend development server on http://localhost:3000

### Environment Variables

Create a `.env` file in the backend directory with:
```
PORT=8080
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Development with VS Code

This project includes DevContainer configuration for VS Code, which provides:
- Consistent development environment
- Pre-configured Node.js setup
- Docker integration
- Automated dependency installation

To use it:
1. Install the "Remote - Containers" extension in VS Code
2. Open the project in VS Code
3. Click "Reopen in Container" when prompted

## License

This project is licensed under the MIT License.