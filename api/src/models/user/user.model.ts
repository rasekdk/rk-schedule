import { model } from "mongoose";

import userSchema from "./user.schema";
import userInterface from "./user.interface";

const userModel = model<userInterface>("User", userSchema);

export default userModel;
