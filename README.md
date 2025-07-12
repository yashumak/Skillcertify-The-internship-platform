# SkillCertify - Online Learning & Certification Platform

A responsive web application built with React andt provides comprehensive online learning experiences with certification capabilities. SkillCertify enables users to enroll in courses, complete practical assignments, and earn verifiable certificates to advance the

## 🚀 Features

### Core Functionality
- **Course Catalog**: Browse and explore a wide range of industry-relevant courses
- **Interactive Learning**: Complete practical assignments and tasks
- **Certification System**: Earn verifiable certificates with unique verification codes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **User-Friendly Interface**: Modern UI with smooth animations and intuitive navigation

### Key Pages
- **Home**: Landing page with course highlights and platform benefits
- **Courses**: Comprehensive course catalog with filtering and search
- **Course Details**: Detailed course information and enrollment options
- **About**: Platform information and mission
- **Contact**: Contact form with email integration
- **Legal Pages**: Terms, Privacy, Cookies, and Refund policies

### User Experience
- **Smooth Navigation**: React Router for seamless page transitions
- **Modern UI Components**: Built with Radix UI and custom components
- **Animations**: Framer Motion for engaging user interactions
- **Responsive Layout**: Tailwind CSS for consistent design across devices

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Radix UI** - Accessible UI primitives

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### External Services
- **EmailJS** - Email functionality for contact forms

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/yashumak/SkillCertify--The-Internship-platform>

   cd SkillCertify/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the client directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_USER_ID=your_emailjs_user_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
client/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── CourseCard.jsx # Course display component
│   │   └── FeaturedCourses.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Courses.jsx    # Course catalog
│   │   ├── About.jsx      # About page
│   │   ├── Contact.jsx    # Contact page
│   │   ├── courses/       # Course-related pages
│   │   └── legal/         # Legal pages
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── eslint.config.js       # ESLint configuration
```

## 🎨 Design System

The application uses a consistent design system with:
- **Color Palette**: Blue-based theme with gray accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` for consistent styling across components.

### Vite
Optimized build configuration for fast development and production builds.

### ESLint
Code quality rules configured for React development best practices.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


**SkillCertify** - Empowering careers through quality education and certification.
