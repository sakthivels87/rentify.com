import data from "../properties.json";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log("request::::", request);
  if (params) {
    console.log("params.....");
    const { collection } = params;
    if (data[collection]) {
      return NextResponse.json(data[collection]);
    }
  }
  if (data?.properties) return NextResponse.json(data?.properties);

  return NextResponse.json({ message: "Not found" }, { status: 404 });
}
