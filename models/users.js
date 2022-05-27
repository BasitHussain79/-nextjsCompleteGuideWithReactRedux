import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [50, "Your name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Your password must be longer than 6 characters'],
    select: false
  },
  avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

// encrypting password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcryptjs.hash(this.password, 10)
})

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password)
}

export default mongoose.models.User || mongoose.model('User', userSchema)
