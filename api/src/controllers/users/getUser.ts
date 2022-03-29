import { Request, Response } from "express";
import userModel from "../../models/user/user.model";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const user = await userModel.find({ name: body.name });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

export { getAllUsers, getSingleUser };
