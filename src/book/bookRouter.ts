import express from "express";
import { createUser, loginUser } from "./userController";

const bookRouter = express.Router();

bookRouter.post("/", createbook);
bookRouter.post("/login", loginbook);

export default bookRouter;
