import express from "express";
import { deleteUser, getUsers, postUsers, updateUser } from "./controller";

const Router = express.Router();

Router.route("/")
	.get(getUsers)
	.post(postUsers)
	.put(updateUser)
	.delete(deleteUser);

export default Router;
