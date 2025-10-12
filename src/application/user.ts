import User from "../infrastructure/entities/User";
import ValidationError from "../domain/errors/validation-error";

import { Request, Response, NextFunction } from "express";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.body;
        if (
            !userData.fname ||
            !userData.lname ||
            !userData.address.line_1 ||
            !userData.address.city ||
            !userData.address.country ||
            !userData.address.zip
        ) {
            throw new ValidationError("Invalid user data");
        }
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};