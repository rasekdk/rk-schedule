import { Schema } from "mongoose";

import userInterface, { emailSchemaInterface } from "./user.interface";

const userSchema = new Schema<userInterface>({
  name: { type: String, required: true, unique: true, message: "used name" },
  email: {
    type: String,
    unique: true,
    message: "used email",
    required: "email required",
    validate: [validateEmail, "invalid email"],
  },
  password: { type: String, required: true },
  repeatPassword: { type: String, required: true },
  avatar: { type: String, required: false },
});

export default userSchema;

function validateEmail(email: string): boolean {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}
