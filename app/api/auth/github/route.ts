import { client } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export const GET = async ( req: NextRequest, res: NextResponse) => {
    try {
        let res = await client.get('/api/auth/github', {
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(res)
    } catch (error) {
        return new Response("Failed to login with github", { status: 500 })

    }
}