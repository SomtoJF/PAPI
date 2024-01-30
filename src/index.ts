import { Express, json } from "express";
const express = require("express");

const app: Express = express();
app.use(json);
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log("listening on port " + port);
});
