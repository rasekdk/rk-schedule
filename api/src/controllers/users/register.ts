import { Request, Response } from "express";
import userModel from "../../models/user/user.model";
import { userInterface } from "./users.interface";

const register = async (req: Request, res: Response) => {
  try {
    const body: userInterface = req.body;

    const user = new userModel(body);

    await user.save();

    res.send({ message: "Created user" });
  } catch (err) {
    res.send({ status: "error", message: err.message });
  }
};

export default register;
