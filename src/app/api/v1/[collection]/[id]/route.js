import { NextResponse } from "next/server";
import data from "../../properties.json";

export async function GET(request, { params }) {
  const { collection, id } = params;

  const items = data[collection];

  if (!items) {
    return NextResponse.json(
      { message: "Collection not found" },
      { status: 404 },
    );
  }

  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
