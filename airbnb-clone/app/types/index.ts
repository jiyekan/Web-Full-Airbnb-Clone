import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVarified"
> & {
  createdAt: String;
  updatedAt: String;
  emailVerified: String | null;
};