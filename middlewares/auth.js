import { getSession } from "next-auth/react";
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from "./catchAsyncError";

const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });

  console.log("session", session);

  if (!session) {
    return next(new ErrorHandler("Login first to access this resource", 401));
    // return next
  }

  req.user = session.user;
  next();
});

export {
    isAuthenticatedUser
};
