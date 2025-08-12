"use client";

import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  Award as Certificate,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import FeaturedCourses from "../components/FeaturedCourses";

function Home() {
  const handleImageError = (e) => {
    e.target.src = "/images/placeholder.jpg";
    e.target.alt = "Image placeholder";
  };

  const handleImageLoad = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Learn, Complete, Get Certified
            </h1>
            <p className="text-xl text-gray-600">
              Enhance your skills with our comprehensive courses and earn
              recognized certifications to boost your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md transition-all duration-200 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
            {/* Hero image (keep eager for fast load) */}
            <img
              src="/images/Home.png"
              alt="Online learning"
              className="object-cover w-full h-full rounded-lg border-4 opacity-0 transition-opacity duration-300"
              style={{
                borderColor: "rgba(59,130,246,0.5)",
                background: "linear-gradient(135deg, #e0e7ff 0%, #3b82f6 100%)",
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section className="py-16 bg-gray-50 rounded-xl my-16 shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "1. Enroll in Courses",
                desc: "Browse our catalog and enroll in courses that match your interests and career goals.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "2. Complete Tasks",
                desc: "Submit required tasks to demonstrate your understanding and mastery of the course material.",
              },
              {
                icon: <CreditCard className="h-8 w-8" />,
                title: "3. Make Payment",
                desc: "Pay a small fee of ₹100 to process your certification after completing all requirements.",
              },
              {
                icon: <Certificate className="h-8 w-8" />,
                title: "4. Get Certified",
                desc: "Download your personalized certificate to showcase your new skills to employers.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="shadow-md p-8 text-center bg-white rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-blue-100"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 shadow">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg text-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-blue-800"
            >
              View All Courses <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
          <FeaturedCourses />
        </div>
      </section>

      {/* Why Choose CertiSphere */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl my-16 border border-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-blue-700 drop-shadow-sm tracking-tight">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                Why Choose SkillCertify?
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              We provide a comprehensive learning experience with benefits that
              set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 bg-white/80 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="bg-blue-100 rounded-full p-3 mt-1 shadow">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-blue-800">
                  Industry-Relevant Content
                </h3>
                <p className="text-gray-600">
                  Our courses are designed and regularly updated by industry
                  experts to ensure you learn skills that are in demand.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 bg-white/80 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="bg-blue-100 rounded-full p-3 mt-1 shadow">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-blue-800">
                  Practical Assignments
                </h3>
                <p className="text-gray-600">
                  Apply what you learn through hands-on tasks that simulate
                  real-world scenarios and build your portfolio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 bg-white/80 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="bg-blue-100 rounded-full p-3 mt-1 shadow">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-blue-800">
                  Verifiable Certificates
                </h3>
                <p className="text-gray-600">
                  Each certificate comes with a unique verification code that
                  employers can use to validate your achievement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 bg-white/80 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="bg-blue-100 rounded-full p-3 mt-1 shadow">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-blue-800">
                  Affordable Pricing
                </h3>
                <p className="text-gray-600">
                  Get high-quality education and certification at a fraction of
                  the cost of traditional programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 rounded-xl my-16 shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Sharma",
                course: "Web Development Bootcamp",
                review:
                  "The Web Development Bootcamp was a game-changer for me. The hands-on projects and clear explanations helped me land my first developer job!",
                img: "/images/user1.jpg",
              },
              {
                name: "Priya Mehta",
                course: "Data Science Fundamentals",
                review:
                  "I loved the Data Science course! The content was up-to-date and the practical assignments made complex topics easy to understand.",
                img: "/images/user2.jpg",
              },
              {
                name: "Rahul Verma",
                course: "UI/UX Design Masterclass",
                review:
                  "The UI/UX Design Masterclass boosted my confidence and portfolio. The instructor's feedback was invaluable. Highly recommended!",
                img: "/images/user3.jpg",
              },
            ].map((student, i) => (
              <div
                key={i}
                className="shadow-md p-8 bg-white rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-200 bg-gray-100">
                    {/* Student review images (change eager to lazy) */}
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      loading="lazy" // <-- changed from eager to lazy
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      {student.name}
                    </h4>
                    <p className="text-sm text-gray-600">{student.course}</p>
                  </div>
                </div>
                <p className="italic text-gray-700">"{student.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl my-16 shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 drop-shadow">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-2xl mb-8 max-w-2xl mx-auto font-medium">
              Join thousands of students who have transformed their careers
              through our certification platform.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-blue-700 font-semibold rounded-lg text-lg shadow-md hover:bg-gray-100 transition-all"
            >
              Get Started Today <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
