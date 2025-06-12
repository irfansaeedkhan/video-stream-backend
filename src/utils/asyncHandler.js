const asyncHandler = (requestHandler) => (req, res, next) =>
  Promise.resolve(requestHandler(req, res, next)).catch(next);

export { asyncHandler };

// higher order function to return a function
// const asyncHandler = (func) => { async () => { } }
// const asyncHandler = (func) =>  async () => { }

// const asyncHandler = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch(next);
// };

// try catch way of asyncHandler
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// export { asyncHandler };
