import { draftMode } from "next/headers";
import { NextServer } from "next/dist/server/next";
import { NextRequest } from "next/server";
import { url } from "inspector";
import { redirect } from "next/navigation";

export const Get = async(req:NextRequest)=>{
    const {searchParams} = new URL(req.url);
    const slug = searchParams.get("slug");

    (await draftMode()).enable();
    redirect(`/${slug}?${searchParams.toString()}`);
}
