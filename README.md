# 🚀  Portfolio

A developer portfolio built with React, Framer Motion, and Lucide React.

## ✨ Key Features

### 📊 Centralized Data
All site content, including projects and social links, is managed via a single `portfolioData.js` file for rapid updates and easy maintenance.

### 🏷️ Project Status Indicators
Features distinct styling for "Completed" vs "In-Progress" projects using custom accent colors for clear visual differentiation.

### 🎨 Skills Section
Includes a list of skills with their respective categories. And also differentiates between mastered and learning skills.


## 🛠️ Tech Stack

- **Frontend**: React 18.x
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Modern CSS with custom properties (variables) and Keyframe animations

## 📁 Project Structure

```
src/
├── components/      
│   ├── Header.jsx       # Floating glass navigation with scroll logic
│   ├── Hero.jsx         # Hero section with grid layout
│   ├── Skills.jsx       # Skills showcase section
│   ├── Contact.jsx      # Contact form and information
│   ├── Modal.jsx        # Reusable modal component
│   └── ...          
├── data/            
│   └── portfolioData.js # Single source of truth for content
├── index.css            # Holographic theme and global variables
└── main.jsx             # Application entry point

# Clone the repository
git clone https://github.com/barakidg/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`


## 🎨 Customization Guide

### Update Your Content

To change your name, projects, or links, simply edit the `portfolioData.js` file located in `src/data/`. The UI will update automatically across all components.


## 📧 Contact

For any questions or suggestions, feel free to reach out through the contact form on the portfolio or via the social links provided.


