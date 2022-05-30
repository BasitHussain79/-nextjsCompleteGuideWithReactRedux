import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../config/dbConnect";
import User from "../../../models/users";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jhon@test.com'
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        // Check if email and password is entered
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }

        // Find user in the database
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        // Check if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: ({token, user}) => {
      if(user) {
        token.id = user.user
      }
      return token;
    },
    session: ({session, token}) => {
      if(token) {
        session.user = token.id;
      }

      return session;
    }
  },
  secret: 'test',
  jwt: {
    secret: 'test123',
    encryption: true
  }
});
