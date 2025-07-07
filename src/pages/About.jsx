import React from "react";
import {
  Award,
  Users,
  Target,
  BookOpen,
  Globe,
  Check,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-800 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About SkillCertify
        </motion.h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Empowering individuals and organizations with industry-recognized
            certifications and cutting-edge training since 2025.
          </p>
        </div>
        <div className="flex justify-center">
          <Award className="h-24 w-24 text-blue-500 animate-pulse-slow drop-shadow-xl" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
          }}
        >
          <div className="flex items-center mb-4">
            <Globe className="h-7 w-7 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>
          </div>
          <p className="text-gray-700 font-medium">
            To democratize access to high-quality certification programs and
            training courses that empower individuals to advance their careers
            and organizations to build skilled, future-ready teams.
          </p>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
          }}
        >
          <div className="flex items-center mb-4">
            <Globe className="h-7 w-7 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-blue-800">Our Vision</h2>
          </div>
          <p className="text-gray-700 font-medium">
            To become the world's leading platform for professional
            certifications, recognized for the quality of our programs, the
            success of our alumni, and the innovative approach to continuous
            learning.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 drop-shadow">
          Our Story
        </h2>
        <div className="max-w-4xl mx-auto bg-white/80 rounded-xl p-8 shadow">
          <p className="text-gray-700 font-medium mb-4">
            Our Story SkillCertify was founded in 2025 with a single goal: to
            close the gap between what learners know and what modern industries
            demand. Born out of a desire to make professional certifications
            more relevant, practical, and accessible, SkillCertify is built for
            today’s fast-changing world.
          </p>
          <p className="text-gray-700 font-medium mb-4">
            We offer programs across technology, business, design, and personal
            development—crafted with input from leading industry experts and
            organizations. Our focus is on real-world skills, so learners can
            immediately apply what they’ve learned and move forward with
            confidence..
          </p>
          <p className="text-gray-700 font-medium mb-4">
            Today, SkillCertify operates globally with learning hubs in 12
            countries, a network of over 500 industry experts as instructors,
            and a community of more than 200,000 learners and certified
            professionals.Today, SkillCertify stands as a fast-growing platform
            driven by innovation, collaboration, and a passion for transforming
            the way professionals learn. We’re committed to building a future
            where career advancement is powered by accessible, real-world
            education—delivered by experts who understand what modern learners
            truly need.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="mb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 py-14 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-800 drop-shadow">
          SkillCertify in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            className="p-6 shadow-md bg-white rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={500} duration={2} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="text-gray-700 font-medium">Expert Instructors</div>
          </motion.div>
          <motion.div
            className="p-6 shadow-md bg-white rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp
                end={200000}
                duration={2.2}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </div>
            <div className="text-gray-700 font-medium">
              Certified Professionals
            </div>
          </motion.div>
          <motion.div
            className="p-6 shadow-md bg-white rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={150} duration={2} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="text-gray-700 font-medium">
              Certification Programs
            </div>
          </motion.div>
          <motion.div
            className="p-6 shadow-md bg-white rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={98} duration={2} enableScrollSpy scrollSpyOnce />%
            </div>
            <div className="text-gray-700 font-medium">Satisfaction Rate</div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 drop-shadow">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 border border-blue-100 rounded-lg shadow-md bg-white/90 transition-shadow"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
            }}
          >
            <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Industry-Aligned Curriculum
            </h3>
            <p className="text-gray-700">
              Our courses are designed in collaboration with industry leaders to
              ensure they address real-world challenges and skills requirements.
            </p>
          </motion.div>
          <motion.div
            className="p-8 border border-blue-100 rounded-lg shadow-md bg-white/90 transition-shadow"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
            }}
          >
            <Users className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Expert-Led Training
            </h3>
            <p className="text-gray-700">
              Learn from professionals who bring years of industry experience,
              ensuring you get practical insights beyond theoretical knowledge.
            </p>
          </motion.div>
          <motion.div
            className="p-8 border border-blue-100 rounded-lg shadow-md bg-white/90 transition-shadow"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
            }}
          >
            <Check className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Recognized Certifications
            </h3>
            <p className="text-gray-700">
              Our certifications are recognized globally by employers and
              industry associations, giving your credentials real workplace
              value.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl my-16 shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 drop-shadow">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
              Browse our certification programs and take the first step towards
              professional growth and recognition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg text-lg shadow-md hover:bg-gray-100 transition-all"
                >
                  Explore Courses <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg text-lg shadow-md hover:bg-blue-600 transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
