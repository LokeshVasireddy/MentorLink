import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-left">
        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
          alt="Mentorship"
          className="auth-bg-image"
        />
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Sign In</h2>
          <form className="auth-form">
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
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="auth-button">Sign In</button>
          </form>
          <p className="auth-footer">
            Don't have an account?{" "}
            <span className="auth-link" onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
          <div className="divider"><span>Or continue with</span></div>
          <div className="social-buttons">
            <button className="social-btn google">G</button>
            <button className="social-btn github">GH</button>
            <button className="social-btn linkedin">IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
