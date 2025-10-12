import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../../domain/errors/forbidden-error";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const auth = getAuth(req);

  // Safely extract the role from sessionClaims
  // clerk sessionClaims format: https://clerk.com/docs/reference/backend/authentication/session-claims
  // In most cases, custom roles are under "publicMetadata" or "unsafeMetadata"
  const role =
    (auth?.sessionClaims as any)?.unsafeMetadata?.role ??
    (auth?.sessionClaims as any)?.publicMetadata?.role ??
    (auth?.sessionClaims as any)?.role;

  if (role !== "admin") {
    throw new ForbiddenError("ForbiddenError");
  }
  next();
};

export default isAdmin;