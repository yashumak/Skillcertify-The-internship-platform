"use client";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courseData = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  description:
    "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.",
  category: "Web Development",
  level: "Beginner to Advanced",
  duration: "12 weeks",
  price: "Free",
  image: "/images/web.jpg",
  slug: "web-development-bootcamp",
};

export default function CourseCard({ course, index }) {
  const handleImageError = (e) => {
    e.target.src = "/images/placeholder.jpg";
    e.target.alt = "Course image placeholder";
  };

  const handleImageLoad = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div className="card-hover">
      <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300 opacity-0 transition-opacity duration-300"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="eager"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="mb-2">
              {course.category || "Uncategorized"}
            </Badge>
            <Badge variant="secondary">{course.level || "Unknown Level"}</Badge>
          </div>
          <Link
            to={`/courses/${course.slug || "#"}`}
            className="hover:underline"
          >
            <h3 className="text-xl font-bold">
              {course.title || "Untitled Course"}
            </h3>
          </Link>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">
            {course.description || "No description available."}
          </p>
          <div className="flex justify-between mt-4 text-sm text-muted-foreground">
            <span>Duration: {course.duration || "N/A"}</span>
            <span>Price: {course.price || "N/A"}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full cursor-pointer">
            <Link to={`/courses/${course.slug || "#"}`}>View Course</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
