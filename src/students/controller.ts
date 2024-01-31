import { Request, Response } from "express";
import prisma from "../db";

const getUsers = async (_: Request, res: Response) => {
	try {
		const result = await prisma.user.findMany();
		if (result[0] == null || undefined) res.status(204).json(result);
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
};

const postUsers = async (req: Request, res: Response) => {
	try {
		const result = await prisma.user.create({ data: { ...req.body } });
		res.status(201).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
};

const updateUser = async (req: Request, res: Response) => {
	try {
		const result = await prisma.user.update({
			where: { id: req.body.id },
			data: { ...req.body.data },
		});
		res.status(201).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
};

const deleteUser = async (req: Request, res: Response) => {
	try {
		const result = await prisma.user.delete({ where: { id: req.body.id } });
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
};

export { getUsers, postUsers, updateUser, deleteUser };
