import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function FeaturedCourses() {
  const [visibleCourses, setVisibleCourses] = useState(3);
  const errorHandledRef = useRef(new Set());

  const courses = [
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
    },
    {
      id: 2,
      title: "Artificial Intelligence (AI)",
      description: "Explore the world of artificial intelligence and technologies.",
      category: "Data Science & AI",
      level: "Advanced",
      duration: "10 weeks",
      price: "100",
      image: "/images/ai.jpg",
      slug: "artificial-intelligence",
    },
    {
      id: 3,
      title: "Power BI",
      description:
        "Learn data visualization and business intelligence with Power BI.",
      category: "Business Intelligence",
      level: "Beginner to Intermediate",
      duration: "6 weeks",
      price: "100",
      image: "/images/poweebi.jpg",
      slug: "power-bi",
    },
  ];

  const handleImageError = (e, courseId) => {
    // Prevent infinite loop by checking if we've already handled this error
    if (errorHandledRef.current.has(courseId)) {
      return;
    }
    
    // Mark this course as error handled
    errorHandledRef.current.add(courseId);
    
    // Set a fallback image or hide the image
    e.target.style.display = 'none';
    
    // Alternative: Set a data URI for a simple placeholder
    // e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImage not available%3C/text%3E%3C/svg%3E";
    
    // Or show a placeholder div instead
    const placeholderDiv = document.createElement('div');
    placeholderDiv.className = 'absolute inset-0 bg-gray-200 flex items-center justify-center';
    placeholderDiv.innerHTML = '<span class="text-gray-500 text-sm">Image not available</span>';
    e.target.parentNode.appendChild(placeholderDiv);
  };

  const handleImageLoad = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300 opacity-0 transition-opacity duration-300"
                onLoad={handleImageLoad}
                onError={(e) => handleImageError(e, course.id)}
                loading="eager"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-md">
                  {course.category}
                </span>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                  {course.level}
                </span>
              </div>
              <Link
                to={`/courses/${course.slug}`}
                className="block hover:text-blue-600 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              </Link>
              <p className="text-gray-600 mb-4 overflow-hidden line-clamp-2">
                {course.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {course.duration}
                </span>
                <span className="font-medium text-blue-600">
                  {course.price}
                </span>
              </div>
              <Link
                to={`/courses/${course.slug}`}
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleCourses < courses.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCourses(courses.length)}
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Show More Courses
          </button>
        </div>
      )}
    </div>
  );
}

export default FeaturedCourses;
