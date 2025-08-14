"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Filter, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import CourseCard from "@/components/CourseCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export const allCourses = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Become a full stack developer with hands-on projects.",
    category: "Web Development",
    level: "Advanced",
    duration: "12 weeks",
    price: "100",
    image: "/images/fullstack.webp",
    slug: "full-stack-development",
    key_topics: [
      "Frontend and Backend development",
      "RESTful APIs",
      "Database integration",
      "Authentication & Authorization",
      "Deployment best practices",
    ],
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Learn machine learning algorithms and applications.",
    category: "Data Science & AI",
    level: "Advanced",
    duration: "10 weeks",
    price: "100",
    image: "/images/mi.jpeg",
    slug: "machine-learning",
    key_topics: [
      "Supervised and unsupervised learning",
      "Regression and classification",
      "Model evaluation and tuning",
      "Neural networks basics",
      "Real-world ML projects",
    ],
  },
  {
    id: 3,
    title: "Artificial Intelligence (AI)",
    description: "Explore the world of artificial intelligence.",
    category: "Data Science & AI",
    level: "Advanced",
    duration: "10 weeks",
    price: "100",
    image: "/images/ai.jpg",
    slug: "artificial-intelligence",
    key_topics: [
      "AI fundamentals",
      "Search algorithms",
      "Natural Language Processing",
      "Expert systems",
      "Ethics in AI",
    ],
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Master data Analytics concepts and tools.",
    category: "Data Analytics & AI",
    level: "Intermediate",
    duration: "8 weeks",
    price: "100",
    image: "/images/dataanalytics.jpeg",
    slug: "data-Analytics",
    key_topics: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Data visualization",
      "Statistical analysis",
      "Using Excel and SQL for analytics",
    ],
  },
  {
    id: 5,
    title: "Python Development",
    description: "Learn Python from basics to advanced concepts.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    price: "100",
    image: "/images/python.webp",
    slug: "python-development",
    key_topics: [
      "Python syntax and data types",
      "Functions and modules",
      "File handling",
      "Object-oriented programming",
      "Web development with Flask/Django",
    ],
  },
  {
    id: 6,
    title: "React.js",
    description: "Build dynamic web apps using React.js.",
    category: "Web Development",
    level: "Intermediate",
    duration: "6 weeks",
    price: "100",
    image: "/images/React.webp",
    slug: "react-js",
    key_topics: [
      "JSX and component structure",
      "State and props",
      "Hooks (useState, useEffect)",
      "Routing with React Router",
      "API integration",
    ],
  },
  {
    id: 7,
    title: "Java Development",
    description: "Master Java programming and build robust applications.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    price: "100",
    image: "/images/java.jpg",
    slug: "java-development",
    key_topics: [
      "Java syntax and OOP",
      "Exception handling",
      "Collections framework",
      "File I/O",
      "Building desktop and web apps",
    ],
  },
  {
    id: 8,
    title: "Cybersecurity Essentials",
    description:
      "Learn the basics of cybersecurity and how to protect systems.",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "6 weeks",
    price: "100",
    image: "/images/cyber.jpg",
    slug: "cybersecurity-essentials",
    key_topics: [
      "Cybersecurity fundamentals",
      "Threats and vulnerabilities",
      "Network security basics",
      "Best practices for safe computing",
      "Incident response",
    ],
  },
  {
    id: 9,
    title: "UI/UX Design",
    description:
      "Learn the principles of user interface and user experience design.",
    category: "UI/UX Design",
    level: "Intermediate",
    duration: "8 weeks",
    price: "100",
    image: "/images/ui.webp",
    slug: "uiux-design-masterclass",
    key_topics: [
      "UI/UX principles",
      "Wireframing and prototyping",
      "User research",
      "Design tools (Figma, Adobe XD)",
      "Usability testing",
    ],
  },
  {
    id: 10,
    title: "App Development with Flutter",
    description: "Build cross-platform mobile apps using Flutter and Dart.",
    category: "App Development",
    level: "Intermediate",
    duration: "8 weeks",
    price: "100",
    image: "/images/flutter.webp",
    slug: "app-development-with-flutter",
    key_topics: [
      "Dart programming basics",
      "Flutter widgets",
      "State management",
      "Navigation and routing",
      "Deploying apps to stores",
    ],
  },
  {
    id: 11,
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, and email marketing.",
    category: "Digital Marketing",
    level: "Intermediate",
    duration: "6 weeks",
    price: "100",
    image: "/images/digital.jpg",
    slug: "digital-marketing-strategies",
    key_topics: [
      "SEO fundamentals",
      "Social media marketing",
      "Email marketing",
      "Content strategy",
      "Analytics and reporting",
    ],
  },
  {
    id: 12,
    title: "React Native",
    description: "Build cross-platform mobile apps with React Native.",
    category: "App Development",
    level: "Intermediate",
    duration: "8 weeks",
    price: "100",
    image: "/images/reactnative.png",
    slug: "react-native",
    key_topics: [
      "React Native components",
      "Navigation",
      "State management",
      "APIs and data fetching",
      "Deploying to iOS/Android",
    ],
  },
  {
    id: 13,
    title: "Power BI",
    description:
      "Learn data visualization and business intelligence with Power BI.",
    category: "Business Intelligence",
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    price: "100",
    image: "/images/poweebi.jpg",
    slug: "power-bi",
    key_topics: [
      "Power BI interface",
      "Data import and transformation",
      "Building dashboards",
      "DAX basics",
      "Sharing and publishing reports",
    ],
  },
  {
    id: 14,
    title: "Blockchain & Web3 Development",
    description:
      "Build decentralized applications using blockchain technology.",
    category: "Blockchain & Web3",
    level: "Advanced",
    duration: "10 weeks",
    price: "100",
    image: "/images/blockchain.jpg",
    slug: "blockchain-web3-development",
    key_topics: [
      "Blockchain fundamentals",
      "Smart contracts",
      "Ethereum and Solidity",
      "Decentralized apps (dApps)",
      "Web3.js integration",
    ],
  },
  {
    id: 15,
    title: "Data Science Fundamentals",
    description: "Master Python, data analysis, and machine learning.",
    category: "Data Science & AI",
    level: "Intermediate",
    duration: "8 weeks",
    price: "100",
    image: "/images/DataScience.jpg",
    slug: "data-science-fundamentals",
    key_topics: [
      "Python for data science",
      "Data wrangling",
      "Statistical analysis",
      "Intro to machine learning",
      "Data visualization",
    ],
  },
  {
    id: 16,
    title: "Communication Skills",
    description: "Enhance your verbal and non-verbal communication skills.",
    category: "Communication Skills",
    level: "Beginner",
    duration: "4 weeks",
    price: "100",
    image: "/images/communication.jpg",
    slug: "communication-skills-mastery",
    key_topics: [
      "Verbal communication",
      "Non-verbal cues",
      "Active listening",
      "Public speaking",
      "Professional writing",
    ],
  },
  {
    id: 17,
    title: "C++ Programming",
    description: "Master C++ for system and application development.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "6 weeks",
    price: "100",
    image: "/images/c++.webp",
    slug: "cpp-programming",
    key_topics: [
      "C++ syntax and data types",
      "Functions and classes",
      "Pointers and memory management",
      "STL (Standard Template Library)",
      "Building C++ projects",
    ],
  },
  {
    id: 18,
    title: "Graphic Design",
    description: "Master the basics of graphic design using Adobe tools.",
    category: "Graphic Design",
    level: "Beginner",
    duration: "5 weeks",
    price: "100",
    image: "/images/graphics.jpg",
    slug: "graphic-design-for-beginners",
    key_topics: [
      "Design principles",
      "Color theory",
      "Typography",
      "Adobe Photoshop basics",
      "Creating visual assets",
    ],
  },
  {
    id: 19,
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more.",
    category: "Frontend Development",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    price: "100",
    image: "/images/frontend.png",
    slug: "Frontend-development-bootcamp",
    key_topics: [
      "HTML & CSS fundamentals",
      "JavaScript basics",
      "Responsive design",
      "React basics",
      "Intro to Node.js",
    ],
  },
  {
    id: 20,
    title: "AngularJS",
    description: "Develop powerful web applications with AngularJS.",
    category: "Web Development",
    level: "Intermediate",
    duration: "6 weeks",
    price: "100",
    image: "/images/angular.jpeg",
    slug: "angularjs",
    key_topics: [
      "AngularJS architecture",
      "Directives and components",
      "Data binding",
      "Routing",
      "REST API integration",
    ],
  },
  {
    id: 21,
    title: "Backend Development",
    description:
      "Learn the fundamentals of backend development, including databases, APIs, authentication, and server-side logic.",
    category: "Web Development",
    level: "Beginner",
    duration: "6 weeks",
    price: "100",
    image: "/images/backend.jpeg",
    slug: "backend-development-for-beginners",
    key_topics: [
      "Server-side programming basics",
      "RESTful API creation",
      "Database integration",
      "Authentication & authorization",
      "Error handling and security",
    ],
  },
  {
    id: 22,
    title: "(Internet of Things)IoT",
    description: "Understand and build IoT solutions.",
    category: "IoT",
    level: "Intermediate",
    duration: "8 weeks",
    price: "100",
    image: "/images/IOT.jpg",
    slug: "iot-internet-of-things",
    key_topics: [
      "IoT architecture",
      "Sensors and actuators",
      "Microcontrollers",
      "IoT protocols",
      "Building IoT projects",
    ],
  },
  {
    id: 23,
    title: "3D Modeling with Blender",
    description: "Create stunning 3D models and animations using Blender.",
    category: "3D Modeling",
    level: "Advanced",
    duration: "10 weeks",
    price: "100",
    image: "/images/3d.png",
    slug: "3d-modeling-with-blender",
    key_topics: [
      "Blender interface",
      "3D modeling basics",
      "Texturing and lighting",
      "Animation fundamentals",
      "Rendering projects",
    ],
  },
  {
    id: 24,
    title: "Entrepreneurship",
    description: "Learn how to start and grow your own business.",
    category: "Entrepreneurship",
    level: "Beginner",
    duration: "4 weeks",
    price: "100",
    image: "/images/enter.jpg",
    slug: "entrepreneurship-101",
    key_topics: [
      "Business idea validation",
      "Market research",
      "Business planning",
      "Funding basics",
      "Growth strategies",
    ],
  },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const filtered = allCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
    setFilteredCourses(filtered);
  }, [searchQuery]);

  const resetFilters = () => {
    setSearchQuery("");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const sendEmail = (templateParams) => {
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_PUBLIC_KEY"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 py-8"
    >
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2">
            Explore Courses
          </h1>
          <p className="text-gray-600">
            Browse our collection of courses and start your learning journey.
          </p>
        </div>
      </div>

      {/* Search only */}
      <div className="mb-8">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 w-full h-12 text-base placeholder:text-gray-400 border-gray-200 rounded-lg focus:border-blue-1000 focus:ring-blue-1000"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course}>
              <Link
                to="#"
                className="hover:underline"
                onClick={() => setSelectedCourse(course)}
              >
                <h3 className="text-xl font-bold">{course.title}</h3>
              </Link>
            </CourseCard>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No courses found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria.
          </p>
          <Button variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}

      {/* Course Details */}
      {selectedCourse && (
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{selectedCourse.category}</Badge>
              <Badge variant="secondary">{selectedCourse.level}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {selectedCourse.title}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {selectedCourse.description}
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{selectedCourse.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Level: {selectedCourse.level}</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
