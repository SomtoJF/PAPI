import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {
	res.send("Using api route");
});

export default Router;
