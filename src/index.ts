import express, { Express, json } from "express";
import dotenv from "dotenv";
import userRouter from "./students/routes";

const app: Express = express();
dotenv.config();
app.use(json());
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
	console.log("listening on port " + port);
});
