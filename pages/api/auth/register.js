import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getUserDetails, registerUser } from "../../../controllers/authController";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.post(registerUser);
handler.get(getUserDetails);

export default handler;
