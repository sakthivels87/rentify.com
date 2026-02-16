import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const dynamic = "force-dynamic";
import data from "../../../../db.json";
export async function POST(req) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // const existingUsers = await fetch(
    //   `${baseUrl}/api/v1/users?email=${encodeURIComponent(email)}`,
    // ).then((r) => r.json());

    const existingUsers = data.users.filter(
      (user) => user.email === encodeURIComponent(email),
    );
    if (existingUsers.length > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      email,
      name,
      passwordHash: hashedPassword,
      role: "user",
      avatar: `https://picsum.photos/id/${Math.floor(Math.random() * 30) + 1000}/200/200`,
      lastLogin: new Date().toISOString(),
      status: "active",
    };

    // const createResponse = await fetch(`${baseUrl}/api/v1/users`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newUser),
    // });

    const createResponse = data.users;

    if (!createResponse.ok) {
      throw new Error("Failed to create user");
    }

    const createdUser = await createResponse.json();

    const { passwordHash: _, ...userWithoutPassword } = createdUser;

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 },
    );
  }
}
