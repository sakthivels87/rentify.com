import { NextResponse } from "next/server";
import data from "../properties.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");

  const users = data.users;

  if (!users) {
    return NextResponse.json(
      { message: "Users collection not found" },
      { status: 404 },
    );
  }

  // If email query exists, filter
  if (email) {
    const filteredUser = users.find((user) => user.email === email);

    if (!filteredUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(filteredUser);
  }

  // Otherwise return all users
  return NextResponse.json(users);
}
