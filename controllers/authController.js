// import cloudinary from 'cloudinary';
const cloudinary = require("cloudinary/lib/cloudinary");
import catchAsyncErrors from "../middlewares/catchAsyncError";
import User from "../models/users";

// setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// register user => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "booklit/avatars",
    width: "150",
    crop: "scale",
  });

  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "Account Registered successfully",
  });
});

// current user profile => /api/me
const currentUserProfile = catchAsyncErrors(async (req, res) => {

  const user = await User.findById(req.user._id);
  res.status(200).json({
      success: true,
      user
  })
  
});

// Get user details  =>   /api/register
const getUserDetails = catchAsyncErrors(async (req, res) => {

  const user = await User.find();

  console.log('------------------------')
  console.log('get all users', req.session);
  console.log('------------------------')

  if (!user) {
      return next(new ErrorHandler('User not found with this ID.', 400))
  }

  res.status(200).json({
      success: true,
      user
  })

})

export { registerUser, currentUserProfile, getUserDetails };
