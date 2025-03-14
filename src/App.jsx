import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    setUser(decoded);
    localStorage.setItem("user", JSON.stringify(decoded)); // Save user to localStorage
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("user"); // Remove from localStorage

    // Force Google to forget the last user
    document.cookie = "G_AUTHUSER_H=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "G_AUTHUSER_H=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=google.com; path=/";
  };

  return (
    <div className="container">
      <h2>Google Login in Vite + React</h2>
      {user ? (
        <div className="user-info">
          <h3>Welcome, <span>{user.name}</span></h3>
          <img src={user.picture} alt="Profile" />
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="google-login-wrapper">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Login Failed")}
          theme="outline"
          type="standard" // Ensures the standard "Sign in with Google" button
          shape="rectangular"
          size="large"
          prompt="select_account" // Forces account selection
        />
        </div>
      )}
    </div>
  );
};

export default App;
