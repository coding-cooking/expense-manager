import { client } from ".";

export async function getUserById(
    accessToken: string | undefined,
    userId: string
) {
    const userInfo = await client.get(`/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return userInfo;
}