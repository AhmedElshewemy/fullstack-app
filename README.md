# Fullstack Notes Application

A modern full-stack application for managing notes, built with Node.js, Express, React, and MongoDB. Features user authentication and a responsive UI for creating, managing, and organizing notes.

## UI Enhancement: Customizable Card Themes

This project implements customizable note card themes as its UI enhancement. Users can:
- Choose custom colors for each note
- Persist theme choices across sessions using localStorage
- Select from a predefined palette of colors
- See real-time updates as they change note colors

### Why Customizable Themes?
- Enhances visual organization of notes
- Allows users to categorize notes by color
- Improves the overall user experience with personalization
- Maintains simplicity while adding meaningful functionality

### Implementation Challenges & Solutions
1. **Color Persistence**: Implemented using localStorage for seamless user experience
2. **Performance**: Optimized color updates to prevent unnecessary re-renders
3. **Accessibility**: Added proper contrast ratios and aria labels
4. **Mobile Experience**: Ensured color picker works well on touch devices

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