"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// SVG paths for social media icons
const instagramPath =
  "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7zm3-18c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 11.5c2.49 0 4.5-2.01 4.5-4.5S14.49 6.5 12 6.5 7.5 8.51 7.5 11s2.01 4.5 4.5 4.5zm7.5-8c0 .828-.672 1.5-1.5 1.5S16.5 7.828 16.5 7s.672-1.5 1.5-1.5 1.5.672 1.5 1.5z";

const linkedinPath =
  "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M2 4a2 2 0 1 1 4 0 2 2 0 1 1-4 0";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Submission Failed",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_u50vhzj", // Your actual service ID
        "template_be5m21p", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "tNQzfIkgfaKpg85OZ" // Your actual EmailJS public key
      );

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description:
          "We've received your message and will get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Submission Failed",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="text-center shadow-2xl border-0 bg-gradient-to-br from-green-50 via-white to-green-100">
            <CardContent className="pt-10 pb-10 flex flex-col items-center">
              <div className="rounded-full bg-green-100 p-3 mb-4 shadow">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-2 text-green-800">
                Message Sent Successfully!
              </h1>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you for reaching out to us. We've received your message
                and will get back to you within 24-48 hours.
              </p>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 transition"
              >
                <a href="/">Return to Home</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Have questions or feedback? We'd love to hear from you. Fill out the
            form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/90">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  Send Us a Message/ Feedback
                </CardTitle>
                <CardDescription>
                  Fill out the form below to get in touch with our team
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter the Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-blue-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="abc@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-blue-50 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger
                        id="subject"
                        className="bg-blue-50 focus:bg-white"
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="courses">
                          Course Information
                        </SelectItem>
                        <SelectItem value="certificates">
                          Certificate Issues
                        </SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="bg-blue-50 focus:bg-white"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition text-lg font-semibold py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <Card className="shadow-xl border-0 bg-white/90">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  Contact Information
                </CardTitle>
                <CardDescription>Here's how you can reach us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      support@skillcertify.com
                    </p>
                    <p className="text-muted-foreground">
                      info@skillcertify.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                    <p className="text-muted-foreground">
                      Mon-Fri, 9AM-5PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Learning Street</p>
                    <p className="text-muted-foreground">Tech City, TC 12345</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <SocialIcon
                      href="#"
                      path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    />
                    <SocialIcon
                      href="#"
                      path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    />
                    <SocialIcon href="#" path={instagramPath} />
                    <SocialIcon href="#" path={linkedinPath} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Icon Component
const SocialIcon = ({ href, path }) => (
  <a
    href={href}
    className="bg-muted p-2 rounded-full hover:bg-primary/10 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d={path}></path>
    </svg>
  </a>
);
