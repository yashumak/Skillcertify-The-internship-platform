import React, { useState } from "react";

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const passPropsToChildren = (children) =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // Only pass props to React components
        return React.cloneElement(child, {
          ...(typeof child.type === "function"
            ? { activeTab, setActiveTab }
            : {}),
          children: passPropsToChildren(child.props.children),
        });
      }
      return child; // Return as-is for non-React elements
    });

  return (
    <div className={`tabs ${className}`}>{passPropsToChildren(children)}</div>
  );
};

export const TabsList = ({ children, className }) => (
  <div className={`tabs-list flex ${className}`}>{children}</div>
);

export const TabsTrigger = ({
  value,
  children,
  activeTab,
  setActiveTab,
  className,
}) => (
  <button
    className={`tabs-trigger px-4 py-2 ${
      activeTab === value ? "bg-primary text-white" : "bg-gray-200"
    } ${className}`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children, activeTab, className }) => {
  if (activeTab !== value) return null;
  return <div className={`tabs-content ${className}`}>{children}</div>;
};
