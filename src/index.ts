import express, { Express, json } from "express";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();
app.use(json());
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log("listening on port " + port);
});
