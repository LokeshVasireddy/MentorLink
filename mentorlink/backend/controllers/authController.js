import User from "../models/User.js";

/**
 * Sign Up Controller
 * Creates a new user account with validation
 */
export const signUp = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    // Input validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: fullName, email, password",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered. Please use a different email or sign in.",
      });
    }

    // Create new user (password will be hashed by schema pre-save hook)
    const newUser = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    // Return user without password
    const userResponse = newUser.toJSON();

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      user: {
        id: userResponse._id,
        fullName: userResponse.fullName,
        email: userResponse.email,
      },
    });
  } catch (err) {
    console.error("[SignUp Error]", err);

    // Handle validation errors from schema
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    // Handle duplicate key error
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

/**
 * Sign In Controller
 * Authenticates user and returns success status
 */
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user and explicitly select password field
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare passwords using schema method
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Return success response
    const userResponse = user.toJSON();

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: userResponse._id,
        fullName: userResponse.fullName,
        email: userResponse.email,
      },
    });
  } catch (err) {
    console.error("[SignIn Error]", err);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};
