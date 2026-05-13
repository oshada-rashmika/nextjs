import { NextResponse } from "next/server";
import { users } from "../../../lib/db"; // Import our fake brain

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json(); // Get the new name from the user
  
  // 1. Find the user in our list
  const userIndex = users.findIndex((u: any) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // 2. Update the name
  users[userIndex].name = body.name;

  return NextResponse.json({ message: "User updated!", user: users[userIndex] });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // 1. Find the user
  const userIndex = users.findIndex((u) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // 2. Remove them from the array
  users.splice(userIndex, 1);

  return NextResponse.json({ message: `User ${id} deleted forever!` });
}