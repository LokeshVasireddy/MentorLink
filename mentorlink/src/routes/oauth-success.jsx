import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Processing...");

  useEffect(() => {
    const handleOAuthCallback = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        
        console.log("OAuth callback received, token:", token ? "present" : "missing");
        
        if (token) {
          // Clear any existing token first
          localStorage.removeItem("token");
          
          // Set new token
          localStorage.setItem("token", token);
          
          // Verify token was saved
          const savedToken = localStorage.getItem("token");
          console.log("Token saved:", savedToken ? "yes" : "no");
          
          setStatus("Login successful! Redirecting to dashboard...");
          
          // Small delay to ensure token is saved
          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 500);
        } else {
          console.error("No token received in OAuth callback");
          setStatus("Login failed. Redirecting to sign in...");
          setTimeout(() => {
            navigate("/signin", { replace: true });
          }, 1000);
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        setStatus("Error processing login. Redirecting...");
        setTimeout(() => {
          navigate("/signin", { replace: true });
        }, 1000);
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{
        padding: "2rem",
        borderRadius: "8px",
        background: "#f5f5f5",
        textAlign: "center"
      }}>
        <div style={{
          fontSize: "1.5rem",
          marginBottom: "1rem"
        }}>
          🔐
        </div>
        <div style={{ fontSize: "1.1rem", color: "#333" }}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default OAuthSuccess;
