import { NextResponse } from "next/server";
import { db } from "@/app/[lang]/_utils/db";
import { SHA256 as sha256 } from "crypto-js";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        })
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: 'This user email already in the system' }, { status: 409 })
        }
        const newUser = await db.user.create({
            data: {
                name: username,
                password: sha256(password).toString(),
                email: email
            },
        })
        return NextResponse.json({ user: newUser, message: 'User created successfully' }, {status: 201});
    } catch (error) {
        console.log(error)
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            console.log(error.code)
            if (error.code === 'P2002') {
              console.log(
                'There is a unique constraint violation, a new user cannot be created with this email'
              )
            }
          }
          return NextResponse.json({error: error})
    }
}