import { PrismaClient } from "@prisma/client";
import { currentUser } from "../_libs/extensions/current-user";

const client = new PrismaClient().$extends(currentUser());

const globalForPrisma = globalThis as unknown as {
    prisma: typeof client | undefined;
}

const prisma = globalForPrisma.prisma ?? client

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const db = prisma