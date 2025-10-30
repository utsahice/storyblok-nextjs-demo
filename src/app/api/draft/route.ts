import { draftMode } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  (await draftMode()).enable();

  redirect(`/${slug}?${searchParams.toString()}`);
}
