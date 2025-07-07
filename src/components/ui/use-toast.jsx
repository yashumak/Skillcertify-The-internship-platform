import { createContext, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toast = ({ title, description, variant }) => {
    console.log(`${variant || "info"}: ${title} - ${description}`);
    // Replace this with a proper toast library if needed
    alert(`${title}\n${description}`);
  };

  return (
    <ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
