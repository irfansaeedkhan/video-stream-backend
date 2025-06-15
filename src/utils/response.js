// utils/response.js

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

class ApiError extends Error {
  /**
   * @param {number} statusCode - HTTP status code (e.g. 400, 404, 500)
   * @param {string} message - Human-readable error message
   * @param {Array} errors - Optional detailed error info (e.g., validation issues)
   * @param {string} stack - Optional stack trace
   * @param {any} data - Optional payload related to the error
   */
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = "",
    data = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = data;
    this.success = false;

    // Optional stack override
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiResponse, ApiError };

// usage example
// 🧪 How to Use in Your Project
// ✅ Sending Success Response:
// js
// Copy
// Edit
// import { ApiResponse } from "./utils/response.js";

// app.get("/users", asyncHandler(async (req, res) => {
//   const users = await User.find();
//   res.status(200).json(new ApiResponse(200, users));
// }));
// ❌ Throwing Error Response:
// js
// Copy
// Edit
// import { ApiError } from "./utils/response.js";

// if (!email.includes("@")) {
//   throw new ApiError(
//     422,
//     "Validation failed",
//     [{ field: "email", message: "Invalid email format" }],
//     "",
//     { inputEmail: email }
//   );
// }
// 🛡️ Error Handler Middleware (optional example)
// js
// Copy
// Edit
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   res.status(statusCode).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//     errors: err.errors || [],
//     data: err.data || null,
//     stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
//   });
// });
