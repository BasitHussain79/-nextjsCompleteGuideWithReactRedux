import catchAsyncErrors from "../middlewares/catchAsyncError";
import User from "../models/users";

// get all rooms => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'PUBLIC_ID',
      url: 'URL',
    },
  });

  res.status(200).json({
    success: true,
    message: "Account Registered successfully",
  });
});

export { registerUser };
