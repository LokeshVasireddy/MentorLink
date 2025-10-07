import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-left">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
          alt="Mentorship"
          className="auth-bg-image"
        />
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Sign Up</h2>
          <form className="auth-form">
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input type="text" placeholder="Full Name" required className="auth-input" />
            </div>
            <div className="input-group">
              <span className="input-icon">📧</span>
              <input type="email" placeholder="Email" required className="auth-input" />
            </div>
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="auth-input"
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p className="auth-footer">
            Already have an account?{" "}
            <span className="auth-link" onClick={() => navigate("/")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
