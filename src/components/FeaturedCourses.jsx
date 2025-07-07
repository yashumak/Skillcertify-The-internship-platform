import React, { useState } from "react";
import { Link } from "react-router-dom";

function FeaturedCourses() {
  const [visibleCourses, setVisibleCourses] = useState(3);

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

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?text=Course+Image";
                }}
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
