import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PaymentModal from "@/components/PaymentModal";
import { Share2, Clock, Users, Award, CheckCircle } from "lucide-react";

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const errorHandledRef = useRef(false);

  // Find the course by slug
  const course = allCourses.find((c) => c.slug === slug);

  const handleImageError = (e) => {
    // Prevent infinite loop by checking if we've already handled this error
    if (errorHandledRef.current) {
      return;
    }
    
    // Mark this image as error handled
    errorHandledRef.current = true;
    
    // Hide the image and show a placeholder div
    e.target.style.display = 'none';
    
    const placeholderDiv = document.createElement('div');
    placeholderDiv.className = 'absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg';
    placeholderDiv.innerHTML = '<span class="text-gray-500 text-sm">Image not available</span>';
    e.target.parentNode.appendChild(placeholderDiv);
  };

  const handleImageLoad = (e) => {
    e.target.style.opacity = "1";
  };

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  // Share handler
  const handleShare = async () => {
    const shareData = {
      title: course.title,
      text: `Check out this course: ${course.title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Optionally handle share cancel/error
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        if (toast) {
          toast({ title: "Link copied to clipboard!" });
        } else {
          alert("Link copied to clipboard!");
        }
      } catch (err) {
        alert("Failed to copy link.");
      }
    }
  };

  // Handle enrollment
  const handleEnroll = () => {
    setShowPaymentModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
      >
        {/* Course Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Category and Level Badges */}
          <div className="flex flex-wrap gap-3 items-center mb-2">
            <Badge
              variant="outline"
              className="text-base px-4 py-1 bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
            >
              {course.category}
            </Badge>
            <Badge
              variant="secondary"
              className="text-base px-4 py-1 bg-green-50 text-green-700 border-green-200 shadow-sm"
            >
              {course.level}
            </Badge>
          </div>

          {/* Course Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-sm">
            {course.title}
          </h1>

          {/* What you'll learn */}
          {Array.isArray(course.key_topics) && course.key_topics.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 shadow-inner mb-4 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                What you'll learn
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 pl-4">
                {course.key_topics.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Description */}
          <p className="text-xl text-gray-700 mb-4 font-medium">
            {course.description}
          </p>

          {/* Duration and Level */}
          <div className="flex flex-wrap gap-8 text-lg font-semibold text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              <span>Level: {course.level}</span>
            </div>
          </div>
        </div>
        {/* Course Card */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-lg">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={course.image || "/images/placeholder.jpg"}
                  alt={course.title}
                  className="object-cover w-full h-full opacity-0 transition-opacity duration-300"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="eager"
                />
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">Price:</span>
                    <span className="text-lg font-bold">₹{course.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    size="lg"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    {/* Unique feature relevant to the course */}
                    <span>
                      {course.category === "Web Development" &&
                        "Real-world web app projects"}
                      {course.category === "Data Science & AI" &&
                        "Hands-on data analysis labs"}
                      {course.category === "Programming" &&
                        "Code-along exercises"}
                      {course.category === "Cybersecurity" &&
                        "Simulated security scenarios"}
                      {course.category === "UI/UX Design" &&
                        "Portfolio-ready design projects"}
                      {course.category === "App Development" &&
                        "Mobile app deployment guidance"}
                      {course.category === "Digital Marketing" &&
                        "Live campaign simulations"}
                      {course.category === "Business Intelligence" &&
                        "Interactive dashboard building"}
                      {course.category === "Blockchain & Web3" &&
                        "Smart contract development"}
                      {course.category === "Communication Skills" &&
                        "Role-play and feedback sessions"}
                      {course.category === "Graphic Design" &&
                        "Creative design challenges"}
                      {course.category === "Career Development" &&
                        "Personal branding strategies"}
                      {/* fallback */}
                      {![
                        "Web Development",
                        "Data Science & AI",
                        "Programming",
                        "Cybersecurity",
                        "UI/UX Design",
                        "App Development",
                        "Digital Marketing",
                        "Business Intelligence",
                        "Blockchain & Web3",
                        "Communication Skills",
                        "Graphic Design",
                        "Career Development",
                      ].includes(course.category) &&
                        "Expert instructor support"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Project-based learning</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        course={course}
        amount={parseInt(course.price)}
      />
    </div>
  );
}
