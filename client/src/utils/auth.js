// Authentication utility functions

// Get current user from localStorage
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

// Check if user is logged in
export const isLoggedIn = () => {
  const user = getCurrentUser();
  return user && user.isLoggedIn;
};

// Save user data to localStorage
export const saveUser = (userData) => {
  try {
    const user = {
      ...userData,
      isLoggedIn: true,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  } catch (error) {
    console.error('Error saving user data:', error);
    return false;
  }
};

// Remove user data from localStorage (logout)
export const logout = () => {
  try {
    localStorage.removeItem('user');
    return true;
  } catch (error) {
    console.error('Error removing user data:', error);
    return false;
  }
};

// Get user token (if you implement JWT later)
export const getToken = () => {
  const user = getCurrentUser();
  return user?.token || null;
};

// Check if user session is expired (optional - you can implement session timeout)
export const isSessionExpired = () => {
  const user = getCurrentUser();
  if (!user || !user.loginTime) return true;
  
  const loginTime = new Date(user.loginTime);
  const now = new Date();
  const hoursDiff = (now - loginTime) / (1000 * 60 * 60);
  
  // Session expires after 24 hours (you can adjust this)
  return hoursDiff > 24;
};

