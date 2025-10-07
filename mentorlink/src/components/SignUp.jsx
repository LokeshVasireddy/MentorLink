import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // You can add signup logic here
    console.log("Sign Up submitted");
    // Optionally redirect after signup
    // navigate("/dashboard");
  };

  return (
    <div className="auth-container modern-bg">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" required className="auth-input" placeholder=" " />
            <label className="floating-label">Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" required className="auth-input" placeholder=" " />
            <label className="floating-label">Email</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="auth-input"
              placeholder=" "
            />
            <label className="floating-label">Password</label>
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="input-group">
            <input
              type={showConfirm ? "text" : "password"}
              required
              className="auth-input"
              placeholder=" "
            />
            <label className="floating-label">Confirm Password</label>
            <span
              className="toggle-password"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit" className="auth-button">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <span
            className="auth-link"
            role="button"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>

        <div className="divider"><span>Or continue with</span></div>

        <div className="social-buttons">
          <button className="social-btn google">
            <svg viewBox="0 0 24 24">
              <path fill="#fff" d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.32-1.44 3.87-5.27 3.87-3.17 0-5.77-2.6-5.77-5.77s2.6-5.77 5.77-5.77c1.44 0 2.4.61 2.95 1.14l2.02-2.02C18.19 3.5 16.35 2.5 13.9 2.5 7.85 2.5 3 7.35 3 13.4s4.85 10.9 10.9 10.9c6.3 0 10.9-4.55 10.9-10.9 0-.73-.07-1.28-.45-2.2z"/>
            </svg>
          </button>

          <button className="social-btn github">
            <svg viewBox="0 0 24 24">
              <path fill="#fff" d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.43 7.88 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.39.96.11-.75.41-1.26.74-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.87-.38.97 0 1.95.13 2.87.38 2.2-1.5 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.75.8 1.2 1.82 1.2 3.08 0 4.45-2.7 5.43-5.27 5.71.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.22 0 .31.21.68.8.56A10.92 10.92 0 0022 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
          </button>

          <button className="social-btn linkedin">
            <svg viewBox="0 0 24 24">
              <path fill="#fff" d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98 2.98-1.33 2.98-2.98S6.63 3.5 4.98 3.5zM2.5 21.5h5v-11h-5v11zm7.5-11h4.79v1.54h.07c.67-1.26 2.3-2.59 4.73-2.59 5.06 0 6 3.33 6 7.66v8.39h-5v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92v7.56h-5v-11z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
