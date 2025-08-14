import React from "react";

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md bg-white ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

export const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={`p-4 border-t ${className}`}>{children}</div>
);

<CardHeader>
  <CardTitle>Send Us a Message</CardTitle>
  <p className="text-sm text-gray-500">
    Fill out the form below to get in touch with our team
  </p>
</CardHeader>;
